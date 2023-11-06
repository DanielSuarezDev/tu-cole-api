import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';

import { AppModule } from './app.module';
import { Swagger } from './common/utils/Swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      forbidUnknownValues: false,
    }),
  );

  if (process.env.NODE_ENV !== 'production') {
    new Swagger(app);
  }

  app.enableCors();
  const port = process.env.PORT || 3000;
  await app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
}
bootstrap();
