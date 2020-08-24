import { Module, DynamicModule } from '@nestjs/common';
import { JwtModule, JwtModuleOptions } from '@nestjs/jwt';
import { AuthService } from './auth.service';

type AuthModuleOptions = {
  jwtOptions: JwtModuleOptions,
  injects?: Array<any>
}

@Module({})
export class AuthModule {
  /**
   * 导入配置
   * @param options 需要传入的配置项
   */
  static register(options: AuthModuleOptions): DynamicModule {
    const { jwtOptions, injects } = options
    const injectArr = injects || []
    return {
      module: AuthModule,
      imports: [
        JwtModule.registerAsync({
          useFactory: () => jwtOptions
        }),
      ],
      providers: [AuthService, ...injectArr],
      exports: [AuthService],
    }
  }
}
