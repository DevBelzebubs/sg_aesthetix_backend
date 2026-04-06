import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';
import { EmployeeTypeOrmEntity } from '../../employees/infrastructure/employee.typeorm-entity';
import { ServiceTypeOrmEntity } from '../../services/infrastructure/service.typeorm-entity';
import { TenantTypeOrmEntity } from '../../tenants/infrastructure/tenant.typeorm-entity';

@Entity({ name: 'galeria_cortes' })
export class GalleryStyleCutTypeOrmEntity {
  @PrimaryColumn('char', { length: 36 })
  id!: string;

  @Column({ name: 'empresa_id', type: 'char', length: 36 })
  tenantId!: string;

  @Column({ name: 'servicio_id', type: 'char', length: 36, nullable: true })
  serviceId!: string | null;

  @Column({ name: 'empleado_id', type: 'char', length: 36, nullable: true })
  employeeId!: string | null;

  @Column({ name: 'titulo', type: 'varchar', length: 150, nullable: true })
  title!: string | null;

  @Column({ name: 'imagen_url', type: 'varchar', length: 500 })
  imageUrl!: string;

  @Column({ name: 'descripcion', type: 'text', nullable: true })
  description!: string | null;

  @Column({ name: 'orden', type: 'int', default: 0 })
  sortOrder!: number;

  @Column({ name: 'esta_activo', type: 'tinyint', width: 1, default: () => '1' })
  isActive!: boolean;

  @CreateDateColumn({ name: 'creado_en' })
  createdAt!: Date;

  @UpdateDateColumn({ name: 'actualizado_en' })
  updatedAt!: Date;

  @ManyToOne(() => TenantTypeOrmEntity, {
    nullable: false,
  })
  @JoinColumn({ name: 'empresa_id' })
  tenant!: TenantTypeOrmEntity;

  @ManyToOne(() => ServiceTypeOrmEntity, {
    nullable: true,
  })
  @JoinColumn({ name: 'servicio_id' })
  service!: ServiceTypeOrmEntity | null;

  @ManyToOne(() => EmployeeTypeOrmEntity, {
    nullable: true,
  })
  @JoinColumn({ name: 'empleado_id' })
  employee!: EmployeeTypeOrmEntity | null;
}
