import { Controller, Get, Post, Body, Param, Query } from '@nestjs/common';
import { TasksService, TaskStatus } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { User as UserDecorator } from '../users/user.decorator';
import { User } from '../users/enities/user.entity';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Post('create')
  create(@UserDecorator() user: User, @Body() createTaskDto: CreateTaskDto) {
    return this.tasksService.create(user, createTaskDto);
  }

  @Get()
  findAll(
    @UserDecorator() user: User,
    @Query('featureId') featureId: number,
    @Query('status') status: TaskStatus,
  ) {
    return this.tasksService.findAll(
      user,
      Number.isNaN(featureId) ? undefined : featureId,
      status,
    );
  }

  @Get('progress')
  async getCountInProgress(@UserDecorator() user: User) {
    return {
      countTasksInProgress: await this.tasksService.getCount(
        user,
        TaskStatus.IN_PROGRESS,
      ),
      countTasksCompleted: await this.tasksService.getCount(
        user,
        TaskStatus.DONE,
      ),
    };
  }

  @Post(':id/fullfill')
  fullfill(@UserDecorator() user: User, @Param('id') taskId: number) {
    return this.tasksService.fullfill(user, taskId);
  }

  @Post(':id/confirm')
  confirm(@UserDecorator() user: User, @Param('id') taskId: string) {
    this.tasksService.confirm(user, taskId);
  }
}
