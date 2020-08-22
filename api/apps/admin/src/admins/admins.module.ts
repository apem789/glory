import { Module } from '@nestjs/common';
import { AdminsController } from './admins.controller';
import { AdminsService } from './admins.service';
import { AuthModule } from '@libs/auth';
import { AdminJwtConfigForAdmin } from '@libs/common/config/admin/jwt.config';

@Module({
  imports: [
    AuthModule.register({
      jwtOptions: AdminJwtConfigForAdmin
    }),
  ],
  controllers: [AdminsController],
  providers: [AdminsService]
})
export class AdminsModule {}
