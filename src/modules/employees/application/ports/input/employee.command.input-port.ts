import { CreateEmployeeInputDto } from '../../dto/input/create-employee.input';
import { DeleteEmployeeInputDto } from '../../dto/input/delete-employee.input';
import { UpdateEmployeeInputDto } from '../../dto/input/update-employee.input';
import { DeleteEmployeeOutputDto } from '../../dto/output/delete-employee.output';
import { EmployeeOutputDto } from '../../dto/output/employee.output';

export abstract class EmployeeCommandInputPort {
  abstract create(input: CreateEmployeeInputDto): Promise<EmployeeOutputDto>;
  abstract update(input: UpdateEmployeeInputDto): Promise<EmployeeOutputDto>;
  abstract delete(input: DeleteEmployeeInputDto): Promise<DeleteEmployeeOutputDto>;
}
