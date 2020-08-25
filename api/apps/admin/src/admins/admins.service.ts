import { Injectable } from '@nestjs/common';
import { AuthService } from '@libs/auth';
import { AdminLoginDto } from '@libs/common/dto/admin/admin/login.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { AdminRepository } from '@libs/common/repositories/admin.repository';
import { JWTPayloadAdminInterface } from '@libs/common/interface/admin/jwt-payload.interface';
import { AdminCreateDto } from '@libs/common/dto/admin/admin/create.dto';

@Injectable()
export class AdminsService {
  constructor(
    private readonly authService: AuthService,
    @InjectRepository(AdminRepository)
    private readonly adminRepository: AdminRepository
  ) {}

  /**
   * 授权登录
   * 登录-生成token
   * @param loginDto 
   */
  async login(loginDto: AdminLoginDto): Promise<{token: string}> {
    const currentAdmin = await this.adminRepository.login(loginDto)
    const payload: JWTPayloadAdminInterface = {
      id: currentAdmin.id
    }
    const token = await this.authService.generalToken(payload)
    return {
      token: 'ok'
    }
  }

  /**
   * 注册新管理员
   * @param createDto 
   */
  async register(createDto: AdminCreateDto): Promise<{message: string}> {
    await this.adminRepository.register(createDto)
    return {
      message: '注册成功'
    }
  }
}
