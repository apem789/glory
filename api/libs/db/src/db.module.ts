import { Module } from '@nestjs/common';
import { DbService } from './db.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DBDefualtConfigService } from './config/db.config';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useClass: DBDefualtConfigService
    })
  ],
  providers: [DbService],
  exports: [DbService],
})
export class DbModule {}
