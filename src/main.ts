import * as dotenv from 'dotenv';
dotenv.config();

import * as admin from 'firebase-admin';
import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';

import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import serviceAccount from '../serviceAccountKey.json';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: false });

  const firebase_private_key_b64 = Buffer.from(
    process.env.JSON_FIREBASE,
    'base64',
  );
  const firebase_private_key = firebase_private_key_b64.toString('utf8');
  console.log(firebase_private_key);
  app.enableCors({ origin: '*' });

  console.log('process.env.JSON_FIREBASE', process.env.JSON_FIREBASE);

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      forbidUnknownValues: false,
    }),
  );

  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
  });

  // if (process.env.NODE_ENV !== 'production') {
  //   new Swagger(app);
  // }

  const config = new DocumentBuilder()
    .setTitle('Tu-Cole API')
    .setDescription('Tu-Cole API')
    .setVersion('1.0')
    .addTag('Tu-Cole')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  const port = process.env.PORT || 3000;
  await app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
}
bootstrap();
