import { BaseEntity } from '../../../shared/domain/base-entity';

export enum TenantPlan {
  BASIC = 'BASIC',
  PRO = 'PRO',
  MULTI = 'MULTI',
}

export enum TenantStatus {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
  SUSPENDED = 'SUSPENDED',
}

export class Tenant extends BaseEntity {
  private constructor(
    id: string,
    public readonly name: string,
    public readonly slug: string,
    public readonly plan: TenantPlan,
    public readonly status: TenantStatus,
    createdAt?: Date,
    updatedAt?: Date,
  ) {
    super(id, createdAt, updatedAt);
  }

  static create(params: {
    id: string;
    name: string;
    slug: string;
    plan?: TenantPlan;
    status?: TenantStatus;
    createdAt?: Date;
    updatedAt?: Date;
  }): Tenant {
    return new Tenant(
      params.id,
      params.name,
      params.slug,
      params.plan ?? TenantPlan.BASIC,
      params.status ?? TenantStatus.ACTIVE,
      params.createdAt,
      params.updatedAt,
    );
  }
}
