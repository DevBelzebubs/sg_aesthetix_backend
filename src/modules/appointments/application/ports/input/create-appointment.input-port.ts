import { CreateAppointmentInputDto } from '../../dto/input/create-appointment.input';
import { AppointmentOutputDto } from '../../dto/output/appointment.output';

export abstract class CreateAppointmentInputPort {
  abstract execute(
    input: CreateAppointmentInputDto,
  ): Promise<AppointmentOutputDto>;
}
