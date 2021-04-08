import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RootModule } from './root/root.module';
import { LinearModule } from './linear/linear.module';

@Module({
  imports: [RootModule, LinearModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
