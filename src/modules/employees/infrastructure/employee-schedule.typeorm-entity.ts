import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';
import { EmployeeTypeOrmEntity } from './employee.typeorm-entity';

@Entity({ name: 'horarios_empleado' })
export class EmployeeScheduleTypeOrmEntity {
  @PrimaryColumn('char', { length: 36 })
  id!: string;

  @Column({ name: 'empleado_id', type: 'char', length: 36 })
  employeeId!: string;

  @Column({ name: 'dia_semana', type: 'tinyint' })
  dayOfWeek!: number;

  @Column({ name: 'hora_inicio', type: 'time' })
  startTime!: string;

  @Column({ name: 'hora_fin', type: 'time' })
  endTime!: string;

  @Column({ name: 'vigencia_desde', type: 'date', nullable: true })
  validFrom!: string | null;

  @Column({ name: 'vigencia_hasta', type: 'date', nullable: true })
  validUntil!: string | null;

  @Column({ name: 'esta_activo', type: 'tinyint', width: 1, default: () => '1' })
  isActive!: boolean;

  @CreateDateColumn({ name: 'creado_en' })
  createdAt!: Date;

  @UpdateDateColumn({ name: 'actualizado_en' })
  updatedAt!: Date;

  @ManyToOne(() => EmployeeTypeOrmEntity, {
    nullable: false,
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'empleado_id' })
  employee!: EmployeeTypeOrmEntity;
}
