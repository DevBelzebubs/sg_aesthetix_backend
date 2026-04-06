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
import { RoleTypeOrmEntity } from './role.typeorm-entity';

@Entity({ name: 'usuarios' })
@Index('idx_usuarios_rol_id', ['roleId'])
export class UserTypeOrmEntity {
  @PrimaryColumn('char', { length: 36 })
  id!: string;

  @Column({ name: 'empresa_id', type: 'char', length: 36 })
  tenantId!: string;

  @Column({ name: 'rol_id', type: 'int' })
  roleId!: number;

  @Column({ name: 'correo_electronico', type: 'varchar', length: 150, unique: true })
  email!: string;

  @Column({ name: 'clave_hash', type: 'varchar', length: 255 })
  passwordHash!: string;

  @Column({ name: 'esta_activo', type: 'tinyint', width: 1, default: () => '1' })
  isActive!: boolean;

  @Column({ name: 'ultimo_acceso', type: 'datetime', nullable: true })
  lastAccess!: Date | null;

  @CreateDateColumn({ name: 'creado_en' })
  createdAt!: Date;

  @UpdateDateColumn({ name: 'actualizado_en' })
  updatedAt!: Date;

  @ManyToOne(() => TenantTypeOrmEntity, {
    nullable: false,
  })
  @JoinColumn({ name: 'empresa_id' })
  tenant!: TenantTypeOrmEntity;

  @ManyToOne(() => RoleTypeOrmEntity, {
    nullable: false,
  })
  @JoinColumn({ name: 'rol_id' })
  role!: RoleTypeOrmEntity;
}
