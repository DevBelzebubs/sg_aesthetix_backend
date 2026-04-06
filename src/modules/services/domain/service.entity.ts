import { BaseEntity } from '../../../shared/domain/base-entity';

export class Service extends BaseEntity {
  private constructor(
    id: string,
    public readonly tenantId: string,
    public readonly categoryId: number,
    public readonly name: string,
    public readonly description: string | null,
    public readonly price: number,
    public readonly durationMin: number,
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
    price: number;
    durationMin: number;
    accumulatesPoints?: boolean;
    isActive?: boolean;
    createdAt?: Date;
    updatedAt?: Date;
  }): Service {
    return new Service(
      params.id,
      params.tenantId,
      params.categoryId,
      params.name,
      params.description ?? null,
      params.price,
      params.durationMin,
      params.accumulatesPoints ?? true,
      params.isActive ?? true,
      params.createdAt,
      params.updatedAt,
    );
  }
}
