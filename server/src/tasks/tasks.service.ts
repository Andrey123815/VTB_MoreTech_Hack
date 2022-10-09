import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BlockchainService } from '../blockchain/blockchain.service';
import { FeaturesService } from '../features/features.service';
import { User } from '../users/enities/user.entity';
import { Repository } from 'typeorm';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task, TaskCreationStatus } from './entities/task.entity';
import { TaskCompletionStatus, UserTask } from './entities/user-task.entity';

export enum TaskStatus {
  NEW = 'new',
  IN_PROGRESS = 'in_progress',
  DONE = 'done',
}

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task)
    private taskRepository: Repository<Task>,
    @InjectRepository(UserTask)
    private userTaskRepository: Repository<UserTask>,
    private featuresService: FeaturesService,
    private blockchainService: BlockchainService,
  ) {}

  create(creator: User, createTaskDto: CreateTaskDto) {
    const task = this.taskRepository.create(createTaskDto);
    task.creator = creator;
    task.creationStatus = TaskCreationStatus.CREATED;
    return this.taskRepository.save(task);
  }

  async update(id: number, updateTaskDto: UpdateTaskDto) {
    const task = await this.taskRepository.findOneBy({ id });

    if (task === undefined) {
      throw new BadRequestException('Task with such id is not exist');
    }

    task.title = updateTaskDto.title;
    task.description = updateTaskDto.description;
    task.featureId = updateTaskDto.featureId;
    task.rewardCoins = updateTaskDto.rewardCoins;

    return this.taskRepository.save(task);
  }

  async findAll(
    user: User,
    featureId: number | undefined,
    status: TaskStatus,
  ): Promise<Task[] | UserTask[]> {
    if (status === TaskStatus.NEW) {
      const tasks = await this.taskRepository.find({
        where:
          featureId !== undefined
            ? {
                featureId,
              }
            : undefined,
        relations: {
          userTasks: true,
        },
      });
      return tasks.filter(
        (task) => !task.userTasks.map((item) => item.userId).includes(user.id),
      );
    }

    return this.userTaskRepository.find({
      where: {
        userId: user.id,
        task: {
          featureId,
        },
        completionStatus:
          status === TaskStatus.DONE
            ? TaskCompletionStatus.DONE
            : TaskCompletionStatus.IN_PROGRESS,
      },
      relations: {
        task: true,
      },
    });
  }

  getCount(user: User, status: TaskStatus.DONE | TaskStatus.IN_PROGRESS) {
    return this.userTaskRepository.count({
      where: {
        userId: user.id,
        completionStatus:
          status === TaskStatus.DONE
            ? TaskCompletionStatus.DONE
            : TaskCompletionStatus.IN_PROGRESS,
      },
    });
  }

  async fullfill(user: User, taskId: number) {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const crypto = require('crypto');

    const task = await this.taskRepository.findOne({
      where: { id: taskId },
      relations: { creator: true },
    });

    if (user.id === task.creator.id) {
      throw new BadRequestException('You cannot fullfill your task.');
    }

    const userFeature = user.userFeatures.find(
      (feature) => feature.featureId === task.featureId,
    );

    const userTask = new UserTask();
    userTask.id = crypto.randomBytes(8).toString('hex');
    userTask.task = task;
    userTask.user = user;
    userTask.rewardFeature = (100 - (userFeature.score - 10)) * 0.01;

    return await this.userTaskRepository.save(userTask);
  }

  async confirm(user: User, taskId: string) {
    const task = await this.userTaskRepository.findOne({
      where: { id: taskId },
      relations: { user: { userFeatures: true, mainWallet: true }, task: true },
    });

    if (user.id === task.userId) {
      throw new BadRequestException('You cannot confirm your task.');
    }

    task.completionStatus = TaskCompletionStatus.DONE;
    task.doneAt = Date.now();
    await this.userTaskRepository.save(task);

    await this.featuresService.richFeature(
      task.user,
      task.featureId,
      task.rewardFeature,
    );

    await this.blockchainService.fillWallet(
      task.user.mainWallet,
      task.task.rewardCoins,
    );
  }
}
