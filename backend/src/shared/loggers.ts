import { Logger } from '@nestjs/common';

export const mainLogger = new Logger('MAIN');

export const authLogger = new Logger('AUTH');

export const emailLogger = new Logger('EMAIL');
