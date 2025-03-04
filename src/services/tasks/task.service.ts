import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Task } from '../../models/tasks/task.model';

@Injectable()
export class TaskService {
  constructor(@InjectModel(Task) private taskModel: typeof Task) {}

  async findAll(): Promise<Task[]> {
    return this.taskModel.findAll({ include: { all: true } });
  }

  async create(taskData: Partial<Task>): Promise<Task> {
    return this.taskModel.create(taskData);
  }

  async update(id: string, taskData: Partial<Task>): Promise<[number, Task[]]> {
    return this.taskModel.update(taskData, { where: { id }, returning: true });
  }

  async delete(id: string): Promise<void> {
    const task = await this.taskModel.findByPk(id);
    if (task) await task.destroy();
  }
}
