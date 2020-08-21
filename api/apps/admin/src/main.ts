import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

  // swagger 初始化
  const options = new DocumentBuilder()
    .setTitle('后台cms接口文档')
    .setDescription('后台cms接口文档-提供api服务')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api-doc', app, document);

  const adminPort = process.env.APP_ADMIN_PORT || 3000
  await app.listen(adminPort);
  // TODO
  console.log('admin-api server run at ', adminPort)
}
bootstrap();
