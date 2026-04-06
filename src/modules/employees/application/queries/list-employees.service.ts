import { Injectable } from '@nestjs/common';
import { ListEmployeesInputDto } from '../dto/input/list-employees.input';
import { EmployeeOutputMapper } from '../dto/output/employee-output.mapper';
import { EmployeeOutputDto } from '../dto/output/employee.output';
import { ListEmployeesInputPort } from '../ports/input/list-employees.input-port';
import { EmployeeRepositoryOutputPort } from '../ports/output/employee.repository.output-port';

@Injectable()
export class ListEmployeesQueryService extends ListEmployeesInputPort {
  constructor(
    private readonly employeeRepository: EmployeeRepositoryOutputPort,
  ) {
    super();
  }

  async execute(
    input: ListEmployeesInputDto,
  ): Promise<EmployeeOutputDto[]> {
    const employees = await this.employeeRepository.findAllByTenant(
      input.tenantId,
    );

    return EmployeeOutputMapper.toDtoList(employees);
  }
}
