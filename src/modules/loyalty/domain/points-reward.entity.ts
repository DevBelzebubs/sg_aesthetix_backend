import { BaseEntity } from '../../../shared/domain/base-entity';

export class PointsReward extends BaseEntity {
  private constructor(
    id: string,
    public readonly tenantId: string,
    public readonly rewardType: string,
    public readonly serviceId: string | null,
    public readonly productId: string | null,
    public readonly name: string,
    public readonly description: string | null,
    public readonly requiredPoints: number,
    public readonly deliveredQuantity: number,
    public readonly isActive: boolean,
    createdAt?: Date,
    updatedAt?: Date,
  ) {
    super(id, createdAt, updatedAt);
  }

  static create(params: {
    id: string;
    tenantId: string;
    rewardType: string;
    serviceId?: string | null;
    productId?: string | null;
    name: string;
    description?: string | null;
    requiredPoints: number;
    deliveredQuantity?: number;
    isActive?: boolean;
    createdAt?: Date;
    updatedAt?: Date;
  }): PointsReward {
    return new PointsReward(
      params.id,
      params.tenantId,
      params.rewardType,
      params.serviceId ?? null,
      params.productId ?? null,
      params.name,
      params.description ?? null,
      params.requiredPoints,
      params.deliveredQuantity ?? 1,
      params.isActive ?? true,
      params.createdAt,
      params.updatedAt,
    );
  }
}
