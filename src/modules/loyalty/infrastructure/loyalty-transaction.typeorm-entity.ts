import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
} from 'typeorm';
import { LoyaltyTransactionType } from '../domain/loyalty-transaction.entity';
import { LoyaltyAccountTypeOrmEntity } from './loyalty-account.typeorm-entity';

@Entity({ name: 'transacciones_puntos' })
@Index('idx_transacciones_puntos_cuenta', [
  'accountId',
])
export class LoyaltyTransactionTypeOrmEntity {
  @PrimaryColumn('char', { length: 36 })
  id!: string;

  @Column({ name: 'cuenta_puntos_id', type: 'char', length: 36 })
  accountId!: string;

  @Column({ name: 'venta_id', type: 'char', length: 36, nullable: true })
  saleId!: string | null;

  @Column({ name: 'canje_id', type: 'char', length: 36, nullable: true })
  redemptionId!: string | null;

  @Column({
    name: 'tipo',
    type: 'varchar',
    length: 20,
  })
  type!: LoyaltyTransactionType;

  @Column({ name: 'puntos', type: 'int' })
  points!: number;

  @Column({ name: 'saldo_anterior', type: 'int' })
  previousBalance!: number;

  @Column({ name: 'saldo_nuevo', type: 'int' })
  newBalance!: number;

  @Column({ name: 'descripcion', type: 'varchar', length: 255, nullable: true })
  description!: string | null;

  @CreateDateColumn({ name: 'creado_en' })
  createdAt!: Date;

  @ManyToOne(() => LoyaltyAccountTypeOrmEntity, {
    nullable: false,
  })
  @JoinColumn({ name: 'cuenta_puntos_id' })
  account!: LoyaltyAccountTypeOrmEntity;
}
