import { Module, forwardRef } from '@nestjs/common';
import { CommonService } from './common.service';
import { ConfigModule } from '@nestjs/config'
import { DbModule } from '@libs/db';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminRepository } from './repositories/admin.repository';
import { UtilModule } from 'libs/util/src';
import { UtilAuthService } from 'libs/util/src/auth/auth.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env'
    }),
    DbModule,
    forwardRef(() => TypeOrmModule.forFeature([AdminRepository])),
    UtilModule
  ],
  providers: [CommonService, UtilAuthService],
  exports: [CommonService, UtilAuthService],
})
export class CommonModule {}
