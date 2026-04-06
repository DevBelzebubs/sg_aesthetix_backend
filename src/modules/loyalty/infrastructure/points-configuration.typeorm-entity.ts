import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, Unique, UpdateDateColumn } from 'typeorm';
import { TenantTypeOrmEntity } from '../../tenants/infrastructure/tenant.typeorm-entity';

@Entity({ name: 'configuracion_puntos' })
@Unique('uq_configuracion_puntos_empresa', ['tenantId'])
export class PointsConfigurationTypeOrmEntity {
  @PrimaryGeneratedColumn({ type: 'int' })
  id!: number;

  @Column({ name: 'empresa_id', type: 'char', length: 36 })
  tenantId!: string;

  @Column({ name: 'valor_base_monetario', type: 'decimal', precision: 10, scale: 2, default: 1 })
  baseMonetaryValue!: string;

  @Column({ name: 'puntos_por_valor_base', type: 'int', default: 1 })
  pointsPerBaseValue!: number;

  @Column({ name: 'minimo_canje', type: 'int', default: 0 })
  minimumRedemption!: number;

  @Column({ name: 'esta_activo', type: 'tinyint', width: 1, default: () => '1' })
  isActive!: boolean;

  @UpdateDateColumn({ name: 'actualizado_en' })
  updatedAt!: Date;

  @ManyToOne(() => TenantTypeOrmEntity, {
    nullable: false,
  })
  @JoinColumn({ name: 'empresa_id' })
  tenant!: TenantTypeOrmEntity;
}
