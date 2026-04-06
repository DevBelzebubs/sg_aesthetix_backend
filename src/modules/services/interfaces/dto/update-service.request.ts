import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';

export class UpdateServiceRequestDto {
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

  @IsBoolean()
  accumulatesPoints!: boolean;

  @IsBoolean()
  isActive!: boolean;
}
