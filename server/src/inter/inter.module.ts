import { Module } from '@nestjs/common';
import { InterService } from './inter.service';
import { InterController } from './inter.controller';

@Module({
  controllers: [InterController],
  providers: [InterService]
})
export class InterModule {}
