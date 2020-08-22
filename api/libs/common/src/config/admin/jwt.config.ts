import { JwtModuleOptions } from '@nestjs/jwt';

/** admin jwt-token 配置 */
export const AdminJwtConfigForAdmin: JwtModuleOptions = {
  secret: process.env.ADMIN_TOKEN_SECRET,
  signOptions: { expiresIn: eval(process.env.ADMIN_TOKEN_EXPRESS_IN) }
}
