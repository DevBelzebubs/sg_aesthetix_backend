import { BaseEntity } from '../../../shared/domain/base-entity';

export class Employee extends BaseEntity {
  private constructor(
    id: string,
    public readonly tenantId: string,
    public readonly branchId: string,
    public readonly userId: string | null,
    public readonly fullName: string,
    public readonly phone: string,
    public readonly photoUrl: string,
    public readonly bio: string,
    public readonly commissionPct: number,
    public readonly isActive: boolean,
    createdAt?: Date,
    updatedAt?: Date,
  ) {
    super(id, createdAt, updatedAt);
  }

  static create(params: {
    id: string;
    tenantId: string;
    branchId: string;
    userId?: string | null;
    fullName: string;
    phone: string;
    photoUrl: string;
    bio: string;
    commissionPct: number;
    isActive?: boolean;
    createdAt?: Date;
    updatedAt?: Date;
  }): Employee {
    return new Employee(
      params.id,
      params.tenantId,
      params.branchId,
      params.userId ?? null,
      params.fullName,
      params.phone,
      params.photoUrl,
      params.bio,
      params.commissionPct,
      params.isActive ?? true,
      params.createdAt,
      params.updatedAt,
    );
  }
}
