import { BaseEntity } from '../../../shared/domain/base-entity';

export class LoyaltyAccount extends BaseEntity {
  private constructor(
    id: string,
    public readonly tenantId: string,
    public readonly customerId: string,
    public readonly balance: number,
    public readonly lifetimePts: number,
    createdAt?: Date,
    updatedAt?: Date,
  ) {
    super(id, createdAt, updatedAt);
  }

  static create(params: {
    id: string;
    tenantId: string;
    customerId: string;
    balance?: number;
    lifetimePts?: number;
    createdAt?: Date;
    updatedAt?: Date;
  }): LoyaltyAccount {
    return new LoyaltyAccount(
      params.id,
      params.tenantId,
      params.customerId,
      params.balance ?? 0,
      params.lifetimePts ?? 0,
      params.createdAt,
      params.updatedAt,
    );
  }
}
