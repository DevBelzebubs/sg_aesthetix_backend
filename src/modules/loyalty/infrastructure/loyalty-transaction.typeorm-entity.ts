import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
} from 'typeorm';
import { TenantTypeOrmEntity } from '../../tenants/infrastructure/tenant.typeorm-entity';
import { LoyaltyTransactionType } from '../domain/loyalty-transaction.entity';
import { LoyaltyAccountTypeOrmEntity } from './loyalty-account.typeorm-entity';

@Entity({ name: 'loyalty_transactions' })
@Index('idx_loyalty_transactions_tenant_account_created_at', [
  'tenantId',
  'accountId',
  'createdAt',
])
export class LoyaltyTransactionTypeOrmEntity {
  @PrimaryColumn('varchar', { length: 36 })
  id!: string;

  @Column({ name: 'tenant_id', type: 'varchar', length: 36 })
  tenantId!: string;

  @Column({ name: 'account_id', type: 'varchar', length: 36 })
  accountId!: string;

  @Column({
    type: 'enum',
    enum: LoyaltyTransactionType,
  })
  type!: LoyaltyTransactionType;

  @Column({ type: 'int' })
  amount!: number;

  @Column({ name: 'reference_id', type: 'varchar', length: 36, nullable: true })
  referenceId!: string | null;

  @Column('text')
  notes!: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt!: Date;

  @ManyToOne(() => TenantTypeOrmEntity, {
    nullable: false,
  })
  @JoinColumn({ name: 'tenant_id' })
  tenant!: TenantTypeOrmEntity;

  @ManyToOne(() => LoyaltyAccountTypeOrmEntity, {
    nullable: false,
  })
  @JoinColumn({ name: 'account_id' })
  account!: LoyaltyAccountTypeOrmEntity;
}
