import { Table, Column, Model, DataType, BelongsToMany } from 'sequelize-typescript';
import { Tag } from '../tags/tags.model';
import { TaskTag } from '../task-tags/task-tag.model';

@Table
export class Task extends Model {
  @Column({ allowNull: false })
  title: string;

  @Column({ type: DataType.ENUM('Em andamento', 'Finalizado'), allowNull: false })
  status: string;

  @Column({ type: DataType.INTEGER, allowNull: false })
  priority: number;

  @Column({ type: DataType.TEXT })
  description: string;

  @BelongsToMany(() => Tag, () => TaskTag)
  tags: Tag[];
}
