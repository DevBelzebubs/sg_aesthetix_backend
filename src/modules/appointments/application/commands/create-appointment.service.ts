import { Injectable } from '@nestjs/common';
import { Appointment } from '../../domain/appointment.entity';
import { CreateAppointmentInputDto } from '../dto/input/create-appointment.input';
import { AppointmentOutputMapper } from '../dto/output/appointment-output.mapper';
import { AppointmentOutputDto } from '../dto/output/appointment.output';
import { CreateAppointmentInputPort } from '../ports/input/create-appointment.input-port';
import { AppointmentRepositoryOutputPort } from '../ports/output/appointment.repository.output-port';

@Injectable()
export class CreateAppointmentCommandService extends CreateAppointmentInputPort {
  constructor(
    private readonly appointmentRepository: AppointmentRepositoryOutputPort,
  ) {
    super();
  }

  async execute(
    input: CreateAppointmentInputDto,
  ): Promise<AppointmentOutputDto> {
    const appointment = Appointment.create({
      id: input.id,
      tenantId: input.tenantId,
      customerId: input.customerId,
      employeeId: input.employeeId,
      serviceId: input.serviceId,
      reservationDate: input.reservationDate,
      startTime: input.startTime,
      endTime: input.endTime,
      channel: input.channel,
      status: input.status,
      notes: input.notes,
    });

    const createdAppointment =
      await this.appointmentRepository.create(appointment);
    return AppointmentOutputMapper.toDto(createdAppointment);
  }
}
