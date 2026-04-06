export class PointsTransaction {
  private constructor(
    public readonly id: string,
    public readonly accountId: string,
    public readonly saleId: string | null,
    public readonly redemptionId: string | null,
    public readonly type: string,
    public readonly points: number,
    public readonly previousBalance: number,
    public readonly newBalance: number,
    public readonly description: string | null,
    public readonly createdAt: Date,
  ) {}

  static create(params: {
    id: string;
    accountId: string;
    saleId?: string | null;
    redemptionId?: string | null;
    type: string;
    points: number;
    previousBalance: number;
    newBalance: number;
    description?: string | null;
    createdAt?: Date;
  }): PointsTransaction {
    return new PointsTransaction(
      params.id,
      params.accountId,
      params.saleId ?? null,
      params.redemptionId ?? null,
      params.type,
      params.points,
      params.previousBalance,
      params.newBalance,
      params.description ?? null,
      params.createdAt ?? new Date(),
    );
  }
}
