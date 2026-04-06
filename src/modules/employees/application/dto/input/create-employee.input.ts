export class CreateEmployeeInputDto {
  tenantId!: string;
  id!: string;
  userId!: string;
  firstName!: string;
  lastName!: string;
  phone?: string | null;
  specialty?: string | null;
  description?: string | null;
  photoUrl?: string | null;
  isActive?: boolean;
}
