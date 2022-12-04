import { ApiProperty } from "@nestjs/swagger";
import { IUser } from "../interfaces";
import { JoinTable, OneToMany } from "typeorm";
import { Pet } from "../../pet/entity";

export class UserDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  email: string;

  @ApiProperty()
  isVerified: boolean;

  @ApiProperty()
  username: string;

  @ApiProperty()
  password: string;

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

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
