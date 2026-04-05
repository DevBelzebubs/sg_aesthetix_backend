import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';
import { CustomerTypeOrmEntity } from '../../customers/infrastructure/customer.typeorm-entity';
import { TenantTypeOrmEntity } from '../../tenants/infrastructure/tenant.typeorm-entity';

@Entity({ name: 'loyalty_accounts' })
export class LoyaltyAccountTypeOrmEntity {
  @PrimaryColumn('varchar', { length: 36 })
  id!: string;

  @Column({ name: 'tenant_id', type: 'varchar', length: 36 })
  tenantId!: string;

  @Column({ name: 'customer_id', type: 'varchar', length: 36, unique: true })
  customerId!: string;

  @Column({ type: 'int', default: 0 })
  balance!: number;

  @Column({ name: 'lifetime_pts', type: 'int', default: 0 })
  lifetimePts!: number;

  @CreateDateColumn({ name: 'created_at' })
  createdAt!: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt!: Date;

  @ManyToOne(() => TenantTypeOrmEntity, {
    nullable: false,
  })
  @JoinColumn({ name: 'tenant_id' })
  tenant!: TenantTypeOrmEntity;

  @ManyToOne(() => CustomerTypeOrmEntity, {
    nullable: false,
  })
  @JoinColumn({ name: 'customer_id' })
  customer!: CustomerTypeOrmEntity;
}
