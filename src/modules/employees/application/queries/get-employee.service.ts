import { Injectable, NotFoundException } from '@nestjs/common';
import { GetEmployeeInputDto } from '../dto/input/get-employee.input';
import { EmployeeOutputMapper } from '../dto/output/employee-output.mapper';
import { EmployeeOutputDto } from '../dto/output/employee.output';
import { GetEmployeeInputPort } from '../ports/input/get-employee.input-port';
import { EmployeeRepositoryOutputPort } from '../ports/output/employee.repository.output-port';

@Injectable()
export class GetEmployeeQueryService extends GetEmployeeInputPort {
  constructor(
    private readonly employeeRepository: EmployeeRepositoryOutputPort,
  ) {
    super();
  }

  async execute(input: GetEmployeeInputDto): Promise<EmployeeOutputDto> {
    const employee = await this.employeeRepository.findById(
      input.tenantId,
      input.id,
    );

    if (!employee) {
      throw new NotFoundException('Employee not found');
    }

    return EmployeeOutputMapper.toDto(employee);
  }
}
