export class EmployeeService {
  private constructor(
    public readonly employeeId: string,
    public readonly serviceId: string,
  ) {}

  static create(params: {
    employeeId: string;
    serviceId: string;
  }): EmployeeService {
    return new EmployeeService(params.employeeId, params.serviceId);
  }
}
