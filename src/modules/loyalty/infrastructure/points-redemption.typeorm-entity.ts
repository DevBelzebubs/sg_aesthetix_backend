import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';
import { EmployeeTypeOrmEntity } from '../../employees/infrastructure/employee.typeorm-entity';
import { LoyaltyAccountTypeOrmEntity } from './loyalty-account.typeorm-entity';
import { PointsRewardTypeOrmEntity } from './points-reward.typeorm-entity';

@Entity({ name: 'canjes_puntos' })
export class PointsRedemptionTypeOrmEntity {
  @PrimaryColumn('char', { length: 36 })
  id!: string;

  @Column({ name: 'cuenta_puntos_id', type: 'char', length: 36 })
  accountId!: string;

  @Column({ name: 'recompensa_id', type: 'char', length: 36 })
  rewardId!: string;

  @Column({ name: 'empleado_id', type: 'char', length: 36, nullable: true })
  employeeId!: string | null;

  @Column({ name: 'venta_id', type: 'char', length: 36, nullable: true })
  saleId!: string | null;

  @Column({ name: 'puntos_canjeados', type: 'int' })
  redeemedPoints!: number;

  @Column({ name: 'estado', type: 'varchar', length: 20 })
  status!: string;

  @Column({ name: 'observaciones', type: 'varchar', length: 255, nullable: true })
  observations!: string | null;

  @CreateDateColumn({ name: 'creado_en' })
  createdAt!: Date;

  @UpdateDateColumn({ name: 'actualizado_en' })
  updatedAt!: Date;

  @ManyToOne(() => LoyaltyAccountTypeOrmEntity, { nullable: false })
  @JoinColumn({ name: 'cuenta_puntos_id' })
  account!: LoyaltyAccountTypeOrmEntity;

  @ManyToOne(() => PointsRewardTypeOrmEntity, { nullable: false })
  @JoinColumn({ name: 'recompensa_id' })
  reward!: PointsRewardTypeOrmEntity;

  @ManyToOne(() => EmployeeTypeOrmEntity, { nullable: true })
  @JoinColumn({ name: 'empleado_id' })
  employee!: EmployeeTypeOrmEntity | null;
}
