import { DeleteServiceInputDto } from '../../dto/input/delete-service.input';
import { DeleteServiceOutputDto } from '../../dto/output/delete-service.output';

export abstract class DeleteServiceInputPort {
  abstract execute(input: DeleteServiceInputDto): Promise<DeleteServiceOutputDto>;
}
