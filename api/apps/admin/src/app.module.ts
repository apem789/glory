import { Module, ValidationPipe } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommonModule } from '@libs/common';
import { CategoriesModule } from './categories/categories.module';
import { AdminsModule } from './admins/admins.module';
import { APP_INTERCEPTOR, APP_FILTER, APP_PIPE } from '@nestjs/core';
import { ResponseInterceptor } from '@libs/common/interceptor/response.interceptor';
import { AllExceptionFilter } from '@libs/common/filter/all-exception.filter';

@Module({
  imports: [
    CommonModule,
    CategoriesModule,
    AdminsModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      // 全局异常过滤器
      provide: APP_FILTER,
      useClass: AllExceptionFilter
    },
    {
      // 全局成功响应消息拦截器
      provide: APP_INTERCEPTOR,
      useClass: ResponseInterceptor
    },
    {
      // 开启全局管道检验
      provide: APP_PIPE,
      useClass: ValidationPipe
    }
  ],
})
export class AppModule {}
