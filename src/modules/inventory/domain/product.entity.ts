import { BaseEntity } from '../../../shared/domain/base-entity';

export class Product extends BaseEntity {
  private constructor(
    id: string,
    public readonly tenantId: string,
    public readonly categoryId: number,
    public readonly name: string,
    public readonly description: string | null,
    public readonly sku: string | null,
    public readonly costPrice: number | null,
    public readonly salePrice: number,
    public readonly stock: number,
    public readonly minStock: number,
    public readonly accumulatesPoints: boolean,
    public readonly isActive: boolean,
    createdAt?: Date,
    updatedAt?: Date,
  ) {
    super(id, createdAt, updatedAt);
  }

  static create(params: {
    id: string;
    tenantId: string;
    categoryId: number;
    name: string;
    description?: string | null;
    sku?: string | null;
    costPrice?: number | null;
    salePrice: number;
    stock?: number;
    minStock?: number;
    accumulatesPoints?: boolean;
    isActive?: boolean;
    createdAt?: Date;
    updatedAt?: Date;
  }): Product {
    return new Product(
      params.id,
      params.tenantId,
      params.categoryId,
      params.name,
      params.description ?? null,
      params.sku ?? null,
      params.costPrice ?? null,
      params.salePrice,
      params.stock ?? 0,
      params.minStock ?? 0,
      params.accumulatesPoints ?? true,
      params.isActive ?? true,
      params.createdAt,
      params.updatedAt,
    );
  }
}
