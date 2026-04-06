import { BaseEntity } from '../../../shared/domain/base-entity';

export class SocialNetwork extends BaseEntity {
  private constructor(
    id: string,
    public readonly tenantId: string,
    public readonly type: string,
    public readonly displayName: string | null,
    public readonly url: string,
    public readonly username: string | null,
    public readonly order: number,
    public readonly isActive: boolean,
    createdAt?: Date,
    updatedAt?: Date,
  ) {
    super(id, createdAt, updatedAt);
  }

  static create(params: {
    id: string;
    tenantId: string;
    type: string;
    displayName?: string | null;
    url: string;
    username?: string | null;
    order?: number;
    isActive?: boolean;
    createdAt?: Date;
    updatedAt?: Date;
  }): SocialNetwork {
    return new SocialNetwork(
      params.id,
      params.tenantId,
      params.type,
      params.displayName ?? null,
      params.url,
      params.username ?? null,
      params.order ?? 0,
      params.isActive ?? true,
      params.createdAt,
      params.updatedAt,
    );
  }
}
