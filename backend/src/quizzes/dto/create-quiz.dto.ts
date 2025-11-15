import { IsString, MinLength } from 'class-validator';

export class CreateQuizDto {
  @IsString()
  @MinLength(3)
  title: string;
}
