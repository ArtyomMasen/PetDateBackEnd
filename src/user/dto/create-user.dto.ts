import { ApiProperty } from "@nestjs/swagger";
import { getUnixTime } from "date-fns";

export class CreateUserDto {
  @ApiProperty()
  readonly email: string;

  @ApiProperty()
  readonly username: string;

  @ApiProperty()
  readonly password: string;

  @ApiProperty()
  readonly isVerified: boolean;

  @ApiProperty()
  readonly name: string;

  @ApiProperty()
  readonly surname: string;

  @ApiProperty()
  readonly interests: string;

  @ApiProperty()
  readonly notifications: boolean;

  @ApiProperty()
  readonly isOnline: boolean;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}