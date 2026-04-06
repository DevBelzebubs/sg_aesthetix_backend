import { AppointmentChannel, AppointmentStatus } from '../../../domain/appointment.entity';

export class AppointmentOutputDto {
  id!: string;
  tenantId!: string;
  customerId!: string;
  employeeId!: string;
  serviceId!: string;
  reservationDate!: string;
  startTime!: string;
  endTime!: string;
  status!: AppointmentStatus;
  channel!: AppointmentChannel;
  notes!: string | null;
  createdAt!: Date;
  updatedAt!: Date;
}
