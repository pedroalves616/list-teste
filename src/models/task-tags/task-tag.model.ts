import { Table, Column, Model, ForeignKey } from 'sequelize-typescript';
import { Task } from '../tasks/task.model';
import { Tag } from '../tags/tags.model';

@Table
export class TaskTag extends Model {
  @ForeignKey(() => Task)
  @Column
  taskId: number;

  @ForeignKey(() => Tag)
  @Column
  tagId: number;
}


