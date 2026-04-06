import { GetEmployeeInputDto } from '../../dto/input/get-employee.input';
import { ListEmployeesInputDto } from '../../dto/input/list-employees.input';
import { EmployeeOutputDto } from '../../dto/output/employee.output';

export abstract class EmployeeQueryInputPort {
  abstract get(input: GetEmployeeInputDto): Promise<EmployeeOutputDto>;
  abstract list(input: ListEmployeesInputDto): Promise<EmployeeOutputDto[]>;
}
