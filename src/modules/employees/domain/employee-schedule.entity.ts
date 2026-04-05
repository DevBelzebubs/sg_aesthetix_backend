export class EmployeeSchedule {
  private constructor(
    public readonly id: string,
    public readonly tenantId: string,
    public readonly employeeId: string,
    public readonly dayOfWeek: number,
    public readonly startTime: string,
    public readonly endTime: string,
    public readonly isWorking: boolean,
  ) {}

  static create(params: {
    id: string;
    tenantId: string;
    employeeId: string;
    dayOfWeek: number;
    startTime: string;
    endTime: string;
    isWorking?: boolean;
  }): EmployeeSchedule {
    return new EmployeeSchedule(
      params.id,
      params.tenantId,
      params.employeeId,
      params.dayOfWeek,
      params.startTime,
      params.endTime,
      params.isWorking ?? true,
    );
  }
}
