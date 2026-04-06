import { DeleteEmployeeInputDto } from '../../dto/input/delete-employee.input';
import { DeleteEmployeeOutputDto } from '../../dto/output/delete-employee.output';

export abstract class DeleteEmployeeInputPort {
  abstract execute(input: DeleteEmployeeInputDto): Promise<DeleteEmployeeOutputDto>;
}
