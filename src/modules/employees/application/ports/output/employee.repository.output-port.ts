import { Employee } from '../../../domain/employee.entity';

export abstract class EmployeeRepositoryOutputPort {
  abstract create(employee: Employee): Promise<Employee>;
  abstract findAllByTenant(tenantId: string): Promise<Employee[]>;
  abstract findById(tenantId: string, id: string): Promise<Employee | null>;
  abstract update(employee: Employee): Promise<Employee>;
  abstract delete(tenantId: string, id: string): Promise<void>;
}
