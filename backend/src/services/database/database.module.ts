import { Module } from '@nestjs/common';

import { DatabaseService } from './database.service';
import { DatabaseController } from './database.controller';
import { databaseProviders } from './database.providers';

@Module({
  providers: [DatabaseService, ...databaseProviders],
  controllers: [DatabaseController],
  exports: [...databaseProviders],
})
export class DatabaseModule {}
