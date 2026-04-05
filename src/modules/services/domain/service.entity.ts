import { BaseEntity } from '../../../shared/domain/base-entity';

export enum ServiceType {
  STANDARD = 'STANDARD',
  PREMIUM = 'PREMIUM',
  CLASSIC = 'CLASSIC',
  COMBO = 'COMBO',
  KIDS = 'KIDS',
}

export class Service extends BaseEntity {
  private constructor(
    id: string,
    public readonly tenantId: string,
    public readonly categoryId: string,
    public readonly name: string,
    public readonly description: string,
    public readonly type: ServiceType,
    public readonly durationMin: number,
    public readonly price: number,
    public readonly imageUrl: string,
    public readonly isActive: boolean,
    public readonly sortOrder: number,
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
    description: string;
    type: ServiceType;
    durationMin: number;
    price: number;
    imageUrl: string;
    isActive?: boolean;
    sortOrder?: number;
    createdAt?: Date;
    updatedAt?: Date;
  }): Service {
    return new Service(
      params.id,
      params.tenantId,
      params.categoryId,
      params.name,
      params.description,
      params.type,
      params.durationMin,
      params.price,
      params.imageUrl,
      params.isActive ?? true,
      params.sortOrder ?? 0,
      params.createdAt,
      params.updatedAt,
    );
  }
}
