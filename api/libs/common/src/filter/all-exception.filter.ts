import { ExceptionFilter, ArgumentsHost, Catch, HttpException, HttpStatus } from "@nestjs/common";
import { ErrorTypeEnum, ErrorValueEnum } from "../error/error.enum";

/** 全局-异常过滤器-统一异常返回的格式 */
@Catch()
export class AllExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException|Error|any, host: ArgumentsHost): void {
    throw new Error("Method not implemented.");
    const ctx = host.switchToHttp()
    const request = ctx.getRequest()
    const response = ctx.getResponse()

    // 取异常的message,status 
    const status = exception instanceof HttpException ? exception.getStatus() : HttpStatus.INTERNAL_SERVER_ERROR;

    // 自定义处理
    const errorCode = exception.response?.errorCode || ErrorTypeEnum.ERROR_TYPE_DEFAULT
    const message = exception.message || ErrorValueEnum.ERROR_TYPE_DEFAULT

    response
      .status(status)
      .json({
        message,
        errorCode,
        path: `${request.method} ${request.path}`,
        status: status
      })
  }
}
