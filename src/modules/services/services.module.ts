import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServiceCategoryTypeOrmEntity } from './infrastructure/service-category.typeorm-entity';
import { ServiceTypeOrmEntity } from './infrastructure/service.typeorm-entity';
import { ServicesController } from './infrastructure/controller/services.controller';
import { ServiceTypeOrmRepository } from './infrastructure/repository/service.typeorm-repository';
import { ServiceRepositoryOutputPort } from './application/ports/output/service.repository.output-port';
import { ServiceCommandService } from './application/commands/service.command.service';
import { ServiceQueryService } from './application/queries/service.query.service';
import { ServiceCommandInputPort } from './application/ports/input/service.command.input-port';
import { ServiceQueryInputPort } from './application/ports/input/service.query.input-port';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      ServiceCategoryTypeOrmEntity,
      ServiceTypeOrmEntity,
    ]),
  ],
  controllers: [ServicesController],
  providers: [
    {
      provide: ServiceRepositoryOutputPort,
      useClass: ServiceTypeOrmRepository,
    },
    {
      provide: ServiceCommandInputPort,
      useClass: ServiceCommandService,
    },
    {
      provide: ServiceQueryInputPort,
      useClass: ServiceQueryService,
    },
    {
      provide: ServiceTypeOrmRepository,
      useExisting: ServiceRepositoryOutputPort,
    },
  ],
  exports: [TypeOrmModule, ServiceRepositoryOutputPort],
})
export class ServicesModule {}
