import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Req,
} from '@nestjs/common';
import { CreateEmployeeInputDto } from '../../application/dto/input/create-employee.input';
import { DeleteEmployeeInputDto } from '../../application/dto/input/delete-employee.input';
import { GetEmployeeInputDto } from '../../application/dto/input/get-employee.input';
import { ListEmployeesInputDto } from '../../application/dto/input/list-employees.input';
import { UpdateEmployeeInputDto } from '../../application/dto/input/update-employee.input';
import { EmployeeOutputDto } from '../../application/dto/output/employee.output';
import { DeleteEmployeeOutputDto } from '../../application/dto/output/delete-employee.output';
import { EmployeeCommandInputPort } from '../../application/ports/input/employee.command.input-port';
import { EmployeeQueryInputPort } from '../../application/ports/input/employee.query.input-port';
import { CreateEmployeeRequestDto } from '../../interfaces/dto/create-employee.request';
import { UpdateEmployeeRequestDto } from '../../interfaces/dto/update-employee.request';

type RequestWithTenant = {
  tenantId: string;
};

@Controller('employees')
export class EmployeesController {
  constructor(
    private readonly employeeCommandInputPort: EmployeeCommandInputPort,
    private readonly employeeQueryInputPort: EmployeeQueryInputPort,
  ) {}

  @Post()
  async create(
    @Req() request: RequestWithTenant,
    @Body() body: CreateEmployeeRequestDto,
  ): Promise<EmployeeOutputDto> {
    const input: CreateEmployeeInputDto = {
      tenantId: request.tenantId,
      id: body.id,
      userId: body.userId,
      firstName: body.firstName,
      lastName: body.lastName,
      phone: body.phone,
      specialty: body.specialty,
      description: body.description,
      photoUrl: body.photoUrl,
      isActive: body.isActive,
    };

    return this.employeeCommandInputPort.create(input);
  }

  @Get()
  async findAll(
    @Req() request: RequestWithTenant,
  ): Promise<EmployeeOutputDto[]> {
    const input: ListEmployeesInputDto = {
      tenantId: request.tenantId,
    };

    return this.employeeQueryInputPort.list(input);
  }

  @Get(':id')
  async findOne(
    @Req() request: RequestWithTenant,
    @Param('id') id: string,
  ): Promise<EmployeeOutputDto> {
    const input: GetEmployeeInputDto = {
      tenantId: request.tenantId,
      id,
    };

    return this.employeeQueryInputPort.get(input);
  }

  @Patch(':id')
  async update(
    @Req() request: RequestWithTenant,
    @Param('id') id: string,
    @Body() body: UpdateEmployeeRequestDto,
  ): Promise<EmployeeOutputDto> {
    const input: UpdateEmployeeInputDto = {
      tenantId: request.tenantId,
      id,
      userId: body.userId,
      firstName: body.firstName,
      lastName: body.lastName,
      phone: body.phone,
      specialty: body.specialty,
      description: body.description,
      photoUrl: body.photoUrl,
      isActive: body.isActive,
    };

    return this.employeeCommandInputPort.update(input);
  }

  @Delete(':id')
  async remove(
    @Req() request: RequestWithTenant,
    @Param('id') id: string,
  ): Promise<DeleteEmployeeOutputDto> {
    const input: DeleteEmployeeInputDto = {
      tenantId: request.tenantId,
      id,
    };

    return this.employeeCommandInputPort.delete(input);
  }
}
