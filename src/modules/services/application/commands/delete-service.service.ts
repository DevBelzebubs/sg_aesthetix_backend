import { Injectable, NotFoundException } from '@nestjs/common';
import { DeleteServiceInputDto } from '../dto/input/delete-service.input';
import { DeleteServiceOutputDto } from '../dto/output/delete-service.output';
import { DeleteServiceInputPort } from '../ports/input/delete-service.input-port';
import { ServiceRepositoryOutputPort } from '../ports/output/service.repository.output-port';

@Injectable()
export class DeleteServiceCommandService extends DeleteServiceInputPort {
  constructor(private readonly serviceRepository: ServiceRepositoryOutputPort) {
    super();
  }

  async execute(input: DeleteServiceInputDto): Promise<DeleteServiceOutputDto> {
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
