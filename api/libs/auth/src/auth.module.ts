import { Module, DynamicModule } from '@nestjs/common';
import { JwtModule, JwtModuleOptions } from '@nestjs/jwt';
import { AuthService } from './auth.service';

type AuthModuleOptions = {
  jwtOptions: JwtModuleOptions
}

@Module({})
export class AuthModule {
  /**
   * 导入配置
   * @param options 需要传入的配置项
   */
  static register(options: AuthModuleOptions): DynamicModule {
    const { jwtOptions } = options
    return {
      module: AuthModule,
      imports: [
        JwtModule.registerAsync({
          useFactory: () => jwtOptions
        })
      ],
      providers: [AuthService],
      exports: [AuthService],
    }
  }
}
