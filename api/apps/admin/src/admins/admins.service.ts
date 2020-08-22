import { Injectable } from '@nestjs/common';
import { AuthService } from '@libs/auth';

@Injectable()
export class AdminsService {
  constructor(
    private readonly authService: AuthService
  ) {}

  /** 授权登录 */
  async login(): Promise<{token: string}> {
    // TODO
    // 测试
    const token = await this.authService.generalToken({
      id: 321123,
      name: '大哥大',
      mobile: '1234567891',
    })
    console.log('根据配置生成的token: ', token)
    const res = await this.authService.verifyToken(token)
    console.log('查看token明文信息: ', res)
    return {
      token
    }
  }
}
