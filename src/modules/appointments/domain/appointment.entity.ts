import { BaseEntity } from '../../../shared/domain/base-entity';

export enum AppointmentStatus {
  PENDING = 'pendiente',
  CONFIRMED = 'confirmada',
  IN_PROGRESS = 'en_progreso',
  COMPLETED = 'completada',
  CANCELLED = 'cancelada',
  NO_SHOW = 'no_asistio',
}

export enum AppointmentChannel {
  LANDING = 'landing',
  PANEL = 'panel',
  WHATSAPP = 'whatsapp',
  PHONE = 'telefono',
}

export class Appointment extends BaseEntity {
  private constructor(
    id: string,
    public readonly tenantId: string,
    public readonly customerId: string,
    public readonly employeeId: string,
    public readonly serviceId: string,
    public readonly reservationDate: string,
    public readonly startTime: string,
    public readonly endTime: string,
    public readonly status: AppointmentStatus,
    public readonly channel: AppointmentChannel,
    public readonly notes: string | null,
    createdAt?: Date,
    updatedAt?: Date,
  ) {
    super(id, createdAt, updatedAt);
  }

  static create(params: {
    id: string;
    tenantId: string;
    customerId: string;
    employeeId: string;
    serviceId: string;
    reservationDate: string;
    startTime: string;
    endTime: string;
    status?: AppointmentStatus;
    channel: AppointmentChannel;
    notes?: string | null;
    createdAt?: Date;
    updatedAt?: Date;
  }): Appointment {
    return new Appointment(
      params.id,
      params.tenantId,
      params.customerId,
      params.employeeId,
      params.serviceId,
      params.reservationDate,
      params.startTime,
      params.endTime,
      params.status ?? AppointmentStatus.PENDING,
      params.channel,
      params.notes ?? null,
      params.createdAt,
      params.updatedAt,
    );
  }
}
