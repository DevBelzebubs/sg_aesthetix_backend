export class EmployeeSchedule {
  private constructor(
    public readonly id: string,
    public readonly employeeId: string,
    public readonly dayOfWeek: number,
    public readonly startTime: string,
    public readonly endTime: string,
    public readonly validFrom: string | null,
    public readonly validUntil: string | null,
    public readonly isActive: boolean,
    public readonly createdAt: Date,
    public readonly updatedAt: Date,
  ) {}

  static create(params: {
    id: string;
    employeeId: string;
    dayOfWeek: number;
    startTime: string;
    endTime: string;
    validFrom?: string | null;
    validUntil?: string | null;
    isActive?: boolean;
    createdAt?: Date;
    updatedAt?: Date;
  }): EmployeeSchedule {
    return new EmployeeSchedule(
      params.id,
      params.employeeId,
      params.dayOfWeek,
      params.startTime,
      params.endTime,
      params.validFrom ?? null,
      params.validUntil ?? null,
      params.isActive ?? true,
      params.createdAt ?? new Date(),
      params.updatedAt ?? new Date(),
    );
  }
}
