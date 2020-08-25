import { Module, DynamicModule } from '@nestjs/common';
import { JwtModule, JwtModuleOptions } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { TypeOrmModule } from '@nestjs/typeorm';

type AuthModuleOptions = {
  /** jwt配置 */
  jwtOptions: JwtModuleOptions,
  /** 需要用到的service或策略 */
  injects?: Array<any>,
  /** 需要用到的模型repository */
  repositories?: Array<any>
}

@Module({})
export class AuthModule {
  /**
   * 导入配置
   * @param options 需要传入的配置项: jwt配置、service或策略、模型repository
   */
  static register(options: AuthModuleOptions): DynamicModule {
    const { jwtOptions, injects, repositories } = options
    const injectArr = injects || []
    const importRepositoryArr = repositories || []

    return {
      module: AuthModule,
      imports: [
        JwtModule.registerAsync({
          useFactory: () => jwtOptions,
        }),
        importRepositoryArr.length && TypeOrmModule.forFeature([...importRepositoryArr]), 
      ],
      providers: [AuthService, ...injectArr],
      exports: [AuthService],
    }
  }
}
