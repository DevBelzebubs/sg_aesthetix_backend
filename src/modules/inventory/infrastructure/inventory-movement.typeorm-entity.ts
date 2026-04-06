import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';
import { EmployeeTypeOrmEntity } from '../../employees/infrastructure/employee.typeorm-entity';
import { TenantTypeOrmEntity } from '../../tenants/infrastructure/tenant.typeorm-entity';
import { InventoryMovementType } from '../domain/inventory-movement.entity';
import { ProductTypeOrmEntity } from './product.typeorm-entity';

@Entity({ name: 'movimientos_inventario' })
@Index('idx_movimientos_inventario_producto', ['productId'])
export class InventoryMovementTypeOrmEntity {
  @PrimaryColumn('char', { length: 36 })
  id!: string;

  @Column({ name: 'empresa_id', type: 'char', length: 36 })
  tenantId!: string;

  @Column({ name: 'producto_id', type: 'char', length: 36 })
  productId!: string;

  @Column({ name: 'empleado_id', type: 'char', length: 36, nullable: true })
  employeeId!: string | null;

  @Column({ type: 'varchar', length: 20 })
  type!: InventoryMovementType;

  @Column({ name: 'cantidad', type: 'int' })
  quantity!: number;

  @Column({ name: 'motivo', type: 'varchar', length: 255, nullable: true })
  reason!: string | null;

  @Column({ name: 'stock_anterior', type: 'int' })
  previousStock!: number;

  @Column({ name: 'stock_nuevo', type: 'int' })
  newStock!: number;

  @Column({
    name: 'referencia_tipo',
    type: 'varchar',
    length: 20,
    nullable: true,
  })
  referenceType!: string | null;

  @Column({ name: 'referencia_id', type: 'char', length: 36, nullable: true })
  referenceId!: string | null;

  @CreateDateColumn({ name: 'creado_en' })
  createdAt!: Date;

  @UpdateDateColumn({ name: 'actualizado_en' })
  updatedAt!: Date;

  @ManyToOne(() => TenantTypeOrmEntity, {
    nullable: false,
  })
  @JoinColumn({ name: 'empresa_id' })
  tenant!: TenantTypeOrmEntity;

  @ManyToOne(() => ProductTypeOrmEntity, {
    nullable: false,
  })
  @JoinColumn({ name: 'producto_id' })
  product!: ProductTypeOrmEntity;

  @ManyToOne(() => EmployeeTypeOrmEntity, {
    nullable: true,
  })
  @JoinColumn({ name: 'empleado_id' })
  employee!: EmployeeTypeOrmEntity | null;
}
