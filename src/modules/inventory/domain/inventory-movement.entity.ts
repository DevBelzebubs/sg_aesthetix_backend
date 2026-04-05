export enum InventoryMovementType {
  IN = 'IN',
  OUT = 'OUT',
  ADJUST = 'ADJUST',
}

export class InventoryMovement {
  private constructor(
    public readonly id: string,
    public readonly tenantId: string,
    public readonly productId: string,
    public readonly type: InventoryMovementType,
    public readonly quantity: number,
    public readonly reason: string,
    public readonly referenceId: string | null,
    public readonly createdBy: string,
    public readonly createdAt: Date,
  ) {}

  static create(params: {
    id: string;
    tenantId: string;
    productId: string;
    type: InventoryMovementType;
    quantity: number;
    reason: string;
    referenceId?: string | null;
    createdBy: string;
    createdAt?: Date;
  }): InventoryMovement {
    return new InventoryMovement(
      params.id,
      params.tenantId,
      params.productId,
      params.type,
      params.quantity,
      params.reason,
      params.referenceId ?? null,
      params.createdBy,
      params.createdAt ?? new Date(),
    );
  }
}
