import { ClassSerializerInterceptor, Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { GlobalExceptionFilter } from './common/filters/globalException.filter';

async function bootstrap() {
  
  const app = await NestFactory.create(AppModule);

  //<-- add validation globally
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  //<-- Error handling
  app.useGlobalFilters(new GlobalExceptionFilter());

  
  //<-- remove the exclude items
  app.useGlobalInterceptors(new ClassSerializerInterceptor(app.get(Reflector)));


  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);
  
  const port = process.env.PORT || 3000;
  await app.listen(port);
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
  );
}

bootstrap();