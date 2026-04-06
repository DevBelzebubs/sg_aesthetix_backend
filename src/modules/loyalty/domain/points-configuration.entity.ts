export class PointsConfiguration {
  private constructor(
    public readonly id: number,
    public readonly tenantId: string,
    public readonly baseMonetaryValue: number,
    public readonly pointsPerBaseValue: number,
    public readonly minimumRedemption: number,
    public readonly isActive: boolean,
    public readonly updatedAt: Date,
  ) {}

  static create(params: {
    id: number;
    tenantId: string;
    baseMonetaryValue?: number;
    pointsPerBaseValue?: number;
    minimumRedemption?: number;
    isActive?: boolean;
    updatedAt?: Date;
  }): PointsConfiguration {
    return new PointsConfiguration(
      params.id,
      params.tenantId,
      params.baseMonetaryValue ?? 1,
      params.pointsPerBaseValue ?? 1,
      params.minimumRedemption ?? 0,
      params.isActive ?? true,
      params.updatedAt ?? new Date(),
    );
  }
}
