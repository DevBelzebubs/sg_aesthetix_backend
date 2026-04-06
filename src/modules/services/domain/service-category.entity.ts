export class ServiceCategory {
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
  }): ServiceCategory {
    return new ServiceCategory(
      params.id,
      params.name,
      params.description ?? null,
      params.sortOrder ?? 0,
    );
  }
}
