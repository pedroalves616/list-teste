import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Tag } from '../../models/tags/tags.model';

@Injectable()
export class TagService {
  constructor(@InjectModel(Tag) private tagModel: typeof Tag) {}

  async findAll(): Promise<Tag[]> {
    return this.tagModel.findAll();
  }

  async create(tagData: Partial<Tag>): Promise<Tag> {
    return this.tagModel.create(tagData);
  }

  async update(id: string, tagData: Partial<Tag>): Promise<[number, Tag[]]> {
    return this.tagModel.update(tagData, { where: { id }, returning: true });
  }

  async delete(id: string): Promise<void> {
    const tag = await this.tagModel.findByPk(id);
    if (tag) await tag.destroy();
  }
}
