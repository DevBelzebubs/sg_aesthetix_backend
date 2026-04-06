import { GetEmployeeInputDto } from '../../dto/input/get-employee.input';
import { EmployeeOutputDto } from '../../dto/output/employee.output';

export abstract class GetEmployeeInputPort {
  abstract execute(input: GetEmployeeInputDto): Promise<EmployeeOutputDto>;
}
