import { Injectable, NotFoundException } from '@nestjs/common';
import { GetEmployeeInputDto } from '../dto/input/get-employee.input';
import { ListEmployeesInputDto } from '../dto/input/list-employees.input';
import { EmployeeOutputDto } from '../dto/output/employee.output';
import { EmployeeOutputMapper } from '../dto/output/employee-output.mapper';
import { EmployeeQueryInputPort } from '../ports/input/employee.query.input-port';
import { EmployeeRepositoryOutputPort } from '../ports/output/employee.repository.output-port';

@Injectable()
export class EmployeeQueryService extends EmployeeQueryInputPort {
  constructor(
    private readonly employeeRepository: EmployeeRepositoryOutputPort,
  ) {
    super();
  }

  async get(input: GetEmployeeInputDto): Promise<EmployeeOutputDto> {
    const employee = await this.employeeRepository.findById(
      input.tenantId,
      input.id,
    );

    if (!employee) {
      throw new NotFoundException('Employee not found');
    }

    return EmployeeOutputMapper.toDto(employee);
  }

  async list(input: ListEmployeesInputDto): Promise<EmployeeOutputDto[]> {
    const employees = await this.employeeRepository.findAllByTenant(
      input.tenantId,
    );

    return EmployeeOutputMapper.toDtoList(employees);
  }
}
