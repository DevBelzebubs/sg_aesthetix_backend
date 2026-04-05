import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GalleryStyleCutTypeOrmEntity } from './infrastructure/gallery-style-cut.typeorm-entity';

@Module({
  imports: [TypeOrmModule.forFeature([GalleryStyleCutTypeOrmEntity])],
  exports: [TypeOrmModule],
})
export class GalleryModule {}
