import { Injectable, NotFoundException } from '@nestjs/common';
import { Employee } from '../../domain/employee.entity';
import { CreateEmployeeInputDto } from '../dto/input/create-employee.input';
import { UpdateEmployeeInputDto } from '../dto/input/update-employee.input';
import { DeleteEmployeeInputDto } from '../dto/input/delete-employee.input';
import { EmployeeOutputDto } from '../dto/output/employee.output';
import { DeleteEmployeeOutputDto } from '../dto/output/delete-employee.output';
import { EmployeeCommandInputPort } from '../ports/input/employee.command.input-port';
import { EmployeeOutputMapper } from '../dto/output/employee-output.mapper';
import { EmployeeRepositoryOutputPort } from '../ports/output/employee.repository.output-port';

@Injectable()
export class EmployeeCommandService extends EmployeeCommandInputPort {
  constructor(
    private readonly employeeRepository: EmployeeRepositoryOutputPort,
  ) {
    super();
  }

  async create(input: CreateEmployeeInputDto): Promise<EmployeeOutputDto> {
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

  async update(input: UpdateEmployeeInputDto): Promise<EmployeeOutputDto> {
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

  async delete(
    input: DeleteEmployeeInputDto,
  ): Promise<DeleteEmployeeOutputDto> {
    const currentEmployee = await this.employeeRepository.findById(
      input.tenantId,
      input.id,
    );

    if (!currentEmployee) {
      throw new NotFoundException('Employee not found');
    }

    await this.employeeRepository.delete(input.tenantId, input.id);

    return {
      id: input.id,
      deleted: true,
    };
  }
}
