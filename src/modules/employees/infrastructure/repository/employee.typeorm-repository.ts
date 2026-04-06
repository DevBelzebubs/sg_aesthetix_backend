import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EmployeeRepositoryOutputPort } from '../../application/ports/output/employee.repository.output-port';
import { Employee } from '../../domain/employee.entity';
import { EmployeeTypeOrmEntity } from '../employee.typeorm-entity';

@Injectable()
export class EmployeeTypeOrmRepository extends EmployeeRepositoryOutputPort {
  constructor(
    @InjectRepository(EmployeeTypeOrmEntity)
    private readonly employeeRepository: Repository<EmployeeTypeOrmEntity>,
  ) {
    super();
  }

  async create(employee: Employee): Promise<Employee> {
    const entity = this.toTypeOrmEntity(employee);
    const createdEmployee = await this.employeeRepository.save(entity);
    return this.toDomainEntity(createdEmployee);
  }

  async findAllByTenant(tenantId: string): Promise<Employee[]> {
    const employees = await this.employeeRepository.find({
      where: { tenantId },
      order: { firstName: 'ASC', lastName: 'ASC' },
    });

    return employees.map((employee) => this.toDomainEntity(employee));
  }

  async findById(tenantId: string, id: string): Promise<Employee | null> {
    const employee = await this.employeeRepository.findOne({
      where: { id, tenantId },
    });

    return employee ? this.toDomainEntity(employee) : null;
  }

  async update(employee: Employee): Promise<Employee> {
    const entity = this.toTypeOrmEntity(employee);
    const updatedEmployee = await this.employeeRepository.save(entity);
    return this.toDomainEntity(updatedEmployee);
  }

  async delete(tenantId: string, id: string): Promise<void> {
    await this.employeeRepository.delete({ id, tenantId });
  }

  private toDomainEntity(entity: EmployeeTypeOrmEntity): Employee {
    return Employee.create({
      id: entity.id,
      tenantId: entity.tenantId,
      userId: entity.userId,
      firstName: entity.firstName,
      lastName: entity.lastName,
      phone: entity.phone,
      specialty: entity.specialty,
      description: entity.description,
      photoUrl: entity.photoUrl,
      isActive: entity.isActive,
      createdAt: entity.createdAt,
      updatedAt: entity.updatedAt,
    });
  }

  private toTypeOrmEntity(employee: Employee): Partial<EmployeeTypeOrmEntity> {
    return {
      id: employee.id,
      tenantId: employee.tenantId,
      userId: employee.userId,
      firstName: employee.firstName,
      lastName: employee.lastName,
      phone: employee.phone,
      specialty: employee.specialty,
      description: employee.description,
      photoUrl: employee.photoUrl,
      isActive: employee.isActive,
      createdAt: employee.createdAt,
      updatedAt: employee.updatedAt,
    };
  }
}
