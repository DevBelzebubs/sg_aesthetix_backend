import { CustomerTypeOrmEntity } from 'src/modules/customers/infrastructure/customer.typeorm-entity';
import { EmployeeTypeOrmEntity } from 'src/modules/employees/infrastructure/employee.typeorm-entity';
import { ServiceTypeOrmEntity } from 'src/modules/services/infrastructure/service.typeorm-entity';
import { TenantTypeOrmEntity } from 'src/modules/tenants/infrastructure/tenant.typeorm-entity';
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
import {
  AppointmentStatus,
  AppointmentChannel,
} from '../../domain/appointment.entity';

@Entity({ name: 'reservas' })
@Index('idx_reservas_fecha', ['reservationDate'])
@Index('idx_reservas_empleado_fecha', ['employeeId', 'reservationDate'])
export class AppointmentTypeOrmEntity {
  @PrimaryColumn('char', { length: 36 })
  id!: string;

  @Column({ name: 'empresa_id', type: 'char', length: 36 })
  tenantId!: string;

  @Column({ name: 'cliente_id', type: 'char', length: 36 })
  customerId!: string;

  @Column({ name: 'empleado_id', type: 'char', length: 36 })
  employeeId!: string;

  @Column({ name: 'servicio_id', type: 'char', length: 36 })
  serviceId!: string;

  @Column({ name: 'fecha_reserva', type: 'date' })
  reservationDate!: string;

  @Column({ name: 'hora_inicio', type: 'time' })
  startTime!: string;

  @Column({ name: 'hora_fin', type: 'time' })
  endTime!: string;

  @Column({
    name: 'estado',
    type: 'varchar',
    length: 30,
    default: AppointmentStatus.PENDING,
  })
  status!: AppointmentStatus;

  @Column({
    name: 'canal_reserva',
    type: 'varchar',
    length: 30,
  })
  channel!: AppointmentChannel;

  @Column({ name: 'notas', type: 'text', nullable: true })
  notes!: string | null;

  @CreateDateColumn({ name: 'creado_en' })
  createdAt!: Date;

  @UpdateDateColumn({ name: 'actualizado_en' })
  updatedAt!: Date;

  @ManyToOne(() => TenantTypeOrmEntity, {
    nullable: false,
  })
  @JoinColumn({ name: 'empresa_id' })
  tenant!: TenantTypeOrmEntity;

  @ManyToOne(() => CustomerTypeOrmEntity, {
    nullable: false,
  })
  @JoinColumn({ name: 'cliente_id' })
  customer!: CustomerTypeOrmEntity;

  @ManyToOne(() => EmployeeTypeOrmEntity, {
    nullable: false,
  })
  @JoinColumn({ name: 'empleado_id' })
  employee!: EmployeeTypeOrmEntity;

  @ManyToOne(() => ServiceTypeOrmEntity, {
    nullable: false,
  })
  @JoinColumn({ name: 'servicio_id' })
  service!: ServiceTypeOrmEntity;
}
