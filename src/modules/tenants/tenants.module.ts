import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TenantTypeOrmEntity } from './infrastructure/tenant.typeorm-entity';

@Module({
  imports: [TypeOrmModule.forFeature([TenantTypeOrmEntity])],
  exports: [TypeOrmModule],
})
export class TenantsModule {}
