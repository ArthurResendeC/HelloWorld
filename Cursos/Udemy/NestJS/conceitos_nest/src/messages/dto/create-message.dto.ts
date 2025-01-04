import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateMessageDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  readonly text: string;
  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  readonly from: string;
  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  readonly to: string;
}
