import { BaseEntity } from '../../../shared/domain/base-entity';

export class Customer extends BaseEntity {
  private constructor(
    id: string,
    public readonly tenantId: string,
    public readonly firstName: string,
    public readonly lastName: string,
    public readonly phone: string | null,
    public readonly email: string | null,
    public readonly birthDate: string | null,
    public readonly isActive: boolean,
    createdAt?: Date,
    updatedAt?: Date,
  ) {
    super(id, createdAt, updatedAt);
  }

  static create(params: {
    id: string;
    tenantId: string;
    firstName: string;
    lastName: string;
    phone?: string | null;
    email?: string | null;
    birthDate?: string | null;
    isActive?: boolean;
    createdAt?: Date;
    updatedAt?: Date;
  }): Customer {
    return new Customer(
      params.id,
      params.tenantId,
      params.firstName,
      params.lastName,
      params.phone ?? null,
      params.email ?? null,
      params.birthDate ?? null,
      params.isActive ?? true,
      params.createdAt,
      params.updatedAt,
    );
  }
}
