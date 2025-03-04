import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { TaskService } from '../../services/tasks/task.service';
import { Task } from '../../models/tasks/task.model';

@Controller('tasks')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Get()
  findAll(): Promise<Task[]> {
    return this.taskService.findAll();
  }

  @Post()
  create(@Body() taskData: Partial<Task>): Promise<Task> {
    return this.taskService.create(taskData);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() taskData: Partial<Task>): Promise<[number, Task[]]> {
    return this.taskService.update(id, taskData);
  }
    

  @Delete(':id')
  delete(@Param('id') id: string): Promise<void> {
    return this.taskService.delete(id);
  }
}
