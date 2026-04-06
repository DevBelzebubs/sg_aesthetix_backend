import { UpdateServiceInputDto } from '../../dto/input/update-service.input';
import { ServiceOutputDto } from '../../dto/output/service.output';

export abstract class UpdateServiceInputPort {
  abstract execute(input: UpdateServiceInputDto): Promise<ServiceOutputDto>;
}
