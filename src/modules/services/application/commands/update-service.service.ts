import { Injectable, NotFoundException } from '@nestjs/common';
import { Service } from '../../domain/service.entity';
import { UpdateServiceInputDto } from '../dto/input/update-service.input';
import { ServiceOutputMapper } from '../dto/output/service-output.mapper';
import { ServiceOutputDto } from '../dto/output/service.output';
import { UpdateServiceInputPort } from '../ports/input/update-service.input-port';
import { ServiceRepositoryOutputPort } from '../ports/output/service.repository.output-port';

@Injectable()
export class UpdateServiceCommandService extends UpdateServiceInputPort {
  constructor(private readonly serviceRepository: ServiceRepositoryOutputPort) {
    super();
  }

  async execute(input: UpdateServiceInputDto): Promise<ServiceOutputDto> {
    const currentService = await this.serviceRepository.findById(
      input.tenantId,
      input.id,
    );

    if (!currentService) {
      throw new NotFoundException('Service not found');
    }

    const updatedService = Service.create({
      id: currentService.id,
      tenantId: currentService.tenantId,
      categoryId: input.categoryId,
      name: input.name,
      description: input.description,
      price: input.price,
      durationMin: input.durationMin,
      accumulatesPoints: input.accumulatesPoints,
      isActive: input.isActive,
      createdAt: currentService.createdAt,
    });

    const service = await this.serviceRepository.update(updatedService);
    return ServiceOutputMapper.toDto(service);
  }
}
