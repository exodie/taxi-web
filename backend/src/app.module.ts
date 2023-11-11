import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './services/auth/auth.module';
import { EmailModule } from './services/email/email.module';
import { DatabaseModule } from './services/database/database.module';

@Module({
  imports: [AuthModule, EmailModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
