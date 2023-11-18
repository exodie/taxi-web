import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { CustomersService } from './customers.service';

@ApiTags('customers')
@Controller('customers')
export class CustomersController {
  constructor(private readonly customersServices: CustomersService) {}
}
