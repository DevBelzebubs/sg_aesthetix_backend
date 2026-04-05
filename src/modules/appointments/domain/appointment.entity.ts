import { BaseEntity } from '../../../shared/domain/base-entity';

export enum AppointmentStatus {
  PENDING = 'PENDING',
  CONFIRMED = 'CONFIRMED',
  IN_PROGRESS = 'IN_PROGRESS',
  COMPLETED = 'COMPLETED',
  CANCELLED = 'CANCELLED',
  NO_SHOW = 'NO_SHOW',
}

export class Appointment extends BaseEntity {
  private constructor(
    id: string,
    public readonly tenantId: string,
    public readonly branchId: string,
    public readonly customerId: string,
    public readonly employeeId: string,
    public readonly serviceId: string,
    public readonly scheduledAt: Date,
    public readonly endsAt: Date,
    public readonly status: AppointmentStatus,
    public readonly notes: string,
    public readonly pricePaid: number,
    public readonly cancelledAt: Date | null,
    public readonly cancelReason: string | null,
    createdAt?: Date,
    updatedAt?: Date,
  ) {
    super(id, createdAt, updatedAt);
  }

  static create(params: {
    id: string;
    tenantId: string;
    branchId: string;
    customerId: string;
    employeeId: string;
    serviceId: string;
    scheduledAt: Date;
    endsAt: Date;
    status?: AppointmentStatus;
    notes: string;
    pricePaid: number;
    cancelledAt?: Date | null;
    cancelReason?: string | null;
    createdAt?: Date;
    updatedAt?: Date;
  }): Appointment {
    return new Appointment(
      params.id,
      params.tenantId,
      params.branchId,
      params.customerId,
      params.employeeId,
      params.serviceId,
      params.scheduledAt,
      params.endsAt,
      params.status ?? AppointmentStatus.PENDING,
      params.notes,
      params.pricePaid,
      params.cancelledAt ?? null,
      params.cancelReason ?? null,
      params.createdAt,
      params.updatedAt,
    );
  }
}
