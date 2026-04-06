import { Injectable, NotFoundException } from '@nestjs/common';
import { Appointment } from '../../domain/appointment.entity';
import { CreateAppointmentInputDto } from '../dto/input/create-appointment.input';
import { UpdateAppointmentInputDto } from '../dto/input/update-appointment.input';
import { DeleteAppointmentInputDto } from '../dto/input/delete-appointment.input';
import { AppointmentOutputDto } from '../dto/output/appointment.output';
import { DeleteAppointmentOutputDto } from '../dto/output/delete-appointment.output';
import { AppointmentCommandInputPort } from '../ports/input/appointment.command.input-port';
import { AppointmentOutputMapper } from '../dto/output/appointment-output.mapper';
import { AppointmentRepositoryOutputPort } from '../ports/output/appointment.repository.output-port';

@Injectable()
export class AppointmentCommandService extends AppointmentCommandInputPort {
  constructor(
    private readonly appointmentRepository: AppointmentRepositoryOutputPort,
  ) {
    super();
  }

  async create(
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

  async update(
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

  async delete(
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
