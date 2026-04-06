import { CreateServiceInputDto } from '../../dto/input/create-service.input';
import { ServiceOutputDto } from '../../dto/output/service.output';

export abstract class CreateServiceInputPort {
  abstract execute(input: CreateServiceInputDto): Promise<ServiceOutputDto>;
}
