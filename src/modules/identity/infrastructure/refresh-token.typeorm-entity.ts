import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
} from 'typeorm';
import { UserTypeOrmEntity } from './user.typeorm-entity';

@Entity({ name: 'refresh_tokens' })
@Index('idx_refresh_tokens_usuario', ['userId'])
export class RefreshTokenTypeOrmEntity {
  @PrimaryColumn('char', { length: 36 })
  id!: string;

  @Column({ name: 'usuario_id', type: 'char', length: 36 })
  userId!: string;

  @Column({ name: 'token_hash', type: 'varchar', length: 255 })
  tokenHash!: string;

  @Column({ name: 'expira_en', type: 'datetime' })
  expiresAt!: Date;

  @Column({ name: 'revocado', type: 'tinyint', width: 1, default: () => '0' })
  revoked!: boolean;

  @CreateDateColumn({ name: 'creado_en' })
  createdAt!: Date;

  @ManyToOne(() => UserTypeOrmEntity, {
    nullable: false,
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'usuario_id' })
  user!: UserTypeOrmEntity;
}
