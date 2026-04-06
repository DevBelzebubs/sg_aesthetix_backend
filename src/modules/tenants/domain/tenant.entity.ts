import { BaseEntity } from '../../../shared/domain/base-entity';

export class Tenant extends BaseEntity {
  private constructor(
    id: string,
    public readonly commercialName: string,
    public readonly slug: string,
    public readonly ruc: string | null,
    public readonly logoUrl: string | null,
    public readonly phone: string | null,
    public readonly email: string | null,
    public readonly address: string | null,
    public readonly coverUrl: string | null,
    createdAt?: Date,
    updatedAt?: Date,
  ) {
    super(id, createdAt, updatedAt);
  }

  static create(params: {
    id: string;
    commercialName: string;
    slug: string;
    ruc?: string | null;
    logoUrl?: string | null;
    phone?: string | null;
    email?: string | null;
    address?: string | null;
    coverUrl?: string | null;
    createdAt?: Date;
    updatedAt?: Date;
  }): Tenant {
    return new Tenant(
      params.id,
      params.commercialName,
      params.slug,
      params.ruc ?? null,
      params.logoUrl ?? null,
      params.phone ?? null,
      params.email ?? null,
      params.address ?? null,
      params.coverUrl ?? null,
      params.createdAt,
      params.updatedAt,
    );
  }
}
