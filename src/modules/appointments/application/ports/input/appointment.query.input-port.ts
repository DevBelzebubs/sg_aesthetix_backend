import { GetAppointmentInputDto } from '../../dto/input/get-appointment.input';
import { ListAppointmentsInputDto } from '../../dto/input/list-appointments.input';
import { AppointmentOutputDto } from '../../dto/output/appointment.output';

export abstract class AppointmentQueryInputPort {
  abstract get(input: GetAppointmentInputDto): Promise<AppointmentOutputDto>;
  abstract list(input: ListAppointmentsInputDto): Promise<AppointmentOutputDto[]>;
}