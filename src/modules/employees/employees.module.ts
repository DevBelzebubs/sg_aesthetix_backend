import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmployeeAbsenceTypeOrmEntity } from './infrastructure/employee-absence.typeorm-entity';
import { EmployeeScheduleTypeOrmEntity } from './infrastructure/employee-schedule.typeorm-entity';
import { EmployeeServiceTypeOrmEntity } from './infrastructure/employee-service.typeorm-entity';
import { EmployeeTypeOrmEntity } from './infrastructure/employee.typeorm-entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      EmployeeTypeOrmEntity,
      EmployeeScheduleTypeOrmEntity,
      EmployeeAbsenceTypeOrmEntity,
      EmployeeServiceTypeOrmEntity,
    ]),
  ],
  exports: [TypeOrmModule],
})
export class EmployeesModule {}
