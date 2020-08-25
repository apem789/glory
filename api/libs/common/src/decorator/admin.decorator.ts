import { createParamDecorator, ExecutionContext } from '@nestjs/common';

/** 从请求中取出jwt解析出的admin用户对象 参数装饰器 */
export const Admin = createParamDecorator((data: unknown, ctx: ExecutionContext) => {
  const request = ctx.switchToHttp().getRequest()
  return request.admin
})
