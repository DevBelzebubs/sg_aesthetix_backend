import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
} from 'typeorm';
import { TenantTypeOrmEntity } from '../../tenants/infrastructure/tenant.typeorm-entity';

@Entity({ name: 'gallery_style_cuts' })
export class GalleryStyleCutTypeOrmEntity {
  @PrimaryColumn('varchar', { length: 36 })
  id!: string;

  @Column({ name: 'tenant_id', type: 'varchar', length: 36 })
  tenantId!: string;

  @Column('varchar', { length: 120 })
  title!: string;

  @Column({ name: 'image_url', type: 'varchar', length: 500 })
  imageUrl!: string;

  @Column({ type: 'json' })
  tags!: string[];

  @Column({ name: 'is_ai_gen', type: 'boolean', default: false })
  isAiGen!: boolean;

  @Column({ name: 'sort_order', type: 'int', default: 0 })
  sortOrder!: number;

  @CreateDateColumn({ name: 'created_at' })
  createdAt!: Date;

  @ManyToOne(() => TenantTypeOrmEntity, {
    nullable: false,
  })
  @JoinColumn({ name: 'tenant_id' })
  tenant!: TenantTypeOrmEntity;
}
