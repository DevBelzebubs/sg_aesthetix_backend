import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
} from 'typeorm';
import { EmployeeTypeOrmEntity } from '../../employees/infrastructure/employee.typeorm-entity';
import { CustomerTypeOrmEntity } from './customer.typeorm-entity';

@Entity({ name: 'notas_cliente' })
export class CustomerNoteTypeOrmEntity {
  @PrimaryColumn('char', { length: 36 })
  id!: string;

  @Column({ name: 'cliente_id', type: 'char', length: 36 })
  customerId!: string;

  @Column({ name: 'empleado_id', type: 'char', length: 36 })
  employeeId!: string;

  @Column({ name: 'contenido', type: 'text' })
  content!: string;

  @CreateDateColumn({ name: 'creado_en' })
  createdAt!: Date;

  @ManyToOne(() => CustomerTypeOrmEntity, {
    nullable: false,
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'cliente_id' })
  customer!: CustomerTypeOrmEntity;

  @ManyToOne(() => EmployeeTypeOrmEntity, {
    nullable: false,
  })
  @JoinColumn({ name: 'empleado_id' })
  employee!: EmployeeTypeOrmEntity;
}
