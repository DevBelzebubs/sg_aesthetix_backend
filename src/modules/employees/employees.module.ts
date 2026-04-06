import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmployeeAbsenceTypeOrmEntity } from './infrastructure/employee-absence.typeorm-entity';
import { EmployeeScheduleTypeOrmEntity } from './infrastructure/employee-schedule.typeorm-entity';
import { EmployeeServiceTypeOrmEntity } from './infrastructure/employee-service.typeorm-entity';
import { EmployeeTypeOrmEntity } from './infrastructure/employee.typeorm-entity';
import { EmployeesController } from './infrastructure/controller/employees.controller';
import { EmployeeTypeOrmRepository } from './infrastructure/repository/employee.typeorm-repository';
import { EmployeeRepositoryOutputPort } from './application/ports/output/employee.repository.output-port';
import { EmployeeCommandService } from './application/commands/employee.command.service';
import { EmployeeQueryService } from './application/queries/employee.query.service';
import { EmployeeCommandInputPort } from './application/ports/input/employee.command.input-port';
import { EmployeeQueryInputPort } from './application/ports/input/employee.query.input-port';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      EmployeeTypeOrmEntity,
      EmployeeScheduleTypeOrmEntity,
      EmployeeAbsenceTypeOrmEntity,
      EmployeeServiceTypeOrmEntity,
    ]),
  ],
  controllers: [EmployeesController],
  providers: [
    {
      provide: EmployeeRepositoryOutputPort,
      useClass: EmployeeTypeOrmRepository,
    },
    {
      provide: EmployeeCommandInputPort,
      useClass: EmployeeCommandService,
    },
    {
      provide: EmployeeQueryInputPort,
      useClass: EmployeeQueryService,
    },
    {
      provide: EmployeeTypeOrmRepository,
      useExisting: EmployeeRepositoryOutputPort,
    },
  ],
  exports: [TypeOrmModule, EmployeeRepositoryOutputPort],
})
export class EmployeesModule {}
