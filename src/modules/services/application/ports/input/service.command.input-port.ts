import { CreateServiceInputDto } from '../../dto/input/create-service.input';
import { DeleteServiceInputDto } from '../../dto/input/delete-service.input';
import { UpdateServiceInputDto } from '../../dto/input/update-service.input';
import { DeleteServiceOutputDto } from '../../dto/output/delete-service.output';
import { ServiceOutputDto } from '../../dto/output/service.output';

export abstract class ServiceCommandInputPort {
  abstract create(input: CreateServiceInputDto): Promise<ServiceOutputDto>;
  abstract update(input: UpdateServiceInputDto): Promise<ServiceOutputDto>;
  abstract delete(input: DeleteServiceInputDto): Promise<DeleteServiceOutputDto>;
}
