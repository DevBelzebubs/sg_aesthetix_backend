import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomerTypeOrmEntity } from './infrastructure/customer.typeorm-entity';

@Module({
  imports: [TypeOrmModule.forFeature([CustomerTypeOrmEntity])],
  exports: [TypeOrmModule],
})
export class CustomersModule {}
