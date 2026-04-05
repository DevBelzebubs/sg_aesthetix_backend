import { BaseEntity } from '../../../shared/domain/base-entity';

export class Product extends BaseEntity {
  private constructor(
    id: string,
    public readonly tenantId: string,
    public readonly categoryId: string,
    public readonly name: string,
    public readonly unit: string,
    public readonly stock: number,
    public readonly minStock: number,
    public readonly costPrice: number,
    public readonly salePrice: number | null,
    public readonly isActive: boolean,
    createdAt?: Date,
    updatedAt?: Date,
  ) {
    super(id, createdAt, updatedAt);
  }

  static create(params: {
    id: string;
    tenantId: string;
    categoryId: string;
    name: string;
    unit: string;
    stock?: number;
    minStock?: number;
    costPrice: number;
    salePrice?: number | null;
    isActive?: boolean;
    createdAt?: Date;
    updatedAt?: Date;
  }): Product {
    return new Product(
      params.id,
      params.tenantId,
      params.categoryId,
      params.name,
      params.unit,
      params.stock ?? 0,
      params.minStock ?? 0,
      params.costPrice,
      params.salePrice ?? null,
      params.isActive ?? true,
      params.createdAt,
      params.updatedAt,
    );
  }
}
