import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';
import { TenantTypeOrmEntity } from '../../tenants/infrastructure/tenant.typeorm-entity';
import { ProductCategoryTypeOrmEntity } from './product-category.typeorm-entity';

@Entity({ name: 'productos' })
export class ProductTypeOrmEntity {
  @PrimaryColumn('char', { length: 36 })
  id!: string;

  @Column({ name: 'empresa_id', type: 'char', length: 36 })
  tenantId!: string;

  @Column({ name: 'categoria_producto_id', type: 'int' })
  categoryId!: number;

  @Column('varchar', { length: 150 })
  name!: string;

  @Column({ name: 'descripcion', type: 'text', nullable: true })
  description!: string | null;

  @Column({ name: 'sku', type: 'varchar', length: 60, nullable: true, unique: true })
  sku!: string | null;

  @Column({ name: 'precio_costo', type: 'decimal', precision: 10, scale: 2, nullable: true })
  costPrice!: string | null;

  @Column({
    name: 'precio_venta',
    type: 'decimal',
    precision: 10,
    scale: 2,
  })
  salePrice!: string;

  @Column({ name: 'stock_actual', type: 'int', default: 0 })
  stock!: number;

  @Column({ name: 'stock_minimo', type: 'int', default: 0 })
  minStock!: number;

  @Column({ name: 'acumula_puntos', type: 'tinyint', width: 1, default: () => '1' })
  accumulatesPoints!: boolean;

  @Column({ name: 'esta_activo', type: 'tinyint', width: 1, default: () => '1' })
  isActive!: boolean;

  @CreateDateColumn({ name: 'creado_en' })
  createdAt!: Date;

  @UpdateDateColumn({ name: 'actualizado_en' })
  updatedAt!: Date;

  @ManyToOne(() => TenantTypeOrmEntity, {
    nullable: false,
  })
  @JoinColumn({ name: 'empresa_id' })
  tenant!: TenantTypeOrmEntity;

  @ManyToOne(() => ProductCategoryTypeOrmEntity, {
    nullable: false,
  })
  @JoinColumn({ name: 'categoria_producto_id' })
  category!: ProductCategoryTypeOrmEntity;
}
