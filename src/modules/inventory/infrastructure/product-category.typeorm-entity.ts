import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'categoria_producto' })
export class ProductCategoryTypeOrmEntity {
  @PrimaryGeneratedColumn({ type: 'int' })
  id!: number;

  @Column('varchar', { length: 100 })
  name!: string;

  @Column({ name: 'descripcion', type: 'varchar', length: 255, nullable: true })
  description!: string | null;

  @Column({ name: 'orden', type: 'int', default: 0 })
  sortOrder!: number;

  @CreateDateColumn({ name: 'creado_en' })
  createdAt!: Date;
}
