import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './services/auth/auth.module';
import { EmailModule } from './services/email/email.module';
import { DatabaseModule } from './services/database/database.module';
import { DriversModule } from './entities/drivers/drivers.module';
import { CustomersService } from './entities/customers/customers.service';
import { CustomersModule } from './entities/customers/customers.module';

@Module({
  imports: [
    AuthModule,
    EmailModule,
    DatabaseModule,
    DriversModule,
    CustomersModule,
  ],
  controllers: [AppController],
  providers: [AppService, CustomersService],
})
export class AppModule {}
