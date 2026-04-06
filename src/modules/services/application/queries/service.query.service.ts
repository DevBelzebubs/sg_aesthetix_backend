import { Injectable, NotFoundException } from '@nestjs/common';
import { GetServiceInputDto } from '../dto/input/get-service.input';
import { ListServicesInputDto } from '../dto/input/list-services.input';
import { ServiceOutputDto } from '../dto/output/service.output';
import { ServiceOutputMapper } from '../dto/output/service-output.mapper';
import { ServiceQueryInputPort } from '../ports/input/service.query.input-port';
import { ServiceRepositoryOutputPort } from '../ports/output/service.repository.output-port';

@Injectable()
export class ServiceQueryService extends ServiceQueryInputPort {
  constructor(private readonly serviceRepository: ServiceRepositoryOutputPort) {
    super();
  }

  async get(input: GetServiceInputDto): Promise<ServiceOutputDto> {
    const service = await this.serviceRepository.findById(
      input.tenantId,
      input.id,
    );

    if (!service) {
      throw new NotFoundException('Service not found');
    }

    return ServiceOutputMapper.toDto(service);
  }

  async list(input: ListServicesInputDto): Promise<ServiceOutputDto[]> {
    const services = await this.serviceRepository.findAllByTenant(
      input.tenantId,
    );

    return ServiceOutputMapper.toDtoList(services);
  }
}
