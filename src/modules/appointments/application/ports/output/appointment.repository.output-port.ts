import { Appointment } from '../../../domain/appointment.entity';

export abstract class AppointmentRepositoryOutputPort {
  abstract create(appointment: Appointment): Promise<Appointment>;
  abstract findAllByTenant(tenantId: string): Promise<Appointment[]>;
  abstract findById(tenantId: string, id: string): Promise<Appointment | null>;
  abstract update(appointment: Appointment): Promise<Appointment>;
  abstract delete(tenantId: string, id: string): Promise<void>;
}
