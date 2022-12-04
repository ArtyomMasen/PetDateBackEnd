import { ApiProperty } from "@nestjs/swagger";

export class UpdateUserDto {
  @ApiProperty()
  readonly email: string;

  @ApiProperty()
  readonly username: string;

  updateAt?: number;
}