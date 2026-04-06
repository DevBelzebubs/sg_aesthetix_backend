export class Role {
  private constructor(
    public readonly id: number,
    public readonly name: string,
    public readonly description: string | null,
    public readonly createdAt: Date,
  ) {}

  static create(params: {
    id: number;
    name: string;
    description?: string | null;
    createdAt?: Date;
  }): Role {
    return new Role(
      params.id,
      params.name,
      params.description ?? null,
      params.createdAt ?? new Date(),
    );
  }
}
