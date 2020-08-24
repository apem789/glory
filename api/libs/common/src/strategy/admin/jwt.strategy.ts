import { Injectable } from "@nestjs/common";
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, StrategyOptions, ExtractJwt } from "passport-jwt";
import { AdminJwtConfigForAdmin } from "@libs/common/config/admin/jwt.config";

/** admin-api jwt校验策略 */
@Injectable()
export class JwtStrategyForAdmin extends PassportStrategy(Strategy) {
  constructor() {
    const { secret } = AdminJwtConfigForAdmin
    console.log('JwtStategyForAdmin - secret: ', secret)
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: secret
    } as StrategyOptions)
    console.log('JwtStategyForAdmin - secret: ', secret)
  }

  /** jwt检验方法 */
  async validate(payload: any) {
    // TODO
    // 做数据库用户真实信息的查询检验
    console.log('payload: ', payload)
    return 'ok'
  }
}
