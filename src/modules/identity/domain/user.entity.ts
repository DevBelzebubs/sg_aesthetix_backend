import { BaseEntity } from '../../../shared/domain/base-entity';

export enum UserRole {
  TENANT_ADMIN = 'TENANT_ADMIN',
  EMPLOYEE = 'EMPLOYEE',
  RECEPTIONIST = 'RECEPTIONIST',
}

export class User extends BaseEntity {
  private constructor(
    id: string,
    public readonly tenantId: string,
    public readonly branchId: string | null,
    public readonly email: string,
    public readonly passwordHash: string,
    public readonly role: UserRole,
    public readonly isActive: boolean,
    createdAt?: Date,
    updatedAt?: Date,
  ) {
    super(id, createdAt, updatedAt);
  }

  static create(params: {
    id: string;
    tenantId: string;
    branchId?: string | null;
    email: string;
    passwordHash: string;
    role: UserRole;
    isActive?: boolean;
    createdAt?: Date;
    updatedAt?: Date;
  }): User {
    return new User(
      params.id,
      params.tenantId,
      params.branchId ?? null,
      params.email,
      params.passwordHash,
      params.role,
      params.isActive ?? true,
      params.createdAt,
      params.updatedAt,
    );
  }
}
