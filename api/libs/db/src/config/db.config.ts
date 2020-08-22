import { TypeOrmOptionsFactory, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Admin } from '../entities/admin.entity';
import { Category } from '../entities/category.eneity';

/** 默认db配置, 需手动写入需要的表 */
export class DBDefualtConfigService implements TypeOrmOptionsFactory {
  createTypeOrmOptions(connectionName?: string): TypeOrmModuleOptions {
    return {
      type: 'mysql',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      database: process.env.DB_DATABASE,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      synchronize: true,
      entities: [
        Admin,
        Category
      ]
    }
  }
}