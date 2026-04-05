import { BaseEntity } from '../../../shared/domain/base-entity';

export class Customer extends BaseEntity {
  private constructor(
    id: string,
    public readonly tenantId: string,
    public readonly fullName: string,
    public readonly phone: string,
    public readonly email: string,
    public readonly birthDate: string | null,
    public readonly notes: string,
    public readonly preferredEmployeeId: string | null,
    public readonly deletedAt: Date | null,
    createdAt?: Date,
    updatedAt?: Date,
  ) {
    super(id, createdAt, updatedAt);
  }

  static create(params: {
    id: string;
    tenantId: string;
    fullName: string;
    phone: string;
    email: string;
    birthDate?: string | null;
    notes: string;
    preferredEmployeeId?: string | null;
    deletedAt?: Date | null;
    createdAt?: Date;
    updatedAt?: Date;
  }): Customer {
    return new Customer(
      params.id,
      params.tenantId,
      params.fullName,
      params.phone,
      params.email,
      params.birthDate ?? null,
      params.notes,
      params.preferredEmployeeId ?? null,
      params.deletedAt ?? null,
      params.createdAt,
      params.updatedAt,
    );
  }
}
