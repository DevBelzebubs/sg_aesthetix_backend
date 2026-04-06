/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
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
import { CreateServiceInputDto } from '../../application/dto/input/create-service.input';
import { DeleteServiceInputDto } from '../../application/dto/input/delete-service.input';
import { GetServiceInputDto } from '../../application/dto/input/get-service.input';
import { ListServicesInputDto } from '../../application/dto/input/list-services.input';
import { UpdateServiceInputDto } from '../../application/dto/input/update-service.input';
import { ServiceOutputDto } from '../../application/dto/output/service.output';
import { DeleteServiceOutputDto } from '../../application/dto/output/delete-service.output';
import { ServiceCommandInputPort } from '../../application/ports/input/service.command.input-port';
import { ServiceQueryInputPort } from '../../application/ports/input/service.query.input-port';
import { CreateServiceRequestDto } from '../../interfaces/dto/create-service.request';
import { UpdateServiceRequestDto } from '../../interfaces/dto/update-service.request';

type RequestWithTenant = {
  tenantId: string;
};

@Controller('services')
export class ServicesController {
  constructor(
    private readonly serviceCommandInputPort: ServiceCommandInputPort,
    private readonly serviceQueryInputPort: ServiceQueryInputPort,
  ) {}

  @Post()
  async create(
    @Req() request: RequestWithTenant,
    @Body() body: CreateServiceRequestDto,
  ): Promise<ServiceOutputDto> {
    const input: CreateServiceInputDto = {
      tenantId: request.tenantId,
      id: body.id,
      categoryId: body.categoryId,
      name: body.name,
      description: body.description,
      price: body.price,
      durationMin: body.durationMin,
      accumulatesPoints: body.accumulatesPoints,
      isActive: body.isActive,
    };

    return this.serviceCommandInputPort.create(input);
  }

  @Get()
  async findAll(
    @Req() request: RequestWithTenant,
  ): Promise<ServiceOutputDto[]> {
    const input: ListServicesInputDto = {
      tenantId: request.tenantId,
    };

    return this.serviceQueryInputPort.list(input);
  }

  @Get(':id')
  async findOne(
    @Req() request: RequestWithTenant,
    @Param('id') id: string,
  ): Promise<ServiceOutputDto> {
    const input: GetServiceInputDto = {
      tenantId: request.tenantId,
      id,
    };

    return this.serviceQueryInputPort.get(input);
  }

  @Patch(':id')
  async update(
    @Req() request: RequestWithTenant,
    @Param('id') id: string,
    @Body() body: UpdateServiceRequestDto,
  ): Promise<ServiceOutputDto> {
    const input: UpdateServiceInputDto = {
      tenantId: request.tenantId,
      id,
      categoryId: body.categoryId,
      name: body.name,
      description: body.description,
      price: body.price,
      durationMin: body.durationMin,
      accumulatesPoints: body.accumulatesPoints,
      isActive: body.isActive,
    };

    return this.serviceCommandInputPort.update(input);
  }

  @Delete(':id')
  async remove(
    @Req() request: RequestWithTenant,
    @Param('id') id: string,
  ): Promise<DeleteServiceOutputDto> {
    const input: DeleteServiceInputDto = {
      tenantId: request.tenantId,
      id,
    };

    return this.serviceCommandInputPort.delete(input);
  }
}
