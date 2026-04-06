import { BaseEntity } from '../../../shared/domain/base-entity';

export class PointsRedemption extends BaseEntity {
  private constructor(
    id: string,
    public readonly accountId: string,
    public readonly rewardId: string,
    public readonly employeeId: string | null,
    public readonly saleId: string | null,
    public readonly redeemedPoints: number,
    public readonly status: string,
    public readonly observations: string | null,
    createdAt?: Date,
    updatedAt?: Date,
  ) {
    super(id, createdAt, updatedAt);
  }

  static create(params: {
    id: string;
    accountId: string;
    rewardId: string;
    employeeId?: string | null;
    saleId?: string | null;
    redeemedPoints: number;
    status: string;
    observations?: string | null;
    createdAt?: Date;
    updatedAt?: Date;
  }): PointsRedemption {
    return new PointsRedemption(
      params.id,
      params.accountId,
      params.rewardId,
      params.employeeId ?? null,
      params.saleId ?? null,
      params.redeemedPoints,
      params.status,
      params.observations ?? null,
      params.createdAt,
      params.updatedAt,
    );
  }
}
