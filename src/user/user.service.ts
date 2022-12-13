import { Injectable, NotFoundException } from "@nestjs/common";
import { User } from "./entity";
import { DataSource, Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { IUser } from "./interfaces";
import { CreateUserDto, UpdateUserDto } from "./dto";
import { getUnixTime } from 'date-fns';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {
  }

  async getAll(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async createUser(dto: CreateUserDto): Promise<IUser> {
    return this.userRepository.save(dto);
  }

  async findOneUser(id: number): Promise<IUser> {
    const response = await this.userRepository.findOne({
      where: {id},
    });
    if (!response) {
      throw new NotFoundException();
    }
    return response;
  }

  async updateUser(id: number, dto: UpdateUserDto): Promise<void> {
    dto.updateAt = getUnixTime(new Date());
    await this.userRepository.update(id, dto);
  }

  async verifiedUser(id: number): Promise<void> {
    const user = {isVerified: true};
    await this.userRepository.update(id, user);
  }

  async deleteUser(id: number): Promise<void> {
    await this.userRepository.delete({id});
  }

  async login(username: string, password: string): Promise<IUser> {
    const user = await this.userRepository.findOneBy(
      {
        username: username
      }
    )
    if (user == null) {
      throw new NotFoundException();
    }

    if (password != user.password) {
      throw new NotFoundException();
    }

    return user;
  }
}
