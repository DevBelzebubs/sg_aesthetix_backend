import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'empresa' })
export class TenantTypeOrmEntity {
  @PrimaryColumn('char', { length: 36 })
  id!: string;

  @Column({ name: 'nombre_comercial', type: 'varchar', length: 150 })
  commercialName!: string;

  @Column('varchar', { length: 120, unique: true })
  slug!: string;

  @Column('varchar', { length: 20, nullable: true, unique: true })
  ruc!: string | null;

  @Column({ name: 'logo_url', type: 'varchar', length: 500, nullable: true })
  logoUrl!: string | null;

  @Column({ name: 'telefono', type: 'varchar', length: 20, nullable: true })
  phone!: string | null;

  @Column({ name: 'correo_electronico', type: 'varchar', length: 150, nullable: true })
  email!: string | null;

  @Column({ name: 'direccion', type: 'varchar', length: 255, nullable: true })
  address!: string | null;

  @Column({ name: 'portada_url', type: 'varchar', length: 500, nullable: true })
  coverUrl!: string | null;

  @CreateDateColumn({ name: 'creado_en' })
  createdAt!: Date;

  @UpdateDateColumn({ name: 'actualizado_en' })
  updatedAt!: Date;
}
