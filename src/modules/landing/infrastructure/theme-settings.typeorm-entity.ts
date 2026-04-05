import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';
import { TenantTypeOrmEntity } from '../../tenants/infrastructure/tenant.typeorm-entity';

@Entity({ name: 'theme_settings' })
export class ThemeSettingsTypeOrmEntity {
  @PrimaryColumn('varchar', { length: 36 })
  id!: string;

  @Column({ name: 'tenant_id', type: 'varchar', length: 36, unique: true })
  tenantId!: string;

  @Column({ name: 'primary_color', type: 'varchar', length: 10 })
  primaryColor!: string;

  @Column({ name: 'logo_url', type: 'varchar', length: 500 })
  logoUrl!: string;

  @Column('varchar', { length: 80 })
  font!: string;

  @Column({ name: 'instagram_url', type: 'varchar', length: 300 })
  instagramUrl!: string;

  @Column({ name: 'facebook_url', type: 'varchar', length: 300 })
  facebookUrl!: string;

  @Column('varchar', { length: 20 })
  whatsapp!: string;

  @Column('text')
  address!: string;

  @Column({ name: 'welcome_msg', type: 'text' })
  welcomeMsg!: string;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt!: Date;

  @ManyToOne(() => TenantTypeOrmEntity, {
    nullable: false,
  })
  @JoinColumn({ name: 'tenant_id' })
  tenant!: TenantTypeOrmEntity;
}
