import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('database')
@Controller('database')
export class DatabaseController {}
