import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ProductTypeOrmEntity } from '../../inventory/infrastructure/product.typeorm-entity';
import { ServiceTypeOrmEntity } from '../../services/infrastructure/service.typeorm-entity';
import { TenantTypeOrmEntity } from '../../tenants/infrastructure/tenant.typeorm-entity';

@Entity({ name: 'recompensas_puntos' })
export class PointsRewardTypeOrmEntity {
  @PrimaryColumn('char', { length: 36 })
  id!: string;

  @Column({ name: 'empresa_id', type: 'char', length: 36 })
  tenantId!: string;

  @Column({ name: 'tipo_recompensa', type: 'varchar', length: 20 })
  rewardType!: string;

  @Column({ name: 'servicio_id', type: 'char', length: 36, nullable: true })
  serviceId!: string | null;

  @Column({ name: 'producto_id', type: 'char', length: 36, nullable: true })
  productId!: string | null;

  @Column({ name: 'nombre', type: 'varchar', length: 150 })
  name!: string;

  @Column({ name: 'descripcion', type: 'varchar', length: 255, nullable: true })
  description!: string | null;

  @Column({ name: 'puntos_requeridos', type: 'int' })
  requiredPoints!: number;

  @Column({ name: 'cantidad_entregada', type: 'int', default: 1 })
  deliveredQuantity!: number;

  @Column({ name: 'esta_activo', type: 'tinyint', width: 1, default: () => '1' })
  isActive!: boolean;

  @CreateDateColumn({ name: 'creado_en' })
  createdAt!: Date;

  @UpdateDateColumn({ name: 'actualizado_en' })
  updatedAt!: Date;

  @ManyToOne(() => TenantTypeOrmEntity, { nullable: false })
  @JoinColumn({ name: 'empresa_id' })
  tenant!: TenantTypeOrmEntity;

  @ManyToOne(() => ServiceTypeOrmEntity, { nullable: true })
  @JoinColumn({ name: 'servicio_id' })
  service!: ServiceTypeOrmEntity | null;

  @ManyToOne(() => ProductTypeOrmEntity, { nullable: true })
  @JoinColumn({ name: 'producto_id' })
  product!: ProductTypeOrmEntity | null;
}
