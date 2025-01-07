import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}
  async create(createUserDto: CreateUserDto) {
    try {
      const userData = {
        name: createUserDto.name,
        passwordHash: createUserDto.password,
        email: createUserDto.email,
      };

      const newUser = await this.userRepository.create(userData);
      await this.userRepository.save(newUser);
      return newUser;
    } catch (error) {
      if (error.code === '23505') {
        throw new ConflictException('This email has already been used...');
      }
      throw error;
    }
  }

  findAll() {
    return this.userRepository.find({
      order: {
        id: 'desc',
      },
    });
  }

  findOne(id: number) {
    const user = this.userRepository.findOneBy({ id });
    if (!user) throw new NotFoundException('User not found...');
    return user;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const userData = {
      name: updateUserDto?.name,
      passwordHash: updateUserDto?.password,
    };

    const user = await this.userRepository.preload({
      id,
      ...userData,
    });

    if (!user) throw new NotFoundException('User not found');

    return user;
  }

  async remove(id: number) {
    const userToBeDeleted = await this.userRepository.findOneBy({ id });
    if (!userToBeDeleted) throw new NotFoundException('User not found!');
    await this.userRepository.remove(userToBeDeleted);
    return 'User removed with sucess...';
  }
}
