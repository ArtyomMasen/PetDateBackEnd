import { Injectable, NotFoundException } from "@nestjs/common";
import { User } from "./entity";
import { DataSource, Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { IUser } from "./interfaces";
import { UpdateUserDto } from "./dto";
import { getUnixTime } from 'date-fns';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    private connection: DataSource,
  ) {
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

  // TODO: понять, что писать!!!
  async deleteUser(id: number): Promise<void> {
    await this.userRepository.delete({id});
  }
}
