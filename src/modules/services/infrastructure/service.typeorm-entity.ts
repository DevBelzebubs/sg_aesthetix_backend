import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';
import { TenantTypeOrmEntity } from '../../tenants/infrastructure/tenant.typeorm-entity';
import { ServiceCategoryTypeOrmEntity } from './service-category.typeorm-entity';

@Entity({ name: 'servicios' })
export class ServiceTypeOrmEntity {
  @PrimaryColumn('char', { length: 36 })
  id!: string;

  @Column({ name: 'empresa_id', type: 'char', length: 36 })
  tenantId!: string;

  @Column({ name: 'categoria_servicio_id', type: 'int' })
  categoryId!: number;

  @Column('varchar', { length: 150 })
  name!: string;

  @Column({ name: 'descripcion', type: 'text', nullable: true })
  description!: string | null;

  @Column({ name: 'precio', type: 'decimal', precision: 10, scale: 2 })
  price!: string;

  @Column({ name: 'duracion_minutos', type: 'int' })
  durationMin!: number;

  @Column({ name: 'acumula_puntos', type: 'tinyint', width: 1, default: () => '1' })
  accumulatesPoints!: boolean;

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

  @ManyToOne(() => ServiceCategoryTypeOrmEntity, {
    nullable: false,
  })
  @JoinColumn({ name: 'categoria_servicio_id' })
  category!: ServiceCategoryTypeOrmEntity;
}
