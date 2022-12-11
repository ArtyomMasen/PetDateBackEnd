import { Body, Controller, Delete, Get, HttpCode, Param, Patch, Post, Req } from "@nestjs/common";
import { UserService } from "./user.service";
import { CreateUserDto, UpdateUserDto, UserDto } from "./dto";
import { ApiNoContentResponse, ApiNotFoundResponse, ApiOkResponse } from "@nestjs/swagger";
import { User } from "./entity";
import { IUser } from "./interfaces";

@Controller('user')
export class UserController {
  constructor(
    private userService: UserService,
  ) {
  }

  @Get()
  async getAll(): Promise<User[]> {
    return await this.userService.getAll()
  }

  @Get(':id')
  @ApiOkResponse({ type: UserDto })
  @ApiNotFoundResponse()
  async findOneUser(@Param('id') userId: number): Promise<UserDto> {
    return this.userService.findOneUser(userId);
  }

  @Post()
  async createUser(@Body() dto: CreateUserDto): Promise<IUser> {
    return await this.userService.createUser(dto);
  }

  @Patch(':id')
  @ApiOkResponse({ type: UserDto })
  @ApiNotFoundResponse()
  async updateUser(@Param('id') userId: number, @Body() dto: UpdateUserDto): Promise<UserDto> {
    await this.userService.updateUser(userId, dto);

    return this.userService.findOneUser(userId);
  }

  @Patch('/verified')
  @ApiOkResponse({ type: UserDto })
  @ApiNotFoundResponse()
  async verifiedUser(@Param('id') userId: number): Promise<UserDto> {
    await this.userService.verifiedUser(userId);

    return this.userService.findOneUser(userId);
  }

  @Delete()
  @ApiNoContentResponse()
  @ApiNotFoundResponse({ description: 'not found' })
  @HttpCode(204)
  async deleteUser(@Param('id') userId: number) {
    await this.userService.deleteUser(userId);
  }
}
