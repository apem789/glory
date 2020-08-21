import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const adminPort = process.env.APP_ADMIN_PORT || 3000
  await app.listen(adminPort);
  // TODO
  console.log('admin-api server run at ', adminPort)
}
bootstrap();
