import { IsNotEmpty, IsPositive, IsString, MaxLength } from 'class-validator';

export class CreateMessageDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  readonly text: string;

  @IsPositive()
  @IsNotEmpty()
  readonly fromId: number;

  @IsPositive()
  @IsNotEmpty()
  readonly toId: number;
}
