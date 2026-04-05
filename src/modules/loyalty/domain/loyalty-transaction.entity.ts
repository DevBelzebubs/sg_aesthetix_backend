export enum LoyaltyTransactionType {
  EARN = 'EARN',
  REDEEM = 'REDEEM',
  EXPIRE = 'EXPIRE',
  ADJUST = 'ADJUST',
}

export class LoyaltyTransaction {
  private constructor(
    public readonly id: string,
    public readonly tenantId: string,
    public readonly accountId: string,
    public readonly type: LoyaltyTransactionType,
    public readonly amount: number,
    public readonly referenceId: string | null,
    public readonly notes: string,
    public readonly createdAt: Date,
  ) {}

  static create(params: {
    id: string;
    tenantId: string;
    accountId: string;
    type: LoyaltyTransactionType;
    amount: number;
    referenceId?: string | null;
    notes: string;
    createdAt?: Date;
  }): LoyaltyTransaction {
    return new LoyaltyTransaction(
      params.id,
      params.tenantId,
      params.accountId,
      params.type,
      params.amount,
      params.referenceId ?? null,
      params.notes,
      params.createdAt ?? new Date(),
    );
  }
}
