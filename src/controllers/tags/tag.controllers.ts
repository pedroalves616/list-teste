import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { TagService } from '../../services/tags/tags.service';
import { Tag } from '../../models/tags/tags.model';

@Controller('tags')
export class TagController {
  constructor(private readonly tagService: TagService) {}

  @Get()
  findAll(): Promise<Tag[]> {
    return this.tagService.findAll();
  }

  @Post()
  create(@Body() tagData: Partial<Tag>): Promise<Tag> {
    return this.tagService.create(tagData);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() tagData: Partial<Tag>): Promise<[number, Tag[]]> {
    return this.tagService.update(id, tagData);
  }

  @Delete(':id')
  delete(@Param('id') id: string): Promise<void> {
    return this.tagService.delete(id);
  }
}

