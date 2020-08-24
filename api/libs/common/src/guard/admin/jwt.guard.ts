import { AuthGuard } from "@nestjs/passport";
import { Injectable, ExecutionContext } from "@nestjs/common";
import { Observable } from 'rxjs';
import { ErrorValueEnum, ErrorTypeEnum } from "@libs/common/error/error.enum";
import { Forbidden, Unauthorized } from "@libs/common/error/exeception";

/** 自定义 admin-api JWT守卫 */
@Injectable()
export class JwtGaurdForAdmin extends AuthGuard('jwt') {
  constructor() {
    super()
  }

  /** 校验方法-拓展 */
  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    // TODO 
    // 是否需要做特殊接口的jwt检验过滤
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
