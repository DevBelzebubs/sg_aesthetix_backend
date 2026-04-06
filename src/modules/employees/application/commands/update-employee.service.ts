import { Injectable, NotFoundException } from '@nestjs/common';
import { Employee } from '../../domain/employee.entity';
import { UpdateEmployeeInputDto } from '../dto/input/update-employee.input';
import { EmployeeOutputMapper } from '../dto/output/employee-output.mapper';
import { EmployeeOutputDto } from '../dto/output/employee.output';
import { UpdateEmployeeInputPort } from '../ports/input/update-employee.input-port';
import { EmployeeRepositoryOutputPort } from '../ports/output/employee.repository.output-port';

@Injectable()
export class UpdateEmployeeCommandService extends UpdateEmployeeInputPort {
  constructor(
    private readonly employeeRepository: EmployeeRepositoryOutputPort,
  ) {
    super();
  }

  async execute(input: UpdateEmployeeInputDto): Promise<EmployeeOutputDto> {
    const currentEmployee = await this.employeeRepository.findById(
      input.tenantId,
      input.id,
    );

    if (!currentEmployee) {
      throw new NotFoundException('Employee not found');
    }

    const updatedEmployee = Employee.create({
      id: currentEmployee.id,
      tenantId: currentEmployee.tenantId,
      userId: input.userId,
      firstName: input.firstName,
      lastName: input.lastName,
      phone: input.phone,
      specialty: input.specialty,
      description: input.description,
      photoUrl: input.photoUrl,
      isActive: input.isActive,
      createdAt: currentEmployee.createdAt,
    });

    const employee = await this.employeeRepository.update(updatedEmployee);
    return EmployeeOutputMapper.toDto(employee);
  }
}
