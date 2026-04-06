import { BaseEntity } from '../../../shared/domain/base-entity';

export class Employee extends BaseEntity {
  private constructor(
    id: string,
    public readonly tenantId: string,
    public readonly userId: string,
    public readonly firstName: string,
    public readonly lastName: string,
    public readonly phone: string | null,
    public readonly specialty: string | null,
    public readonly description: string | null,
    public readonly photoUrl: string | null,
    public readonly isActive: boolean,
    createdAt?: Date,
    updatedAt?: Date,
  ) {
    super(id, createdAt, updatedAt);
  }

  static create(params: {
    id: string;
    tenantId: string;
    userId: string;
    firstName: string;
    lastName: string;
    phone?: string | null;
    specialty?: string | null;
    description?: string | null;
    photoUrl?: string | null;
    isActive?: boolean;
    createdAt?: Date;
    updatedAt?: Date;
  }): Employee {
    return new Employee(
      params.id,
      params.tenantId,
      params.userId,
      params.firstName,
      params.lastName,
      params.phone ?? null,
      params.specialty ?? null,
      params.description ?? null,
      params.photoUrl ?? null,
      params.isActive ?? true,
      params.createdAt,
      params.updatedAt,
    );
  }
}
