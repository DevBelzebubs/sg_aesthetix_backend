import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InventoryMovementTypeOrmEntity } from './infrastructure/inventory-movement.typeorm-entity';
import { ProductCategoryTypeOrmEntity } from './infrastructure/product-category.typeorm-entity';
import { ProductTypeOrmEntity } from './infrastructure/product.typeorm-entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      ProductCategoryTypeOrmEntity,
      ProductTypeOrmEntity,
      InventoryMovementTypeOrmEntity,
    ]),
  ],
  exports: [TypeOrmModule],
})
export class InventoryModule {}
