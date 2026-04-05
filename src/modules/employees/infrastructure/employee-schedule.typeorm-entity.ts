import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { TenantTypeOrmEntity } from '../../tenants/infrastructure/tenant.typeorm-entity';
import { EmployeeTypeOrmEntity } from './employee.typeorm-entity';

@Entity({ name: 'employee_schedules' })
export class EmployeeScheduleTypeOrmEntity {
  @PrimaryColumn('varchar', { length: 36 })
  id!: string;

  @Column({ name: 'tenant_id', type: 'varchar', length: 36 })
  tenantId!: string;

  @Column({ name: 'employee_id', type: 'varchar', length: 36 })
  employeeId!: string;

  @Column({ name: 'day_of_week', type: 'tinyint' })
  dayOfWeek!: number;

  @Column({ name: 'start_time', type: 'time' })
  startTime!: string;

  @Column({ name: 'end_time', type: 'time' })
  endTime!: string;

  @Column({ name: 'is_working', type: 'boolean', default: true })
  isWorking!: boolean;

  @ManyToOne(() => TenantTypeOrmEntity, {
    nullable: false,
  })
  @JoinColumn({ name: 'tenant_id' })
  tenant!: TenantTypeOrmEntity;

  @ManyToOne(() => EmployeeTypeOrmEntity, {
    nullable: false,
  })
  @JoinColumn({ name: 'employee_id' })
  employee!: EmployeeTypeOrmEntity;
}
