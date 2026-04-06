import { UpdateEmployeeInputDto } from '../../dto/input/update-employee.input';
import { EmployeeOutputDto } from '../../dto/output/employee.output';

export abstract class UpdateEmployeeInputPort {
  abstract execute(input: UpdateEmployeeInputDto): Promise<EmployeeOutputDto>;
}
