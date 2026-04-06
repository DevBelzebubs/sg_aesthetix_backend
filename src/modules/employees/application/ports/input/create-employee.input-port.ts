import { CreateEmployeeInputDto } from '../../dto/input/create-employee.input';
import { EmployeeOutputDto } from '../../dto/output/employee.output';

export abstract class CreateEmployeeInputPort {
  abstract execute(input: CreateEmployeeInputDto): Promise<EmployeeOutputDto>;
}
