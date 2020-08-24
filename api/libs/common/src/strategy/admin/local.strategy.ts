import { Injectable } from "@nestjs/common";
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, IStrategyOptions } from 'passport-local';

/** admin-api local登录策略 */
@Injectable()
export class LocalStrategyForAdmin extends PassportStrategy(Strategy) {
  constructor() {
    super({
      usernameField: 'account',
      passwordField: 'secret',
    } as IStrategyOptions)
  }

  /** local检验方法 */
  async validate(account: string, secret: string): Promise<any> {
    // TODO
    // 做数据库用户真实信息的查询检验
    return ''
  }
}