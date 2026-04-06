import { Injectable, NotFoundException } from '@nestjs/common';
import { GetServiceInputDto } from '../dto/input/get-service.input';
import { ServiceOutputMapper } from '../dto/output/service-output.mapper';
import { ServiceOutputDto } from '../dto/output/service.output';
import { GetServiceInputPort } from '../ports/input/get-service.input-port';
import { ServiceRepositoryOutputPort } from '../ports/output/service.repository.output-port';

@Injectable()
export class GetServiceQueryService extends GetServiceInputPort {
  constructor(private readonly serviceRepository: ServiceRepositoryOutputPort) {
    super();
  }

  async execute(input: GetServiceInputDto): Promise<ServiceOutputDto> {
    const service = await this.serviceRepository.findById(
      input.tenantId,
      input.id,
    );

    if (!service) {
      throw new NotFoundException('Service not found');
    }

    return ServiceOutputMapper.toDto(service);
  }
}
