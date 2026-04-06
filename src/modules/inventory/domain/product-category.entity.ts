export class ProductCategory {
  private constructor(
    public readonly id: number,
    public readonly name: string,
    public readonly description: string | null,
    public readonly sortOrder: number,
  ) {}

  static create(params: {
    id: number;
    name: string;
    description?: string | null;
    sortOrder?: number;
  }): ProductCategory {
    return new ProductCategory(
      params.id,
      params.name,
      params.description ?? null,
      params.sortOrder ?? 0,
    );
  }
}
