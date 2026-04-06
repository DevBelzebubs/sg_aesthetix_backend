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
import { TenantTypeOrmEntity } from '../../tenants/infrastructure/tenant.typeorm-entity';

@Entity({ name: 'clientes' })
@Index('idx_clientes_telefono', ['phone'])
export class CustomerTypeOrmEntity {
  @PrimaryColumn('char', { length: 36 })
  id!: string;

  @Column({ name: 'empresa_id', type: 'char', length: 36 })
  tenantId!: string;

  @Column({ name: 'nombres', type: 'varchar', length: 100 })
  firstName!: string;

  @Column({ name: 'apellidos', type: 'varchar', length: 100 })
  lastName!: string;

  @Column({ name: 'telefono', type: 'varchar', length: 20, nullable: true })
  phone!: string | null;

  @Column({ name: 'correo_electronico', type: 'varchar', length: 150, nullable: true })
  email!: string | null;

  @Column({ name: 'fecha_nacimiento', type: 'date', nullable: true })
  birthDate!: string | null;

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
}
