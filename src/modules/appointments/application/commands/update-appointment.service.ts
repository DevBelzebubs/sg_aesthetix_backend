import { Injectable, NotFoundException } from '@nestjs/common';
import { Appointment } from '../../domain/appointment.entity';
import { UpdateAppointmentInputDto } from '../dto/input/update-appointment.input';
import { AppointmentOutputMapper } from '../dto/output/appointment-output.mapper';
import { AppointmentOutputDto } from '../dto/output/appointment.output';
import { UpdateAppointmentInputPort } from '../ports/input/update-appointment.input-port';
import { AppointmentRepositoryOutputPort } from '../ports/output/appointment.repository.output-port';

@Injectable()
export class UpdateAppointmentCommandService extends UpdateAppointmentInputPort {
  constructor(
    private readonly appointmentRepository: AppointmentRepositoryOutputPort,
  ) {
    super();
  }

  async execute(
    input: UpdateAppointmentInputDto,
  ): Promise<AppointmentOutputDto> {
    const currentAppointment = await this.appointmentRepository.findById(
      input.tenantId,
      input.id,
    );

    if (!currentAppointment) {
      throw new NotFoundException('Appointment not found');
    }

    const updatedAppointment = Appointment.create({
      id: currentAppointment.id,
      tenantId: currentAppointment.tenantId,
      customerId: input.customerId,
      employeeId: input.employeeId,
      serviceId: input.serviceId,
      reservationDate: input.reservationDate,
      startTime: input.startTime,
      endTime: input.endTime,
      channel: input.channel,
      status: input.status,
      notes: input.notes,
      createdAt: currentAppointment.createdAt,
    });

    const appointment =
      await this.appointmentRepository.update(updatedAppointment);
    return AppointmentOutputMapper.toDto(appointment);
  }
}
