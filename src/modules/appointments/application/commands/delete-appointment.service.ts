import { Injectable, NotFoundException } from '@nestjs/common';
import { DeleteAppointmentInputDto } from '../dto/input/delete-appointment.input';
import { DeleteAppointmentOutputDto } from '../dto/output/delete-appointment.output';
import { DeleteAppointmentInputPort } from '../ports/input/delete-appointment.input-port';
import { AppointmentRepositoryOutputPort } from '../ports/output/appointment.repository.output-port';

@Injectable()
export class DeleteAppointmentCommandService extends DeleteAppointmentInputPort {
  constructor(
    private readonly appointmentRepository: AppointmentRepositoryOutputPort,
  ) {
    super();
  }

  async execute(
    input: DeleteAppointmentInputDto,
  ): Promise<DeleteAppointmentOutputDto> {
    const currentAppointment = await this.appointmentRepository.findById(
      input.tenantId,
      input.id,
    );

    if (!currentAppointment) {
      throw new NotFoundException('Appointment not found');
    }

    await this.appointmentRepository.delete(input.tenantId, input.id);

    return {
      id: input.id,
      deleted: true,
    };
  }
}
