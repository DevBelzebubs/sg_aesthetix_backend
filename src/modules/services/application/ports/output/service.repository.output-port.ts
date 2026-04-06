import { Service } from '../../../domain/service.entity';

export abstract class ServiceRepositoryOutputPort {
  abstract create(service: Service): Promise<Service>;
  abstract findAllByTenant(tenantId: string): Promise<Service[]>;
  abstract findById(tenantId: string, id: string): Promise<Service | null>;
  abstract update(service: Service): Promise<Service>;
  abstract delete(tenantId: string, id: string): Promise<void>;
}
