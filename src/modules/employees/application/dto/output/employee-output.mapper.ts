import { Employee } from '../../../domain/employee.entity';
import { EmployeeOutputDto } from './employee.output';

export class EmployeeOutputMapper {
  static toDto(employee: Employee): EmployeeOutputDto {
    return {
      id: employee.id,
      tenantId: employee.tenantId,
      userId: employee.userId,
      firstName: employee.firstName,
      lastName: employee.lastName,
      phone: employee.phone,
      specialty: employee.specialty,
      description: employee.description,
      photoUrl: employee.photoUrl,
      isActive: employee.isActive,
      createdAt: employee.createdAt,
      updatedAt: employee.updatedAt,
    };
  }

  static toDtoList(employees: Employee[]): EmployeeOutputDto[] {
    return employees.map((employee) => this.toDto(employee));
  }
}
