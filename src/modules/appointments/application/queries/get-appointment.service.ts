import { Injectable, NotFoundException } from '@nestjs/common';
import { GetAppointmentInputDto } from '../dto/input/get-appointment.input';
import { AppointmentOutputMapper } from '../dto/output/appointment-output.mapper';
import { AppointmentOutputDto } from '../dto/output/appointment.output';
import { GetAppointmentInputPort } from '../ports/input/get-appointment.input-port';
import { AppointmentRepositoryOutputPort } from '../ports/output/appointment.repository.output-port';

@Injectable()
export class GetAppointmentQueryService extends GetAppointmentInputPort {
  constructor(
    private readonly appointmentRepository: AppointmentRepositoryOutputPort,
  ) {
    super();
  }

  async execute(input: GetAppointmentInputDto): Promise<AppointmentOutputDto> {
    const appointment = await this.appointmentRepository.findById(
      input.tenantId,
      input.id,
    );

    if (!appointment) {
      throw new NotFoundException('Appointment not found');
    }

    return AppointmentOutputMapper.toDto(appointment);
  }
}
