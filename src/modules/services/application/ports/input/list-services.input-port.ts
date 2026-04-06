import { ListServicesInputDto } from '../../dto/input/list-services.input';
import { ServiceOutputDto } from '../../dto/output/service.output';

export abstract class ListServicesInputPort {
  abstract execute(input: ListServicesInputDto): Promise<ServiceOutputDto[]>;
}
