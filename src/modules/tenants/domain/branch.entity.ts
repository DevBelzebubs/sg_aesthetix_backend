import { BaseEntity } from '../../../shared/domain/base-entity';

export class Branch extends BaseEntity {
  private constructor(
    id: string,
    public readonly tenantId: string,
    public readonly name: string,
    public readonly address: string,
    public readonly phone: string,
    public readonly isActive: boolean,
    createdAt?: Date,
    updatedAt?: Date,
  ) {
    super(id, createdAt, updatedAt);
  }

  static create(params: {
    id: string;
    tenantId: string;
    name: string;
    address: string;
    phone: string;
    isActive?: boolean;
    createdAt?: Date;
    updatedAt?: Date;
  }): Branch {
    return new Branch(
      params.id,
      params.tenantId,
      params.name,
      params.address,
      params.phone,
      params.isActive ?? true,
      params.createdAt,
      params.updatedAt,
    );
  }
}
