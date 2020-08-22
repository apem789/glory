import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService
  ) {}

  /** 生成token */
  async generalToken(payload: Record<string, any>): Promise<string> {
    const token = await this.jwtService.signAsync(payload)
    return token
  }

  /**
   * 测试查看token明文信息
   * @param token 
   */
  async verifyToken(token: string): Promise<any> {
    const payload = await this.jwtService.verifyAsync(token)
    return payload
  }
}
