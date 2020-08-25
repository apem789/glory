import { Module, forwardRef } from '@nestjs/common';
import { AdminsController } from './admins.controller';
import { AdminsService } from './admins.service';
import { AuthModule } from '@libs/auth';
import { AdminJwtConfigForAdmin } from '@libs/common/config/admin/jwt.config';
import { JwtStrategyForAdmin } from '@libs/common/strategy/admin/jwt.strategy';
import { LocalStrategyForAdmin } from '@libs/common/strategy/admin/local.strategy';
import { UtilModule } from 'libs/util/src';
import { AdminRepository } from '@libs/common/repositories/admin.repository';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    AuthModule.register({
      jwtOptions: AdminJwtConfigForAdmin,
      injects: [
        JwtStrategyForAdmin,
        LocalStrategyForAdmin
      ],
      repositories: [AdminRepository]
    }),
    forwardRef(() => UtilModule),
    TypeOrmModule.forFeature([AdminRepository]),
  ],
  controllers: [AdminsController],
  providers: [AdminsService]
})
export class AdminsModule {}
