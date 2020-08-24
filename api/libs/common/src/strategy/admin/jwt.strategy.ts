import { Injectable } from "@nestjs/common";
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, StrategyOptions, ExtractJwt } from "passport-jwt";
import { InjectRepository } from "@nestjs/typeorm";
import { AdminRepository } from "@libs/common/repositories/admin.repository";
import { Admin } from "@libs/db/entities/admin.entity";
import { JWTPayloadAdminInterface } from "@libs/common/interface/admin/jwt-payload.interface";
import { NotFound } from "@libs/common/error/exeception";
import { ErrorTypeEnum } from "@libs/common/error/error.enum";

/** admin-api jwt校验策略 */
@Injectable()
export class JwtStrategyForAdmin extends PassportStrategy(Strategy) {
  constructor(
    @InjectRepository(AdminRepository)
    private readonly adminRepository: AdminRepository
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.ADMIN_TOKEN_SECRET,
    } as StrategyOptions)
  }

  /** jwt检验方法 */
  async validate(payload: JWTPayloadAdminInterface): Promise<Admin> {
    // TODO
    // 做数据库用户真实信息的查询检验
    console.log('payload: ', payload)
    const { id } = payload
    const admin = await this.adminRepository.getAdminById(id)
    if (!admin) {
      throw new NotFound('抱歉不存在', ErrorTypeEnum.ERROR_TYPE_404)
    }
    return admin
  }
}
