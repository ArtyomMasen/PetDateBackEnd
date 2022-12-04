import { ApiProperty } from "@nestjs/swagger";

export class CreatePetDto {
  @ApiProperty()
  readonly name: string;

  @ApiProperty()
  readonly gender: string;

  @ApiProperty()
  readonly breed: string;

  @ApiProperty()
  readonly kindOfAnimal: string;
}
