import { Inject, Injectable } from "@nestjs/common";
import { EntityRepository, Repository } from "typeorm";
import { Admin } from "@libs/db/entities/admin.entity";
import { AdminLoginDto } from "../dto/admin/admin/login.dto";
import { NotFound, Unauthorized } from "../error/exeception";
import { ErrorTypeEnum } from "../error/error.enum";
import { AdminCreateDto } from "../dto/admin/admin/create.dto";

@EntityRepository()
export class AdminRepository extends Repository<Admin> {
  /**
   * 账号登录
   * @param loginDto 
   */
  async login(loginDto: AdminLoginDto): Promise<void> {
    // TODO
    // 注册时密码未加密直接查数据库先
    const { account, secret } = loginDto

    const currentAdmin = await this.findOne({ account, secret })
    if (!currentAdmin) {
      throw new NotFound('用户不存在', ErrorTypeEnum.ERROR_TYPE_400)
    }
  }

  /**
   * 注册管理员账号
   * @param createDto 
   */
  async register(createDto: AdminCreateDto): Promise<void> {
    // TODO
    // 暂时明文存账号密码
    const { account, secret } = createDto

    // 检测账号是否已被注册
    const hasRegistered = await this.findOne({ account })
    if (hasRegistered) {
      throw new Unauthorized('账号已被注册', ErrorTypeEnum.ERROR_TYPE_401)
    }

    // TODO
    // 密码加密
    const newAdmin = new Admin()
    newAdmin.account = account
    newAdmin.secret = secret
    await this.save(newAdmin)
  }

  /** 根据id查询管理员 */
  async getAdminById(id: number): Promise<Admin> {
    const currentAdmin = await this.findOne({ id })
    if(!currentAdmin) {
      throw new NotFound('用户不存在', ErrorTypeEnum.ERROR_TYPE_400)
    }
    return currentAdmin
  }
}
