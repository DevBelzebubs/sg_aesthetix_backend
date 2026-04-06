import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'roles' })
export class RoleTypeOrmEntity {
  @PrimaryGeneratedColumn({ type: 'int' })
  id!: number;

  @Column('varchar', { length: 50, unique: true })
  nombre!: string;

  @Column('varchar', { length: 150, nullable: true })
  descripcion!: string | null;

  @CreateDateColumn({ name: 'creado_en' })
  createdAt!: Date;
}
