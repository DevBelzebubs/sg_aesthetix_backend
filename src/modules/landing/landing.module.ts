import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ThemeSettingsTypeOrmEntity } from './infrastructure/theme-settings.typeorm-entity';

@Module({
  imports: [TypeOrmModule.forFeature([ThemeSettingsTypeOrmEntity])],
  exports: [TypeOrmModule],
})
export class LandingModule {}
