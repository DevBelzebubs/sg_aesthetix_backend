import { CreateAppointmentInputDto } from '../../dto/input/create-appointment.input';
import { DeleteAppointmentInputDto } from '../../dto/input/delete-appointment.input';
import { UpdateAppointmentInputDto } from '../../dto/input/update-appointment.input';
import { AppointmentOutputDto } from '../../dto/output/appointment.output';
import { DeleteAppointmentOutputDto } from '../../dto/output/delete-appointment.output';

export abstract class AppointmentCommandInputPort {
  abstract create(input: CreateAppointmentInputDto): Promise<AppointmentOutputDto>;
  abstract update(input: UpdateAppointmentInputDto): Promise<AppointmentOutputDto>;
  abstract delete(input: DeleteAppointmentInputDto): Promise<DeleteAppointmentOutputDto>;
}