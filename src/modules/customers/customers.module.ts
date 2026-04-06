import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomerNoteTypeOrmEntity } from './infrastructure/customer-note.typeorm-entity';
import { CustomerTypeOrmEntity } from './infrastructure/customer.typeorm-entity';

@Module({
  imports: [TypeOrmModule.forFeature([CustomerTypeOrmEntity, CustomerNoteTypeOrmEntity])],
  exports: [TypeOrmModule],
})
export class CustomersModule {}
