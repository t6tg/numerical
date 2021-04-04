import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  const config = new DocumentBuilder()
    .setTitle('Numerical Method API Document')
    .setVersion('1.0')
    .addTag('Root of Equation')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);
  await app.listen(5500);
}
bootstrap();
