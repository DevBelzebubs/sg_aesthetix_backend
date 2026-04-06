import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ServiceRepositoryOutputPort } from '../../application/ports/output/service.repository.output-port';
import { Service } from '../../domain/service.entity';
import { ServiceTypeOrmEntity } from '../service.typeorm-entity';

@Injectable()
export class ServiceTypeOrmRepository extends ServiceRepositoryOutputPort {
  constructor(
    @InjectRepository(ServiceTypeOrmEntity)
    private readonly serviceRepository: Repository<ServiceTypeOrmEntity>,
  ) {
    super();
  }

  async create(service: Service): Promise<Service> {
    const entity = this.toTypeOrmEntity(service);
    const createdService = await this.serviceRepository.save(entity);
    return this.toDomainEntity(createdService);
  }

  async findAllByTenant(tenantId: string): Promise<Service[]> {
    const services = await this.serviceRepository.find({
      where: { tenantId },
      order: { name: 'ASC' },
    });

    return services.map((service) => this.toDomainEntity(service));
  }

  async findById(tenantId: string, id: string): Promise<Service | null> {
    const service = await this.serviceRepository.findOne({
      where: { id, tenantId },
    });

    return service ? this.toDomainEntity(service) : null;
  }

  async update(service: Service): Promise<Service> {
    const entity = this.toTypeOrmEntity(service);
    const updatedService = await this.serviceRepository.save(entity);
    return this.toDomainEntity(updatedService);
  }

  async delete(tenantId: string, id: string): Promise<void> {
    await this.serviceRepository.delete({ id, tenantId });
  }

  private toDomainEntity(entity: ServiceTypeOrmEntity): Service {
    return Service.create({
      id: entity.id,
      tenantId: entity.tenantId,
      categoryId: entity.categoryId,
      name: entity.name,
      description: entity.description,
      price: Number(entity.price),
      durationMin: entity.durationMin,
      accumulatesPoints: entity.accumulatesPoints,
      isActive: entity.isActive,
      createdAt: entity.createdAt,
      updatedAt: entity.updatedAt,
    });
  }

  private toTypeOrmEntity(service: Service): Partial<ServiceTypeOrmEntity> {
    return {
      id: service.id,
      tenantId: service.tenantId,
      categoryId: service.categoryId,
      name: service.name,
      description: service.description,
      price: service.price.toFixed(2),
      durationMin: service.durationMin,
      accumulatesPoints: service.accumulatesPoints,
      isActive: service.isActive,
      createdAt: service.createdAt,
      updatedAt: service.updatedAt,
    };
  }
}
