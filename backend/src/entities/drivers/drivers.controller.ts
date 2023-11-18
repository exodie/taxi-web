import { ApiTags } from '@nestjs/swagger';
import { Controller } from '@nestjs/common';
import { DriversService } from './drivers.service';

@ApiTags('drivers')
@Controller('drivers')
export class DriversController {
  constructor(private readonly driversService: DriversService) {}
}
