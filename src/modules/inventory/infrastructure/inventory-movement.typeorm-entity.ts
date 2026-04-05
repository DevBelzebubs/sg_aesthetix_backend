import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
} from 'typeorm';
import { UserTypeOrmEntity } from '../../identity/infrastructure/user.typeorm-entity';
import { TenantTypeOrmEntity } from '../../tenants/infrastructure/tenant.typeorm-entity';
import { InventoryMovementType } from '../domain/inventory-movement.entity';
import { ProductTypeOrmEntity } from './product.typeorm-entity';

@Entity({ name: 'inventory_movements' })
@Index('idx_inventory_movements_tenant_product_created_at', [
  'tenantId',
  'productId',
  'createdAt',
])
export class InventoryMovementTypeOrmEntity {
  @PrimaryColumn('varchar', { length: 36 })
  id!: string;

  @Column({ name: 'tenant_id', type: 'varchar', length: 36 })
  tenantId!: string;

  @Column({ name: 'product_id', type: 'varchar', length: 36 })
  productId!: string;

  @Column({
    type: 'enum',
    enum: InventoryMovementType,
  })
  type!: InventoryMovementType;

  @Column({ type: 'decimal', precision: 10, scale: 3 })
  quantity!: string;

  @Column('varchar', { length: 200 })
  reason!: string;

  @Column({ name: 'reference_id', type: 'varchar', length: 36, nullable: true })
  referenceId!: string | null;

  @Column({ name: 'created_by', type: 'varchar', length: 36 })
  createdBy!: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt!: Date;

  @ManyToOne(() => TenantTypeOrmEntity, {
    nullable: false,
  })
  @JoinColumn({ name: 'tenant_id' })
  tenant!: TenantTypeOrmEntity;

  @ManyToOne(() => ProductTypeOrmEntity, {
    nullable: false,
  })
  @JoinColumn({ name: 'product_id' })
  product!: ProductTypeOrmEntity;

  @ManyToOne(() => UserTypeOrmEntity, {
    nullable: false,
  })
  @JoinColumn({ name: 'created_by' })
  createdByUser!: UserTypeOrmEntity;
}
