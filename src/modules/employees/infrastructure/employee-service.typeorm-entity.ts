import {
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
} from 'typeorm';
import { ServiceTypeOrmEntity } from '../../services/infrastructure/service.typeorm-entity';
import { EmployeeTypeOrmEntity } from './employee.typeorm-entity';

@Entity({ name: 'empleado_servicio' })
export class EmployeeServiceTypeOrmEntity {
  @PrimaryColumn({ name: 'empleado_id', type: 'char', length: 36 })
  employeeId!: string;

  @PrimaryColumn({ name: 'servicio_id', type: 'char', length: 36 })
  serviceId!: string;

  @CreateDateColumn({ name: 'creado_en' })
  createdAt!: Date;

  @ManyToOne(() => EmployeeTypeOrmEntity, {
    nullable: false,
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'empleado_id' })
  employee!: EmployeeTypeOrmEntity;

  @ManyToOne(() => ServiceTypeOrmEntity, {
    nullable: false,
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'servicio_id' })
  service!: ServiceTypeOrmEntity;
}
