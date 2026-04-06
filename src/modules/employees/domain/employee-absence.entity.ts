import { BaseEntity } from '../../../shared/domain/base-entity';

export class EmployeeAbsence extends BaseEntity {
  private constructor(
    id: string,
    public readonly employeeId: string,
    public readonly startDate: string,
    public readonly endDate: string,
    public readonly reason: string | null,
    createdAt?: Date,
    updatedAt?: Date,
  ) {
    super(id, createdAt, updatedAt);
  }

  static create(params: {
    id: string;
    employeeId: string;
    startDate: string;
    endDate: string;
    reason?: string | null;
    createdAt?: Date;
    updatedAt?: Date;
  }): EmployeeAbsence {
    return new EmployeeAbsence(
      params.id,
      params.employeeId,
      params.startDate,
      params.endDate,
      params.reason ?? null,
      params.createdAt,
      params.updatedAt,
    );
  }
}
