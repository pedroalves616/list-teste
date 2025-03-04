import { Table, Column, Model, BelongsToMany } from 'sequelize-typescript';
import { Task } from '../tasks/task.model';
import { TaskTag } from '../task-tags/task-tag.model';

@Table
export class Tag extends Model {
  @Column({ allowNull: false })
  name: string;

  @Column({ allowNull: false })
  color: string;

  @BelongsToMany(() => Task, () => TaskTag)
  tasks: Task[];
}
