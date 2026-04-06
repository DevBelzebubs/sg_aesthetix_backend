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
import { AppointmentCommandInputPort } from '../../application/ports/input/appointment.command.input-port';
import { AppointmentQueryInputPort } from '../../application/ports/input/appointment.query.input-port';
import { CreateAppointmentRequestDto } from '../../interfaces/dto/create-appointment.request';
import { UpdateAppointmentRequestDto } from '../../interfaces/dto/update-appointment.request';

type RequestWithTenant = {
  tenantId: string;
};

@Controller('appointments')
export class AppointmentsController {
  constructor(
    private readonly appointmentCommandInputPort: AppointmentCommandInputPort,
    private readonly appointmentQueryInputPort: AppointmentQueryInputPort,
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

    return this.appointmentCommandInputPort.create(input);
  }

  @Get()
  async findAll(
    @Req() request: RequestWithTenant,
  ): Promise<AppointmentOutputDto[]> {
    const input: ListAppointmentsInputDto = {
      tenantId: request.tenantId,
    };

    return this.appointmentQueryInputPort.list(input);
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

    return this.appointmentQueryInputPort.get(input);
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

    return this.appointmentCommandInputPort.update(input);
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

    return this.appointmentCommandInputPort.delete(input);
  }
}
