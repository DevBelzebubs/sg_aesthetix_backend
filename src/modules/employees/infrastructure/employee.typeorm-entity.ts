import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';
import { UserTypeOrmEntity } from '../../identity/infrastructure/user.typeorm-entity';
import { TenantTypeOrmEntity } from '../../tenants/infrastructure/tenant.typeorm-entity';

@Entity({ name: 'empleados' })
export class EmployeeTypeOrmEntity {
  @PrimaryColumn('char', { length: 36 })
  id!: string;

  @Column({ name: 'empresa_id', type: 'char', length: 36 })
  tenantId!: string;

  @Column({ name: 'usuario_id', type: 'char', length: 36, unique: true })
  userId!: string;

  @Column({ name: 'nombres', type: 'varchar', length: 100 })
  firstName!: string;

  @Column({ name: 'apellidos', type: 'varchar', length: 100 })
  lastName!: string;

  @Column({ name: 'telefono', type: 'varchar', length: 20, nullable: true })
  phone!: string | null;

  @Column({ name: 'especialidad', type: 'varchar', length: 150, nullable: true })
  specialty!: string | null;

  @Column({ name: 'descripcion', type: 'text', nullable: true })
  description!: string | null;

  @Column({ name: 'foto_url', type: 'varchar', length: 500, nullable: true })
  photoUrl!: string | null;

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

  @ManyToOne(() => UserTypeOrmEntity, {
    nullable: false,
  })
  @JoinColumn({ name: 'usuario_id' })
  user!: UserTypeOrmEntity;
}
