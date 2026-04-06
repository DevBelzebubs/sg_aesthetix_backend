import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
  Unique,
  UpdateDateColumn,
} from 'typeorm';
import { TenantTypeOrmEntity } from '../../tenants/infrastructure/tenant.typeorm-entity';

@Entity({ name: 'redes_sociales' })
@Unique('uq_redes_sociales_empresa_tipo', ['tenantId', 'type'])
export class SocialNetworkTypeOrmEntity {
  @PrimaryColumn('char', { length: 36 })
  id!: string;

  @Column({ name: 'empresa_id', type: 'char', length: 36 })
  tenantId!: string;

  @Column('varchar', { length: 30 })
  type!: string;

  @Column({ name: 'nombre_mostrar', type: 'varchar', length: 100, nullable: true })
  displayName!: string | null;

  @Column('varchar', { length: 500 })
  url!: string;

  @Column('varchar', { length: 100, nullable: true })
  usuario!: string | null;

  @Column({ name: 'orden', type: 'int', default: 0 })
  order!: number;

  @Column({ name: 'esta_activo', type: 'tinyint', width: 1, default: () => '1' })
  isActive!: boolean;

  @CreateDateColumn({ name: 'creado_en' })
  createdAt!: Date;

  @UpdateDateColumn({ name: 'actualizado_en' })
  updatedAt!: Date;

  @ManyToOne(() => TenantTypeOrmEntity, {
    nullable: false,
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'empresa_id' })
  tenant!: TenantTypeOrmEntity;
}
