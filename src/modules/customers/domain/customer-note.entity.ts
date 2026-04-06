export class CustomerNote {
  private constructor(
    public readonly id: string,
    public readonly customerId: string,
    public readonly employeeId: string,
    public readonly content: string,
    public readonly createdAt: Date,
  ) {}

  static create(params: {
    id: string;
    customerId: string;
    employeeId: string;
    content: string;
    createdAt?: Date;
  }): CustomerNote {
    return new CustomerNote(
      params.id,
      params.customerId,
      params.employeeId,
      params.content,
      params.createdAt ?? new Date(),
    );
  }
}
