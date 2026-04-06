import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LoyaltyAccountTypeOrmEntity } from './infrastructure/loyalty-account.typeorm-entity';
import { LoyaltyTransactionTypeOrmEntity } from './infrastructure/loyalty-transaction.typeorm-entity';
import { PointsConfigurationTypeOrmEntity } from './infrastructure/points-configuration.typeorm-entity';
import { PointsRedemptionTypeOrmEntity } from './infrastructure/points-redemption.typeorm-entity';
import { PointsRewardTypeOrmEntity } from './infrastructure/points-reward.typeorm-entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      PointsConfigurationTypeOrmEntity,
      LoyaltyAccountTypeOrmEntity,
      PointsRewardTypeOrmEntity,
      PointsRedemptionTypeOrmEntity,
      LoyaltyTransactionTypeOrmEntity,
    ]),
  ],
  exports: [TypeOrmModule],
})
export class LoyaltyModule {}
