import { Injectable, NotFoundException } from '@nestjs/common';
import { Service } from '../../domain/service.entity';
import { CreateServiceInputDto } from '../dto/input/create-service.input';
import { UpdateServiceInputDto } from '../dto/input/update-service.input';
import { DeleteServiceInputDto } from '../dto/input/delete-service.input';
import { ServiceOutputDto } from '../dto/output/service.output';
import { DeleteServiceOutputDto } from '../dto/output/delete-service.output';
import { ServiceCommandInputPort } from '../ports/input/service.command.input-port';
import { ServiceOutputMapper } from '../dto/output/service-output.mapper';
import { ServiceRepositoryOutputPort } from '../ports/output/service.repository.output-port';

@Injectable()
export class ServiceCommandService extends ServiceCommandInputPort {
  constructor(private readonly serviceRepository: ServiceRepositoryOutputPort) {
    super();
  }

  async create(input: CreateServiceInputDto): Promise<ServiceOutputDto> {
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

  async update(input: UpdateServiceInputDto): Promise<ServiceOutputDto> {
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

  async delete(input: DeleteServiceInputDto): Promise<DeleteServiceOutputDto> {
    const currentService = await this.serviceRepository.findById(
      input.tenantId,
      input.id,
    );

    if (!currentService) {
      throw new NotFoundException('Service not found');
    }

    await this.serviceRepository.delete(input.tenantId, input.id);

    return {
      id: input.id,
      deleted: true,
    };
  }
}
