import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServiceCategoryTypeOrmEntity } from './infrastructure/service-category.typeorm-entity';
import { ServiceTypeOrmEntity } from './infrastructure/service.typeorm-entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      ServiceCategoryTypeOrmEntity,
      ServiceTypeOrmEntity,
    ]),
  ],
  exports: [TypeOrmModule],
})
export class ServicesModule {}
