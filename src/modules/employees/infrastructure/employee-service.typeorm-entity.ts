import { Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { ServiceTypeOrmEntity } from '../../services/infrastructure/service.typeorm-entity';
import { EmployeeTypeOrmEntity } from './employee.typeorm-entity';

@Entity({ name: 'employee_services' })
export class EmployeeServiceTypeOrmEntity {
  @PrimaryColumn({ name: 'employee_id', type: 'varchar', length: 36 })
  employeeId!: string;

  @PrimaryColumn({ name: 'service_id', type: 'varchar', length: 36 })
  serviceId!: string;

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
