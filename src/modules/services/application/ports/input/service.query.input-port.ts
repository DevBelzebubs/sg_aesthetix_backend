import { GetServiceInputDto } from '../../dto/input/get-service.input';
import { ListServicesInputDto } from '../../dto/input/list-services.input';
import { ServiceOutputDto } from '../../dto/output/service.output';

export abstract class ServiceQueryInputPort {
  abstract get(input: GetServiceInputDto): Promise<ServiceOutputDto>;
  abstract list(input: ListServicesInputDto): Promise<ServiceOutputDto[]>;
}
