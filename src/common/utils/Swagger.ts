import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export class Swagger {
  static BEARER_AUTH_NAME = 'access-token';
  static API_KEY = 'x-api-key';
  constructor(app) {
    const swagger = new DocumentBuilder()
      .setTitle('Tu Cole')
      .setDescription('API endpoints information')
      .setVersion('1.0')
      .addBearerAuth(
        {
          description: `[just text field] Please enter token in following format: Bearer <JWT>`,
          name: 'Authorization',
          bearerFormat: 'JWT',
          scheme: 'bearer',
          type: 'http',
          in: 'header',
        },
        Swagger.BEARER_AUTH_NAME,
      )
      // .addApiKey(
      //   {
      //     type: 'apiKey',
      //     description: 'API Key',
      //     in: 'header',
      //     name: 'x-api-key',
      //   },
      //   Swagger.API_KEY,
      // )
      .addTag('health')
      .addTag('vitacore')
      .build();
    const document = SwaggerModule.createDocument(app, swagger);

    SwaggerModule.setup('api', app, document);
  }
}
