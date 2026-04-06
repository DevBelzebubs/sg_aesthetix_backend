import { GetServiceInputDto } from '../../dto/input/get-service.input';
import { ServiceOutputDto } from '../../dto/output/service.output';

export abstract class GetServiceInputPort {
  abstract execute(input: GetServiceInputDto): Promise<ServiceOutputDto>;
}
