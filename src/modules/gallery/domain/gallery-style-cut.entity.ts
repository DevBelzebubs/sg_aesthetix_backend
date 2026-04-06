export class GalleryStyleCut {
  private constructor(
    public readonly id: string,
    public readonly tenantId: string,
    public readonly serviceId: string | null,
    public readonly employeeId: string | null,
    public readonly title: string | null,
    public readonly imageUrl: string,
    public readonly description: string | null,
    public readonly sortOrder: number,
    public readonly isActive: boolean,
    public readonly createdAt: Date,
    public readonly updatedAt: Date,
  ) {}

  static create(params: {
    id: string;
    tenantId: string;
    serviceId?: string | null;
    employeeId?: string | null;
    title?: string | null;
    imageUrl: string;
    description?: string | null;
    sortOrder?: number;
    isActive?: boolean;
    createdAt?: Date;
    updatedAt?: Date;
  }): GalleryStyleCut {
    return new GalleryStyleCut(
      params.id,
      params.tenantId,
      params.serviceId ?? null,
      params.employeeId ?? null,
      params.title ?? null,
      params.imageUrl,
      params.description ?? null,
      params.sortOrder ?? 0,
      params.isActive ?? true,
      params.createdAt ?? new Date(),
      params.updatedAt ?? new Date(),
    );
  }
}
