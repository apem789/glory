import { NestInterceptor, ExecutionContext, CallHandler, Injectable } from "@nestjs/common";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


/** 成功-响应消息体 */
interface Response<T> {
  data: T
}

/** 全局-响应成功-返回消息格式转换拦截器 */
@Injectable()
export class ResponseInterceptor<T> implements NestInterceptor<T, Response<T>> {
  intercept(context: ExecutionContext, next: CallHandler<T>): Observable<Response<T>> | Promise<Observable<Response<T>>> {
    return next.handle().pipe(
      // rxjs转换操作-成功响应消息重定义
      map(data => ({
        errorCode: 0,
        message: 'ok',
        data
      }))
    )
  }
}
