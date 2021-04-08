import { Module } from '@nestjs/common';
import { LinearService } from './linear.service';
import { LinearController } from './linear.controller';

@Module({
  controllers: [LinearController],
  providers: [LinearService]
})
export class LinearModule {}
