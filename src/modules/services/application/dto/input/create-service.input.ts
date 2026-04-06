export class CreateServiceInputDto {
  tenantId!: string;
  id!: string;
  categoryId!: number;
  name!: string;
  description?: string | null;
  price!: number;
  durationMin!: number;
  accumulatesPoints?: boolean;
  isActive?: boolean;
}
