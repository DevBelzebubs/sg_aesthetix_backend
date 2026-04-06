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

@Entity({ name: 'ausencias' })
export class EmployeeAbsenceTypeOrmEntity {
  @PrimaryColumn('char', { length: 36 })
  id!: string;

  @Column({ name: 'empleado_id', type: 'char', length: 36 })
  employeeId!: string;

  @Column({ name: 'fecha_inicio', type: 'date' })
  startDate!: string;

  @Column({ name: 'fecha_fin', type: 'date' })
  endDate!: string;

  @Column({ name: 'motivo', type: 'varchar', length: 255, nullable: true })
  reason!: string | null;

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
