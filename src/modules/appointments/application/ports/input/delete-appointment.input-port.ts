import { DeleteAppointmentInputDto } from '../../dto/input/delete-appointment.input';
import { DeleteAppointmentOutputDto } from '../../dto/output/delete-appointment.output';

export abstract class DeleteAppointmentInputPort {
  abstract execute(
    input: DeleteAppointmentInputDto,
  ): Promise<DeleteAppointmentOutputDto>;
}
