import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { DatabaseModule } from './database/database.module';
import { TaskModule } from './tasks/task.module';
import { TagModule } from './tags/tag.module';
import { AppService } from './app.service';

@Module({
  imports: [
    DatabaseModule,
    TaskModule,
    TagModule,
    SequelizeModule.forFeature([]),
  ],
})

export class AppModule {}


