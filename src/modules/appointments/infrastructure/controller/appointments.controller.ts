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
import { CreateAppointmentInputDto } from '../../application/dto/input/create-appointment.input';
import { DeleteAppointmentInputDto } from '../../application/dto/input/delete-appointment.input';
import { GetAppointmentInputDto } from '../../application/dto/input/get-appointment.input';
import { ListAppointmentsInputDto } from '../../application/dto/input/list-appointments.input';
import { UpdateAppointmentInputDto } from '../../application/dto/input/update-appointment.input';
import { AppointmentOutputDto } from '../../application/dto/output/appointment.output';
import { DeleteAppointmentOutputDto } from '../../application/dto/output/delete-appointment.output';
import { CreateAppointmentInputPort } from '../../application/ports/input/create-appointment.input-port';
import { DeleteAppointmentInputPort } from '../../application/ports/input/delete-appointment.input-port';
import { GetAppointmentInputPort } from '../../application/ports/input/get-appointment.input-port';
import { ListAppointmentsInputPort } from '../../application/ports/input/list-appointments.input-port';
import { UpdateAppointmentInputPort } from '../../application/ports/input/update-appointment.input-port';
import { CreateAppointmentRequestDto } from '../../interfaces/dto/create-appointment.request';
import { UpdateAppointmentRequestDto } from '../../interfaces/dto/update-appointment.request';

type RequestWithTenant = {
  tenantId: string;
};

@Controller('appointments')
export class AppointmentsController {
  constructor(
    private readonly createAppointmentInputPort: CreateAppointmentInputPort,
    private readonly updateAppointmentInputPort: UpdateAppointmentInputPort,
    private readonly deleteAppointmentInputPort: DeleteAppointmentInputPort,
    private readonly getAppointmentInputPort: GetAppointmentInputPort,
    private readonly listAppointmentsInputPort: ListAppointmentsInputPort,
  ) {}

  @Post()
  async create(
    @Req() request: RequestWithTenant,
    @Body() body: CreateAppointmentRequestDto,
  ): Promise<AppointmentOutputDto> {
    const input: CreateAppointmentInputDto = {
      tenantId: request.tenantId,
      id: body.id,
      customerId: body.customerId,
      employeeId: body.employeeId,
      serviceId: body.serviceId,
      reservationDate: body.reservationDate,
      startTime: body.startTime,
      endTime: body.endTime,
      channel: body.channel,
      status: body.status,
      notes: body.notes,
    };

    return this.createAppointmentInputPort.execute(input);
  }

  @Get()
  async findAll(
    @Req() request: RequestWithTenant,
  ): Promise<AppointmentOutputDto[]> {
    const input: ListAppointmentsInputDto = {
      tenantId: request.tenantId,
    };

    return this.listAppointmentsInputPort.execute(input);
  }

  @Get(':id')
  async findOne(
    @Req() request: RequestWithTenant,
    @Param('id') id: string,
  ): Promise<AppointmentOutputDto> {
    const input: GetAppointmentInputDto = {
      tenantId: request.tenantId,
      id,
    };

    return this.getAppointmentInputPort.execute(input);
  }

  @Patch(':id')
  async update(
    @Req() request: RequestWithTenant,
    @Param('id') id: string,
    @Body() body: UpdateAppointmentRequestDto,
  ): Promise<AppointmentOutputDto> {
    const input: UpdateAppointmentInputDto = {
      tenantId: request.tenantId,
      id,
      customerId: body.customerId,
      employeeId: body.employeeId,
      serviceId: body.serviceId,
      reservationDate: body.reservationDate,
      startTime: body.startTime,
      endTime: body.endTime,
      channel: body.channel,
      status: body.status,
      notes: body.notes,
    };

    return this.updateAppointmentInputPort.execute(input);
  }

  @Delete(':id')
  async remove(
    @Req() request: RequestWithTenant,
    @Param('id') id: string,
  ): Promise<DeleteAppointmentOutputDto> {
    const input: DeleteAppointmentInputDto = {
      tenantId: request.tenantId,
      id,
    };

    return this.deleteAppointmentInputPort.execute(input);
  }
}
