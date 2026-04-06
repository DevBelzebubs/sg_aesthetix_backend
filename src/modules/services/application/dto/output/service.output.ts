export class ServiceOutputDto {
  id!: string;
  tenantId!: string;
  categoryId!: number;
  name!: string;
  description!: string | null;
  price!: number;
  durationMin!: number;
  accumulatesPoints!: boolean;
  isActive!: boolean;
  createdAt!: Date;
  updatedAt!: Date;
}
