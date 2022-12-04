import { ApiProperty } from "@nestjs/swagger";
import { IUser } from "../interfaces";

export class UserDto implements IUser {
  @ApiProperty()
  id: number;

  @ApiProperty()
  email: string;

  @ApiProperty()
  isVerified: boolean;

  @ApiProperty()
  username: string;

  @ApiProperty()
  createdAt: number;

  @ApiProperty()
  updatedAt: number;

  @ApiProperty()
  interests: string;

  @ApiProperty()
  isOnline: boolean;

  @ApiProperty()
  name: string;

  @ApiProperty()
  notifications: boolean;

  @ApiProperty()
  surname: string;
}