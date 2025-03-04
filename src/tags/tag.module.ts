import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Tag } from '../models/tags/tags.model';
import { TagService } from '../services/tags/tags.service';
import { TagController } from '../controllers/tags/tag.controllers';


@Module({
  imports: [SequelizeModule.forFeature([Tag])],
  controllers: [TagController],
  providers: [TagService],
  exports: [TagService],
})
export class TagModule {}
