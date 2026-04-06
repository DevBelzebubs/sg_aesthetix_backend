import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';
import { CustomerTypeOrmEntity } from '../../customers/infrastructure/customer.typeorm-entity';

@Entity({ name: 'cuenta_puntos' })
export class LoyaltyAccountTypeOrmEntity {
  @PrimaryColumn('char', { length: 36 })
  id!: string;

  @Column({ name: 'cliente_id', type: 'char', length: 36, unique: true })
  customerId!: string;

  @Column({ name: 'puntos_disponibles', type: 'int', default: 0 })
  availablePoints!: number;

  @Column({ name: 'puntos_acumulados', type: 'int', default: 0 })
  accumulatedPoints!: number;

  @Column({ name: 'puntos_canjeados', type: 'int', default: 0 })
  redeemedPoints!: number;

  @UpdateDateColumn({ name: 'actualizado_en' })
  updatedAt!: Date;

  @OneToOne(() => CustomerTypeOrmEntity, {
    nullable: false,
  })
  @JoinColumn({ name: 'cliente_id' })
  customer!: CustomerTypeOrmEntity;
}
