import { SetMetadata } from "@nestjs/common";

/** 无须jwt鉴权的 控制器/路由 装饰器 */
export const NotJwtAuthGaurd = () => SetMetadata('NotJwtAuthGuard', 'NotJwtAuthGuard')
