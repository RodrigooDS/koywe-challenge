import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString, Min } from 'class-validator';

export class CreateQuoteDto {
  @ApiProperty({
    example: 1.5,
    description: 'Amount of cryptocurrency to quote',
    minimum: 0,
  })
  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  amount: number;

  @ApiProperty({
    example: 'BTC',
    description: 'Source cryptocurrency code',
    minLength: 3,
    maxLength: 5,
  })
  @IsNotEmpty()
  @IsString()
  from: string;

  @ApiProperty({
    example: 'CLP',
    description: 'Target currency code',
    minLength: 3,
    maxLength: 5,
  })
  @IsNotEmpty()
  @IsString()
  to: string;
}
