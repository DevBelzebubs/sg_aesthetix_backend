import { ListAppointmentsInputDto } from '../../dto/input/list-appointments.input';
import { AppointmentOutputDto } from '../../dto/output/appointment.output';

export abstract class ListAppointmentsInputPort {
  abstract execute(
    input: ListAppointmentsInputDto,
  ): Promise<AppointmentOutputDto[]>;
}
