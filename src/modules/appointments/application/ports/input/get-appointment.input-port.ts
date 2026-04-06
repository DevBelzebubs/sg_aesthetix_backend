import { GetAppointmentInputDto } from '../../dto/input/get-appointment.input';
import { AppointmentOutputDto } from '../../dto/output/appointment.output';

export abstract class GetAppointmentInputPort {
  abstract execute(
    input: GetAppointmentInputDto,
  ): Promise<AppointmentOutputDto>;
}
