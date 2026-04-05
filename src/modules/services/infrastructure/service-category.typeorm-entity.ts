import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { TenantTypeOrmEntity } from '../../tenants/infrastructure/tenant.typeorm-entity';

@Entity({ name: 'service_categories' })
export class ServiceCategoryTypeOrmEntity {
  @PrimaryColumn('varchar', { length: 36 })
  id!: string;

  @Column({ name: 'tenant_id', type: 'varchar', length: 36 })
  tenantId!: string;

  @Column('varchar', { length: 100 })
  name!: string;

  @Column({ name: 'sort_order', type: 'int', default: 0 })
  sortOrder!: number;

  @ManyToOne(() => TenantTypeOrmEntity, {
    nullable: false,
  })
  @JoinColumn({ name: 'tenant_id' })
  tenant!: TenantTypeOrmEntity;
}
