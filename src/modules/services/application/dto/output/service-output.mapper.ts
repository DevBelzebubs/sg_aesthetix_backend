import { Service } from '../../../domain/service.entity';
import { ServiceOutputDto } from './service.output';

export class ServiceOutputMapper {
  static toDto(service: Service): ServiceOutputDto {
    return {
      id: service.id,
      tenantId: service.tenantId,
      categoryId: service.categoryId,
      name: service.name,
      description: service.description,
      price: service.price,
      durationMin: service.durationMin,
      accumulatesPoints: service.accumulatesPoints,
      isActive: service.isActive,
      createdAt: service.createdAt,
      updatedAt: service.updatedAt,
    };
  }

  static toDtoList(services: Service[]): ServiceOutputDto[] {
    return services.map((service) => this.toDto(service));
  }
}
