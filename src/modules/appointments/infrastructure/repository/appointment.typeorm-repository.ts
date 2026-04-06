/* eslint-disable @typescript-eslint/no-unnecessary-type-assertion */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AppointmentRepositoryOutputPort } from '../../application/ports/output/appointment.repository.output-port';
import {
  Appointment,
  AppointmentStatus,
  AppointmentChannel,
} from '../../domain/appointment.entity';
import { AppointmentTypeOrmEntity } from '../entity/appointment.typeorm-entity';

@Injectable()
export class AppointmentTypeOrmRepository extends AppointmentRepositoryOutputPort {
  constructor(
    @InjectRepository(AppointmentTypeOrmEntity)
    private readonly appointmentRepository: Repository<AppointmentTypeOrmEntity>,
  ) {
    super();
  }

  async create(appointment: Appointment): Promise<Appointment> {
    const entity = this.toTypeOrmEntity(appointment);
    const createdAppointment = await this.appointmentRepository.save(entity);
    return this.toDomainEntity(createdAppointment);
  }

  async findAllByTenant(tenantId: string): Promise<Appointment[]> {
    const appointments = await this.appointmentRepository.find({
      where: { tenantId },
      order: {
        reservationDate: 'DESC',
        startTime: 'DESC',
      },
    });

    return appointments.map((appointment) => this.toDomainEntity(appointment));
  }

  async findById(tenantId: string, id: string): Promise<Appointment | null> {
    const appointment = await this.appointmentRepository.findOne({
      where: { id, tenantId },
    });

    return appointment ? this.toDomainEntity(appointment) : null;
  }

  async update(appointment: Appointment): Promise<Appointment> {
    const entity = this.toTypeOrmEntity(appointment);
    const updatedAppointment = await this.appointmentRepository.save(entity);
    return this.toDomainEntity(updatedAppointment);
  }

  async delete(tenantId: string, id: string): Promise<void> {
    await this.appointmentRepository.delete({ id, tenantId });
  }

  private toDomainEntity(entity: AppointmentTypeOrmEntity): Appointment {
    return Appointment.create({
      id: entity.id,
      tenantId: entity.tenantId,
      customerId: entity.customerId,
      employeeId: entity.employeeId,
      serviceId: entity.serviceId,
      reservationDate: entity.reservationDate,
      startTime: entity.startTime,
      endTime: entity.endTime,
      status: entity.status as AppointmentStatus,
      channel: entity.channel as AppointmentChannel,
      notes: entity.notes,
      createdAt: entity.createdAt,
      updatedAt: entity.updatedAt,
    });
  }

  private toTypeOrmEntity(
    appointment: Appointment,
  ): Partial<AppointmentTypeOrmEntity> {
    return {
      id: appointment.id,
      tenantId: appointment.tenantId,
      customerId: appointment.customerId,
      employeeId: appointment.employeeId,
      serviceId: appointment.serviceId,
      reservationDate: appointment.reservationDate,
      startTime: appointment.startTime,
      endTime: appointment.endTime,
      status: appointment.status,
      channel: appointment.channel,
      notes: appointment.notes,
      createdAt: appointment.createdAt,
      updatedAt: appointment.updatedAt,
    };
  }
}
