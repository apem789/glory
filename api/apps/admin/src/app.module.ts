import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommonModule } from '@libs/common';
import { CategoriesModule } from './categories/categories.module';
import { AdminsModule } from './admins/admins.module';

@Module({
  imports: [
    CommonModule,
    CategoriesModule,
    AdminsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
