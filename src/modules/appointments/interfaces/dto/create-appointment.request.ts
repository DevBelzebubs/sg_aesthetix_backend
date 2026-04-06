import {
  IsEnum,
  IsISO8601,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUUID,
  Matches,
} from 'class-validator';
import {
  AppointmentChannel,
  AppointmentStatus,
} from '../../domain/appointment.entity';

export class CreateAppointmentRequestDto {
  @IsUUID()
  id!: string;

  @IsUUID()
  customerId!: string;

  @IsUUID()
  employeeId!: string;

  @IsUUID()
  serviceId!: string;

  @IsISO8601(
    { strict: true },
    { message: 'reservationDate must be a valid ISO date' },
  )
  reservationDate!: string;

  @IsString()
  @Matches(/^\d{2}:\d{2}:\d{2}$/)
  startTime!: string;

  @IsString()
  @Matches(/^\d{2}:\d{2}:\d{2}$/)
  endTime!: string;

  @IsEnum(AppointmentChannel)
  channel!: AppointmentChannel;

  @IsOptional()
  @IsEnum(AppointmentStatus)
  status?: AppointmentStatus;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  notes?: string | null;
}
