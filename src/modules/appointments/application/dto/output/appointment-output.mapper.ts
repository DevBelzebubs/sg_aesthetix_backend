import { Appointment } from '../../../domain/appointment.entity';
import { AppointmentOutputDto } from './appointment.output';

export class AppointmentOutputMapper {
  static toDto(appointment: Appointment): AppointmentOutputDto {
    return {
      id: appointment.id,
      tenantId: appointment.tenantId,
      customerId: appointment.customerId,
      employeeId: appointment.employeeId,
      serviceId: appointment.serviceId,
      reservationDate: appointment.reservationDate,
      startTime: appointment.startTime,
      endTime: appointment.endTime,
      status: appointment.status,
      channel: appointment.channel,
      notes: appointment.notes,
      createdAt: appointment.createdAt,
      updatedAt: appointment.updatedAt,
    };
  }

  static toDtoList(appointments: Appointment[]): AppointmentOutputDto[] {
    return appointments.map((appointment) => this.toDto(appointment));
  }
}
