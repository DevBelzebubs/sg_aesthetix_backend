import { Injectable, NotFoundException } from '@nestjs/common';
import { GetAppointmentInputDto } from '../dto/input/get-appointment.input';
import { ListAppointmentsInputDto } from '../dto/input/list-appointments.input';
import { AppointmentOutputDto } from '../dto/output/appointment.output';
import { AppointmentOutputMapper } from '../dto/output/appointment-output.mapper';
import { AppointmentQueryInputPort } from '../ports/input/appointment.query.input-port';
import { AppointmentRepositoryOutputPort } from '../ports/output/appointment.repository.output-port';

@Injectable()
export class AppointmentQueryService extends AppointmentQueryInputPort {
  constructor(
    private readonly appointmentRepository: AppointmentRepositoryOutputPort,
  ) {
    super();
  }

  async get(input: GetAppointmentInputDto): Promise<AppointmentOutputDto> {
    const appointment = await this.appointmentRepository.findById(
      input.tenantId,
      input.id,
    );

    if (!appointment) {
      throw new NotFoundException('Appointment not found');
    }

    return AppointmentOutputMapper.toDto(appointment);
  }

  async list(input: ListAppointmentsInputDto): Promise<AppointmentOutputDto[]> {
    const appointments = await this.appointmentRepository.findAllByTenant(
      input.tenantId,
    );

    return AppointmentOutputMapper.toDtoList(appointments);
  }
}
