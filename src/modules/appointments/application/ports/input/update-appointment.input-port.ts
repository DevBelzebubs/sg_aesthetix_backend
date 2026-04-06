import { UpdateAppointmentInputDto } from '../../dto/input/update-appointment.input';
import { AppointmentOutputDto } from '../../dto/output/appointment.output';

export abstract class UpdateAppointmentInputPort {
  abstract execute(
    input: UpdateAppointmentInputDto,
  ): Promise<AppointmentOutputDto>;
}
