export enum InventoryMovementType {
  IN = 'ingreso',
  OUT = 'salida',
  ADJUST = 'ajuste',
}

export class InventoryMovement {
  private constructor(
    public readonly id: string,
    public readonly tenantId: string,
    public readonly productId: string,
    public readonly employeeId: string | null,
    public readonly type: InventoryMovementType,
    public readonly quantity: number,
    public readonly reason: string | null,
    public readonly previousStock: number,
    public readonly newStock: number,
    public readonly referenceType: string | null,
    public readonly referenceId: string | null,
    public readonly createdAt: Date,
    public readonly updatedAt: Date,
  ) {}

  static create(params: {
    id: string;
    tenantId: string;
    productId: string;
    employeeId?: string | null;
    type: InventoryMovementType;
    quantity: number;
    reason?: string | null;
    previousStock: number;
    newStock: number;
    referenceType?: string | null;
    referenceId?: string | null;
    createdAt?: Date;
    updatedAt?: Date;
  }): InventoryMovement {
    return new InventoryMovement(
      params.id,
      params.tenantId,
      params.productId,
      params.employeeId ?? null,
      params.type,
      params.quantity,
      params.reason ?? null,
      params.previousStock,
      params.newStock,
      params.referenceType ?? null,
      params.referenceId ?? null,
      params.createdAt ?? new Date(),
      params.updatedAt ?? new Date(),
    );
  }
}
