import { DataSource } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';
import { User } from './src/users/enities/user.entity';
import { Team } from './src/users/enities/team.entity';
import { Task } from './src/tasks/entities/task.entity';
import { UserTask } from './src/tasks/entities/user-task.entity';
import { Feature } from './src/features/entities/feature.entity';
import { UserFeature } from './src/features/entities/user-feature.entity';

config();

const configService = new ConfigService();

export default new DataSource({
  type: 'postgres',
  host: configService.get('POSTGRES_HOST'),
  port: configService.get('POSTGRES_PORT'),
  username: configService.get('POSTGRES_USER'),
  password: configService.get('POSTGRES_PASSWORD'),
  database: configService.get('POSTGRES_DB'),
  entities: [User, Team, Task, UserTask, Feature, UserFeature],

  // We are using migrations, synchronize should be set to false.
  synchronize: false,

  logging: true,
  logger: 'file',

  // allow both start:prod and start:dev to use migrations
  // __dirname is either dist or src folder, meaning either
  // the compiled js in prod or the ts in dev
  migrations: ['migrations/**/*{.ts,.js}'],
});
