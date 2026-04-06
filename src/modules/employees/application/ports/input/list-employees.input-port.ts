import { ListEmployeesInputDto } from '../../dto/input/list-employees.input';
import { EmployeeOutputDto } from '../../dto/output/employee.output';

export abstract class ListEmployeesInputPort {
  abstract execute(input: ListEmployeesInputDto): Promise<EmployeeOutputDto[]>;
}
