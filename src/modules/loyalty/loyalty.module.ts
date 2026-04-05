import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LoyaltyAccountTypeOrmEntity } from './infrastructure/loyalty-account.typeorm-entity';
import { LoyaltyTransactionTypeOrmEntity } from './infrastructure/loyalty-transaction.typeorm-entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      LoyaltyAccountTypeOrmEntity,
      LoyaltyTransactionTypeOrmEntity,
    ]),
  ],
  exports: [TypeOrmModule],
})
export class LoyaltyModule {}
