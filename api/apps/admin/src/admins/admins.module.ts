import { Module } from '@nestjs/common';
import { AdminsController } from './admins.controller';
import { AdminsService } from './admins.service';
import { AuthModule } from '@libs/auth';
import { AdminJwtConfigForAdmin } from '@libs/common/config/admin/jwt.config';
import { JwtStrategyForAdmin } from '@libs/common/strategy/admin/jwt.strategy';
import { LocalStrategyForAdmin } from '@libs/common/strategy/admin/local.strategy';

@Module({
  imports: [
    AuthModule.register({
      jwtOptions: AdminJwtConfigForAdmin,
      injects: [JwtStrategyForAdmin, LocalStrategyForAdmin]
    }),
  ],
  controllers: [AdminsController],
  providers: [AdminsService]
})
export class AdminsModule {}
