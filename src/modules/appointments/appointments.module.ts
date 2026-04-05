import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppointmentTypeOrmEntity } from './infrastructure/appointment.typeorm-entity';

@Module({
  imports: [TypeOrmModule.forFeature([AppointmentTypeOrmEntity])],
  exports: [TypeOrmModule],
})
export class AppointmentsModule {}
