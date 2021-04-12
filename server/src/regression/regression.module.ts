import { Module } from '@nestjs/common';
import { RegressionService } from './regression.service';
import { RegressionController } from './regression.controller';

@Module({
  controllers: [RegressionController],
  providers: [RegressionService]
})
export class RegressionModule {}
