import { Injectable, ExecutionContext } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { isString, isArray } from "util";

@Injectable()
export class UtilAuthService {
  /**
   * 检测当前请求接口是否不受身份限制
   * @param reflector 元字符
   * @param ctx 请求信息
   * @return boolean true: 不受身份限制, false：需要令牌才能访问
   */
  checkRequestNeedJwtAuthGuard(reflector: Reflector, ctx: ExecutionContext): boolean {
    const notJwtAuthGuardKey = 'NotJwtAuthGuard'
    const notJwtAuthGurads = reflector.getAllAndMerge<string[]>(notJwtAuthGuardKey, [
      ctx.getHandler(),
      ctx.getClass()
    ])

    let hasJwtAuthGuardKey = false
    if (isString(notJwtAuthGurads)) {
      hasJwtAuthGuardKey = notJwtAuthGurads === notJwtAuthGuardKey
    }
    if (isArray(notJwtAuthGurads)) {
      hasJwtAuthGuardKey = notJwtAuthGurads.some(item => item === notJwtAuthGuardKey)
    }

    return hasJwtAuthGuardKey
  }

  /**
   * 检测当前请求是否在权限列表地址中?
   * @param currentPath 当前请求地址
   * @param permissions 当前用户的权限列表
   * @return boolean true: 通过权限检验，false: 无法权限检验
   */
  checkCurentPathAtPermissions(currentPath: string, permissions: []): boolean {
    // TODO
    // 标志位-默认：无法通过
    const canAdopt = false
    return canAdopt
  }
}