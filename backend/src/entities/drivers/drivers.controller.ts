import { ApiTags } from '@nestjs/swagger';
import { Controller } from '@nestjs/common';

@ApiTags('drivers')
@Controller('drivers')
export class DriversController {}
