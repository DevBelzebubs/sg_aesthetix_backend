export class GalleryStyleCut {
  private constructor(
    public readonly id: string,
    public readonly tenantId: string,
    public readonly title: string,
    public readonly imageUrl: string,
    public readonly tags: string[],
    public readonly isAiGen: boolean,
    public readonly sortOrder: number,
    public readonly createdAt: Date,
  ) {}

  static create(params: {
    id: string;
    tenantId: string;
    title: string;
    imageUrl: string;
    tags: string[];
    isAiGen?: boolean;
    sortOrder?: number;
    createdAt?: Date;
  }): GalleryStyleCut {
    return new GalleryStyleCut(
      params.id,
      params.tenantId,
      params.title,
      params.imageUrl,
      params.tags,
      params.isAiGen ?? false,
      params.sortOrder ?? 0,
      params.createdAt ?? new Date(),
    );
  }
}
