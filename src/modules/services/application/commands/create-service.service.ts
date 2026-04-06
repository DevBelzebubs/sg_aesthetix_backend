import { Injectable } from '@nestjs/common';
import { Service } from '../../domain/service.entity';
import { CreateServiceInputDto } from '../dto/input/create-service.input';
import { ServiceOutputMapper } from '../dto/output/service-output.mapper';
import { ServiceOutputDto } from '../dto/output/service.output';
import { CreateServiceInputPort } from '../ports/input/create-service.input-port';
import { ServiceRepositoryOutputPort } from '../ports/output/service.repository.output-port';

@Injectable()
export class CreateServiceCommandService extends CreateServiceInputPort {
  constructor(private readonly serviceRepository: ServiceRepositoryOutputPort) {
    super();
  }

  async execute(input: CreateServiceInputDto): Promise<ServiceOutputDto> {
    const service = Service.create({
      id: input.id,
      tenantId: input.tenantId,
      categoryId: input.categoryId,
      name: input.name,
      description: input.description,
      price: input.price,
      durationMin: input.durationMin,
      accumulatesPoints: input.accumulatesPoints ?? true,
      isActive: input.isActive ?? true,
    });

    const createdService = await this.serviceRepository.create(service);
    return ServiceOutputMapper.toDto(createdService);
  }
}
