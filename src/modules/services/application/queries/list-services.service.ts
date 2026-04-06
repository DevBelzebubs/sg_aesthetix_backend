import { Injectable } from '@nestjs/common';
import { ListServicesInputDto } from '../dto/input/list-services.input';
import { ServiceOutputMapper } from '../dto/output/service-output.mapper';
import { ServiceOutputDto } from '../dto/output/service.output';
import { ListServicesInputPort } from '../ports/input/list-services.input-port';
import { ServiceRepositoryOutputPort } from '../ports/output/service.repository.output-port';

@Injectable()
export class ListServicesQueryService extends ListServicesInputPort {
  constructor(private readonly serviceRepository: ServiceRepositoryOutputPort) {
    super();
  }

  async execute(input: ListServicesInputDto): Promise<ServiceOutputDto[]> {
    const services = await this.serviceRepository.findAllByTenant(
      input.tenantId,
    );

    return ServiceOutputMapper.toDtoList(services);
  }
}
