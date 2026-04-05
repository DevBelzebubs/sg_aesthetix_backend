import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserTypeOrmEntity } from './infrastructure/user.typeorm-entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserTypeOrmEntity])],
  exports: [TypeOrmModule],
})
export class IdentityModule {}
