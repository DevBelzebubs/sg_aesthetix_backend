export enum LoyaltyTransactionType {
  EARN = 'acumulacion',
  REDEEM = 'canje',
  ADJUST = 'ajuste',
}

export class LoyaltyTransaction {
  private constructor(
    public readonly id: string,
    public readonly accountId: string,
    public readonly saleId: string | null,
    public readonly redemptionId: string | null,
    public readonly type: LoyaltyTransactionType,
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
    type: LoyaltyTransactionType;
    points: number;
    previousBalance: number;
    newBalance: number;
    description?: string | null;
    createdAt?: Date;
  }): LoyaltyTransaction {
    return new LoyaltyTransaction(
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
