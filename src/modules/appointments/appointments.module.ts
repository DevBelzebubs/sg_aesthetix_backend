import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CreateAppointmentCommandService } from './application/commands/create-appointment.service';
import { DeleteAppointmentCommandService } from './application/commands/delete-appointment.service';
import { UpdateAppointmentCommandService } from './application/commands/update-appointment.service';
import { CreateAppointmentInputPort } from './application/ports/input/create-appointment.input-port';
import { DeleteAppointmentInputPort } from './application/ports/input/delete-appointment.input-port';
import { GetAppointmentInputPort } from './application/ports/input/get-appointment.input-port';
import { ListAppointmentsInputPort } from './application/ports/input/list-appointments.input-port';
import { UpdateAppointmentInputPort } from './application/ports/input/update-appointment.input-port';
import { AppointmentRepositoryOutputPort } from './application/ports/output/appointment.repository.output-port';
import { GetAppointmentQueryService } from './application/queries/get-appointment.service';
import { ListAppointmentsQueryService } from './application/queries/list-appointments.service';
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
      provide: CreateAppointmentInputPort,
      useClass: CreateAppointmentCommandService,
    },
    {
      provide: UpdateAppointmentInputPort,
      useClass: UpdateAppointmentCommandService,
    },
    {
      provide: DeleteAppointmentInputPort,
      useClass: DeleteAppointmentCommandService,
    },
    {
      provide: GetAppointmentInputPort,
      useClass: GetAppointmentQueryService,
    },
    {
      provide: ListAppointmentsInputPort,
      useClass: ListAppointmentsQueryService,
    },
    {
      provide: AppointmentTypeOrmRepository,
      useExisting: AppointmentRepositoryOutputPort,
    },
  ],
  exports: [TypeOrmModule, AppointmentRepositoryOutputPort],
})
export class AppointmentsModule {}
