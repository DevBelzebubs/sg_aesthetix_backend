import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';
import { TenantTypeOrmEntity } from '../../tenants/infrastructure/tenant.typeorm-entity';
import { ProductCategoryTypeOrmEntity } from './product-category.typeorm-entity';

@Entity({ name: 'products' })
@Index('idx_products_tenant_category', ['tenantId', 'categoryId'])
export class ProductTypeOrmEntity {
  @PrimaryColumn('varchar', { length: 36 })
  id!: string;

  @Column({ name: 'tenant_id', type: 'varchar', length: 36 })
  tenantId!: string;

  @Column({ name: 'category_id', type: 'varchar', length: 36 })
  categoryId!: string;

  @Column('varchar', { length: 150 })
  name!: string;

  @Column('varchar', { length: 30 })
  unit!: string;

  @Column({ type: 'decimal', precision: 10, scale: 3, default: 0 })
  stock!: string;

  @Column({
    name: 'min_stock',
    type: 'decimal',
    precision: 10,
    scale: 3,
    default: 0,
  })
  minStock!: string;

  @Column({ name: 'cost_price', type: 'decimal', precision: 10, scale: 2 })
  costPrice!: string;

  @Column({
    name: 'sale_price',
    type: 'decimal',
    precision: 10,
    scale: 2,
    nullable: true,
  })
  salePrice!: string | null;

  @Column({ name: 'is_active', type: 'boolean', default: true })
  isActive!: boolean;

  @CreateDateColumn({ name: 'created_at' })
  createdAt!: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt!: Date;

  @ManyToOne(() => TenantTypeOrmEntity, {
    nullable: false,
  })
  @JoinColumn({ name: 'tenant_id' })
  tenant!: TenantTypeOrmEntity;

  @ManyToOne(() => ProductCategoryTypeOrmEntity, {
    nullable: false,
  })
  @JoinColumn({ name: 'category_id' })
  category!: ProductCategoryTypeOrmEntity;
}
