import { AuthGuard } from "@nestjs/passport";
import { Injectable, ExecutionContext, Inject } from "@nestjs/common";
import { Observable } from 'rxjs';
import { ErrorValueEnum, ErrorTypeEnum } from "@libs/common/error/error.enum";
import { Forbidden, Unauthorized } from "@libs/common/error/exeception";
import { Reflector } from "@nestjs/core";
import { UtilAuthService } from "libs/util/src/auth/auth.service";

/** 自定义 admin-api JWT守卫 */
@Injectable()
export class JwtGaurdForAdmin extends AuthGuard('jwt') {
  constructor(
    private readonly reflectot: Reflector,
    @Inject(UtilAuthService)
    private readonly utilAuthService: UtilAuthService
  ) {
    super()
  }

  /** 校验方法-拓展 */
  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    // TODO 
    // 是否需要做特殊接口的jwt检验过滤
    const hasNotJwtAuthGuardKey = this.utilAuthService.checkRequestNeedJwtAuthGuard(this.reflectot, context)
    console.log('jwt 守卫：', hasNotJwtAuthGuardKey)

    if (hasNotJwtAuthGuardKey) {
      // 当检测到 NotJwtAuthGuard 则不会去执行父类的jwt校验了
      console.log('接口：', context.switchToHttp().getRequest().path, ' 无须令牌也能访问')
      return true
    }
    
    return super.canActivate(context)
  }

  /** 重写异常处理 */
  handleRequest(err: any, user: any, info: any) {
    if (err || !user) {
      if (info.toString().includes('JsonWebTokenError')) {
        // 令牌不合法
        throw new Forbidden(ErrorValueEnum.ERROR_TOKEN_ERROR, ErrorTypeEnum.ERROR_TOKEN_ERROR)
      }
      if (info.toString().includes('TokenExpiredError')) {
        // 令牌过期
        throw new Forbidden(ErrorValueEnum.ERROR_TOKEN_EXPRESSIN, ErrorTypeEnum.ERROR_TOKEN_EXPRESSIN)
      }
      // 未知的passport-jwt错误 或 无令牌,先登录
      throw err || new Unauthorized(ErrorValueEnum.ERROR_NO_LOGIN_AUTH, ErrorTypeEnum.ERROR_NO_LOGIN_AUTH)
    }
    return user
  }
}
