import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';
import { UserTypeOrmEntity } from '../../identity/infrastructure/user.typeorm-entity';
import { BranchTypeOrmEntity } from '../../tenants/infrastructure/branch.typeorm-entity';
import { TenantTypeOrmEntity } from '../../tenants/infrastructure/tenant.typeorm-entity';

@Entity({ name: 'employees' })
export class EmployeeTypeOrmEntity {
  @PrimaryColumn('varchar', { length: 36 })
  id!: string;

  @Column({ name: 'tenant_id', type: 'varchar', length: 36 })
  tenantId!: string;

  @Column({ name: 'branch_id', type: 'varchar', length: 36 })
  branchId!: string;

  @Column({ name: 'user_id', type: 'varchar', length: 36, nullable: true })
  userId!: string | null;

  @Column({ name: 'full_name', type: 'varchar', length: 150 })
  fullName!: string;

  @Column('varchar', { length: 20 })
  phone!: string;

  @Column({ name: 'photo_url', type: 'varchar', length: 500 })
  photoUrl!: string;

  @Column('text')
  bio!: string;

  @Column({ name: 'commission_pct', type: 'decimal', precision: 5, scale: 2 })
  commissionPct!: string;

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

  @ManyToOne(() => BranchTypeOrmEntity, {
    nullable: false,
  })
  @JoinColumn({ name: 'branch_id' })
  branch!: BranchTypeOrmEntity;

  @ManyToOne(() => UserTypeOrmEntity, {
    nullable: true,
  })
  @JoinColumn({ name: 'user_id' })
  user!: UserTypeOrmEntity | null;
}
