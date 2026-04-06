export class EmployeeService {
  private constructor(
    public readonly employeeId: string,
    public readonly serviceId: string,
    public readonly createdAt: Date,
  ) {}

  static create(params: {
    employeeId: string;
    serviceId: string;
    createdAt?: Date;
  }): EmployeeService {
    return new EmployeeService(
      params.employeeId,
      params.serviceId,
      params.createdAt ?? new Date(),
    );
  }
}
