import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  IsUUID,
  Min,
} from 'class-validator';

export class CreateServiceRequestDto {
  @IsUUID()
  id!: string;

  @IsNumber()
  categoryId!: number;

  @IsString()
  @IsNotEmpty()
  name!: string;

  @IsOptional()
  @IsString()
  description?: string | null;

  @IsNumber()
  @Min(0)
  price!: number;

  @IsNumber()
  @Min(0)
  durationMin!: number;

  @IsOptional()
  @IsBoolean()
  accumulatesPoints?: boolean;

  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}
