import { Injectable } from '@nestjs/common';
import { Employee } from '../../domain/employee.entity';
import { CreateEmployeeInputDto } from '../dto/input/create-employee.input';
import { EmployeeOutputMapper } from '../dto/output/employee-output.mapper';
import { EmployeeOutputDto } from '../dto/output/employee.output';
import { CreateEmployeeInputPort } from '../ports/input/create-employee.input-port';
import { EmployeeRepositoryOutputPort } from '../ports/output/employee.repository.output-port';

@Injectable()
export class CreateEmployeeCommandService extends CreateEmployeeInputPort {
  constructor(
    private readonly employeeRepository: EmployeeRepositoryOutputPort,
  ) {
    super();
  }

  async execute(input: CreateEmployeeInputDto): Promise<EmployeeOutputDto> {
    const employee = Employee.create({
      id: input.id,
      tenantId: input.tenantId,
      userId: input.userId,
      firstName: input.firstName,
      lastName: input.lastName,
      phone: input.phone,
      specialty: input.specialty,
      description: input.description,
      photoUrl: input.photoUrl,
      isActive: input.isActive ?? true,
    });

    const createdEmployee = await this.employeeRepository.create(employee);
    return EmployeeOutputMapper.toDto(createdEmployee);
  }
}
