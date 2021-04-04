import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RootModule } from './root/root.module';

@Module({
  imports: [RootModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
