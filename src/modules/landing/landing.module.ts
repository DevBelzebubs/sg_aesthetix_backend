import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SocialNetworkTypeOrmEntity } from './infrastructure/social-network.typeorm-entity';

@Module({
  imports: [TypeOrmModule.forFeature([SocialNetworkTypeOrmEntity])],
  exports: [TypeOrmModule],
})
export class LandingModule {}
