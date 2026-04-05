export class ServiceCategory {
  private constructor(
    public readonly id: string,
    public readonly tenantId: string,
    public readonly name: string,
    public readonly sortOrder: number,
  ) {}

  static create(params: {
    id: string;
    tenantId: string;
    name: string;
    sortOrder?: number;
  }): ServiceCategory {
    return new ServiceCategory(
      params.id,
      params.tenantId,
      params.name,
      params.sortOrder ?? 0,
    );
  }
}
