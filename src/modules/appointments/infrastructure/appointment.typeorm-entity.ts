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
import { CustomerTypeOrmEntity } from '../../customers/infrastructure/customer.typeorm-entity';
import { EmployeeTypeOrmEntity } from '../../employees/infrastructure/employee.typeorm-entity';
import { ServiceTypeOrmEntity } from '../../services/infrastructure/service.typeorm-entity';
import { BranchTypeOrmEntity } from '../../tenants/infrastructure/branch.typeorm-entity';
import { TenantTypeOrmEntity } from '../../tenants/infrastructure/tenant.typeorm-entity';
import { AppointmentStatus } from '../domain/appointment.entity';

@Entity({ name: 'appointments' })
@Index('idx_appointments_tenant_scheduled_at', ['tenantId', 'scheduledAt'])
@Index('idx_appointments_tenant_employee_scheduled_at', [
  'tenantId',
  'employeeId',
  'scheduledAt',
])
export class AppointmentTypeOrmEntity {
  @PrimaryColumn('varchar', { length: 36 })
  id!: string;

  @Column({ name: 'tenant_id', type: 'varchar', length: 36 })
  tenantId!: string;

  @Column({ name: 'branch_id', type: 'varchar', length: 36 })
  branchId!: string;

  @Column({ name: 'customer_id', type: 'varchar', length: 36 })
  customerId!: string;

  @Column({ name: 'employee_id', type: 'varchar', length: 36 })
  employeeId!: string;

  @Column({ name: 'service_id', type: 'varchar', length: 36 })
  serviceId!: string;

  @Column({ name: 'scheduled_at', type: 'datetime' })
  scheduledAt!: Date;

  @Column({ name: 'ends_at', type: 'datetime' })
  endsAt!: Date;

  @Column({
    type: 'enum',
    enum: AppointmentStatus,
    default: AppointmentStatus.PENDING,
  })
  status!: AppointmentStatus;

  @Column('text')
  notes!: string;

  @Column({ name: 'price_paid', type: 'decimal', precision: 10, scale: 2 })
  pricePaid!: string;

  @Column({ name: 'cancelled_at', type: 'datetime', nullable: true })
  cancelledAt!: Date | null;

  @Column({ name: 'cancel_reason', type: 'text', nullable: true })
  cancelReason!: string | null;

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

  @ManyToOne(() => CustomerTypeOrmEntity, {
    nullable: false,
  })
  @JoinColumn({ name: 'customer_id' })
  customer!: CustomerTypeOrmEntity;

  @ManyToOne(() => EmployeeTypeOrmEntity, {
    nullable: false,
  })
  @JoinColumn({ name: 'employee_id' })
  employee!: EmployeeTypeOrmEntity;

  @ManyToOne(() => ServiceTypeOrmEntity, {
    nullable: false,
  })
  @JoinColumn({ name: 'service_id' })
  service!: ServiceTypeOrmEntity;
}
