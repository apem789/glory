import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import * as helment from 'helmet'
import * as rateLimit from 'express-rate-limit'
import { NestExpressApplication } from '@nestjs/platform-express/interfaces/nest-express-application.interface'

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule)

  // 安全配置: 跨域、helmet、限速
  app.enableCors()
  app.use(helment())
  app.use(
    rateLimit({
      windowMs: 60,
      max: 30
    }),
  )
  app.set('trust proxy', 1)

  // swagger 初始化
  const options = new DocumentBuilder()
    .setTitle('后台cms接口文档')
    .setDescription('后台cms接口文档-提供api服务')
    .setVersion('1.0')
    .addBearerAuth()
    .build()
  const document = SwaggerModule.createDocument(app, options)
  SwaggerModule.setup('api-doc', app, document)

  const adminPort = process.env.APP_ADMIN_PORT || 3000
  await app.listen(adminPort)
  // TODO
  console.log('后台api服务运行在端口: ', adminPort)
}
bootstrap()
