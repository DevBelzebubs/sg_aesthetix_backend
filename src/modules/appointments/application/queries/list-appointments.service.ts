import { Injectable } from '@nestjs/common';
import { ListAppointmentsInputDto } from '../dto/input/list-appointments.input';
import { AppointmentOutputMapper } from '../dto/output/appointment-output.mapper';
import { AppointmentOutputDto } from '../dto/output/appointment.output';
import { ListAppointmentsInputPort } from '../ports/input/list-appointments.input-port';
import { AppointmentRepositoryOutputPort } from '../ports/output/appointment.repository.output-port';

@Injectable()
export class ListAppointmentsQueryService extends ListAppointmentsInputPort {
  constructor(
    private readonly appointmentRepository: AppointmentRepositoryOutputPort,
  ) {
    super();
  }

  async execute(
    input: ListAppointmentsInputDto,
  ): Promise<AppointmentOutputDto[]> {
    const appointments = await this.appointmentRepository.findAllByTenant(
      input.tenantId,
    );

    return AppointmentOutputMapper.toDtoList(appointments);
  }
}
