import { Module } from '@nestjs/common';
import { AuthServiceUtil } from './auth/auth.service';

@Module({
  providers: [AuthServiceUtil],
  exports: [AuthServiceUtil],
})
export class UtilModule {}
