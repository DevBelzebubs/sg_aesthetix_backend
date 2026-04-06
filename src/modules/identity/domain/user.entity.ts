import { BaseEntity } from '../../../shared/domain/base-entity';

export enum UserRole {
  ADMIN = 'admin',
  EMPLOYEE = 'empleado',
}

export class User extends BaseEntity {
  private constructor(
    id: string,
    public readonly tenantId: string,
    public readonly roleId: number,
    public readonly email: string,
    public readonly passwordHash: string,
    public readonly isActive: boolean,
    public readonly lastAccess: Date | null,
    createdAt?: Date,
    updatedAt?: Date,
  ) {
    super(id, createdAt, updatedAt);
  }

  static create(params: {
    id: string;
    tenantId: string;
    roleId: number;
    email: string;
    passwordHash: string;
    isActive?: boolean;
    lastAccess?: Date | null;
    createdAt?: Date;
    updatedAt?: Date;
  }): User {
    return new User(
      params.id,
      params.tenantId,
      params.roleId,
      params.email,
      params.passwordHash,
      params.isActive ?? true,
      params.lastAccess ?? null,
      params.createdAt,
      params.updatedAt,
    );
  }
}
