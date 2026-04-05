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
import { ServiceType } from '../domain/service.entity';
import { ServiceCategoryTypeOrmEntity } from './service-category.typeorm-entity';

@Entity({ name: 'services' })
export class ServiceTypeOrmEntity {
  @PrimaryColumn('varchar', { length: 36 })
  id!: string;

  @Column({ name: 'tenant_id', type: 'varchar', length: 36 })
  tenantId!: string;

  @Column({ name: 'category_id', type: 'varchar', length: 36 })
  categoryId!: string;

  @Column('varchar', { length: 120 })
  name!: string;

  @Column('text')
  description!: string;

  @Column({
    type: 'enum',
    enum: ServiceType,
  })
  type!: ServiceType;

  @Column({ name: 'duration_min', type: 'int' })
  durationMin!: number;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  price!: string;

  @Column({ name: 'image_url', type: 'varchar', length: 500 })
  imageUrl!: string;

  @Column({ name: 'is_active', type: 'boolean', default: true })
  isActive!: boolean;

  @Column({ name: 'sort_order', type: 'int', default: 0 })
  sortOrder!: number;

  @CreateDateColumn({ name: 'created_at' })
  createdAt!: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt!: Date;

  @ManyToOne(() => TenantTypeOrmEntity, {
    nullable: false,
  })
  @JoinColumn({ name: 'tenant_id' })
  tenant!: TenantTypeOrmEntity;

  @ManyToOne(() => ServiceCategoryTypeOrmEntity, {
    nullable: false,
  })
  @JoinColumn({ name: 'category_id' })
  category!: ServiceCategoryTypeOrmEntity;
}
