import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppointmentCommandService } from './application/commands/appointment.command.service';
import { AppointmentQueryService } from './application/queries/appointment.query.service';
import { AppointmentCommandInputPort } from './application/ports/input/appointment.command.input-port';
import { AppointmentQueryInputPort } from './application/ports/input/appointment.query.input-port';
import { AppointmentRepositoryOutputPort } from './application/ports/output/appointment.repository.output-port';
import { AppointmentsController } from './infrastructure/controller/appointments.controller';
import { AppointmentTypeOrmEntity } from './infrastructure/entity/appointment.typeorm-entity';
import { AppointmentTypeOrmRepository } from './infrastructure/repository/appointment.typeorm-repository';

@Module({
  imports: [TypeOrmModule.forFeature([AppointmentTypeOrmEntity])],
  controllers: [AppointmentsController],
  providers: [
    {
      provide: AppointmentRepositoryOutputPort,
      useClass: AppointmentTypeOrmRepository,
    },
    {
      provide: AppointmentCommandInputPort,
      useClass: AppointmentCommandService,
    },
    {
      provide: AppointmentQueryInputPort,
      useClass: AppointmentQueryService,
    },
    {
      provide: AppointmentTypeOrmRepository,
      useExisting: AppointmentRepositoryOutputPort,
    },
  ],
  exports: [TypeOrmModule, AppointmentRepositoryOutputPort],
})
export class AppointmentsModule {}
