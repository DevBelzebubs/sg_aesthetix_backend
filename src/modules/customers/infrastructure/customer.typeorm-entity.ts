import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';
import { EmployeeTypeOrmEntity } from '../../employees/infrastructure/employee.typeorm-entity';
import { TenantTypeOrmEntity } from '../../tenants/infrastructure/tenant.typeorm-entity';

@Entity({ name: 'customers' })
@Index('idx_customers_tenant_phone', ['tenantId', 'phone'])
@Index('idx_customers_tenant_email', ['tenantId', 'email'])
export class CustomerTypeOrmEntity {
  @PrimaryColumn('varchar', { length: 36 })
  id!: string;

  @Column({ name: 'tenant_id', type: 'varchar', length: 36 })
  tenantId!: string;

  @Column({ name: 'full_name', type: 'varchar', length: 150 })
  fullName!: string;

  @Column('varchar', { length: 20 })
  phone!: string;

  @Column('varchar', { length: 180 })
  email!: string;

  @Column({ name: 'birth_date', type: 'date', nullable: true })
  birthDate!: string | null;

  @Column('text')
  notes!: string;

  @Column({
    name: 'preferred_employee_id',
    type: 'varchar',
    length: 36,
    nullable: true,
  })
  preferredEmployeeId!: string | null;

  @CreateDateColumn({ name: 'created_at' })
  createdAt!: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt!: Date;

  @DeleteDateColumn({ name: 'deleted_at', nullable: true })
  deletedAt!: Date | null;

  @ManyToOne(() => TenantTypeOrmEntity, {
    nullable: false,
  })
  @JoinColumn({ name: 'tenant_id' })
  tenant!: TenantTypeOrmEntity;

  @ManyToOne(() => EmployeeTypeOrmEntity, {
    nullable: true,
  })
  @JoinColumn({ name: 'preferred_employee_id' })
  preferredEmployee!: EmployeeTypeOrmEntity | null;
}
