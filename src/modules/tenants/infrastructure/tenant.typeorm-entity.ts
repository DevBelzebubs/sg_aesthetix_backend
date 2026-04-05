import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';
import { BranchTypeOrmEntity } from './branch.typeorm-entity';
import { TenantPlan, TenantStatus } from '../domain/tenant.entity';

@Entity({ name: 'tenants' })
export class TenantTypeOrmEntity {
  @PrimaryColumn('varchar', { length: 36 })
  id!: string;

  @Column('varchar', { length: 120 })
  name!: string;

  @Column('varchar', { length: 60, unique: true })
  slug!: string;

  @Column({
    type: 'enum',
    enum: TenantPlan,
    default: TenantPlan.BASIC,
  })
  plan!: TenantPlan;

  @Column({
    type: 'enum',
    enum: TenantStatus,
    default: TenantStatus.ACTIVE,
  })
  status!: TenantStatus;

  @CreateDateColumn({ name: 'created_at' })
  createdAt!: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt!: Date;

  @OneToMany(() => BranchTypeOrmEntity, (branch) => branch.tenant)
  branches!: BranchTypeOrmEntity[];
}
