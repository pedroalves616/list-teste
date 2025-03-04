import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Task } from '../models/tasks/task.model';
import { TaskService } from '../services/tasks/task.service';
import { TaskController } from '../controllers/tasks/task.controller';

@Module({
  imports: [SequelizeModule.forFeature([Task])],
  controllers: [TaskController],
  providers: [TaskService],
  exports: [TaskService],
})
export class TaskModule {}
