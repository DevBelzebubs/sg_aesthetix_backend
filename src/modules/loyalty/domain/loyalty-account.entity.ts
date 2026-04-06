import { BaseEntity } from '../../../shared/domain/base-entity';

export class LoyaltyAccount extends BaseEntity {
  private constructor(
    id: string,
    public readonly customerId: string,
    public readonly availablePoints: number,
    public readonly accumulatedPoints: number,
    public readonly redeemedPoints: number,
    updatedAt?: Date,
  ) {
    super(id, updatedAt, updatedAt);
  }

  static create(params: {
    id: string;
    customerId: string;
    availablePoints?: number;
    accumulatedPoints?: number;
    redeemedPoints?: number;
    updatedAt?: Date;
  }): LoyaltyAccount {
    return new LoyaltyAccount(
      params.id,
      params.customerId,
      params.availablePoints ?? 0,
      params.accumulatedPoints ?? 0,
      params.redeemedPoints ?? 0,
      params.updatedAt,
    );
  }
}
