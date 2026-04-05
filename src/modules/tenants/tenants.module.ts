import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BranchTypeOrmEntity } from './infrastructure/branch.typeorm-entity';
import { TenantTypeOrmEntity } from './infrastructure/tenant.typeorm-entity';

@Module({
  imports: [TypeOrmModule.forFeature([TenantTypeOrmEntity, BranchTypeOrmEntity])],
  exports: [TypeOrmModule],
})
export class TenantsModule {}
