import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RootModule } from './root/root.module';
import { LinearModule } from './linear/linear.module';
import { RegressionModule } from './regression/regression.module';

@Module({
  imports: [RootModule, LinearModule, RegressionModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
