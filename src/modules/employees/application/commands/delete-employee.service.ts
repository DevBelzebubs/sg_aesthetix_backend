import { Injectable, NotFoundException } from '@nestjs/common';
import { DeleteEmployeeInputDto } from '../dto/input/delete-employee.input';
import { DeleteEmployeeOutputDto } from '../dto/output/delete-employee.output';
import { DeleteEmployeeInputPort } from '../ports/input/delete-employee.input-port';
import { EmployeeRepositoryOutputPort } from '../ports/output/employee.repository.output-port';

@Injectable()
export class DeleteEmployeeCommandService extends DeleteEmployeeInputPort {
  constructor(
    private readonly employeeRepository: EmployeeRepositoryOutputPort,
  ) {
    super();
  }

  async execute(
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
