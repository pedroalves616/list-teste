import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule } from '@nestjs/config';
import { Task } from '../models/tasks/task.model';
import { Tag } from '../models/tags/tags.model';
import { TaskTag } from '../models/task-tags/task-tag.model';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, 
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.DB_HOST || 'localhost',
      port: Number(process.env.DB_PORT) || 5432,
      username: process.env.DB_USER || 'postgres',
      password: process.env.DB_PASSWORD || '123456',
      database: process.env.DB_NAME || 'todolist',
      autoLoadModels: true,
      synchronize: true,
      models: [Task, Tag, TaskTag],
    }),
  ],
})
export class DatabaseModule {}
