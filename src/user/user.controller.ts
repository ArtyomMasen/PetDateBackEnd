import { Body, Controller, Delete, Get, HttpCode, Patch, Post, Req } from "@nestjs/common";
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
  @ApiOkResponse({ type: UserDto })
  @ApiNotFoundResponse()
  async findOneUser(@Req() req: any): Promise<UserDto> {
    return this.userService.findOneUser(req.user.userId);
  }

  @Post()
  async createUser(@Body() dto: CreateUserDto): Promise<IUser> {
    return await this.userService.createUser(dto);
  }

  @Patch()
  @ApiOkResponse({ type: UserDto })
  @ApiNotFoundResponse()
  async updateUser(@Req() req: any, @Body() dto: UpdateUserDto): Promise<UserDto> {
    const userId = req.user.userId;
    await this.userService.updateUser(userId, dto);

    return this.userService.findOneUser(userId);
  }

  @Patch('/verified')
  @ApiOkResponse({ type: UserDto })
  @ApiNotFoundResponse()
  async verifiedUser(@Req() req: any): Promise<UserDto> {
    const userId = req.user.userId;
    await this.userService.verifiedUser(userId);

    return this.userService.findOneUser(userId);
  }

  @Delete()
  @ApiNoContentResponse()
  @ApiNotFoundResponse({ description: 'not found' })
  @HttpCode(204)
  async deleteUser(@Req() req: any) {
    await this.userService.deleteUser(req.user.userId);
  }
}
