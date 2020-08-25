import { Module } from '@nestjs/common';
import { UtilAuthService } from './auth/auth.service';

@Module({
  providers: [UtilAuthService],
  exports: [UtilAuthService],
})
export class UtilModule {}
