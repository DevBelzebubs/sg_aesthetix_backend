import {
  AppointmentChannel,
  AppointmentStatus,
} from '../../../domain/appointment.entity';

export class UpdateAppointmentInputDto {
  tenantId!: string;
  id!: string;
  customerId!: string;
  employeeId!: string;
  serviceId!: string;
  reservationDate!: string;
  startTime!: string;
  endTime!: string;
  channel!: AppointmentChannel;
  status!: AppointmentStatus;
  notes?: string | null;
}
