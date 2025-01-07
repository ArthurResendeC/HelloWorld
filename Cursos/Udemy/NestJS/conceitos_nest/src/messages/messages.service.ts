import { Injectable, NotFoundException } from '@nestjs/common';
import { Message } from './entities/message.entity';
import { CreateMessageDto } from './dto/create-message.dto';
import { UpdateMessageDto } from './dto/update-message.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class MessagesService {
  constructor(
    @InjectRepository(Message)
    private readonly messageRepository: Repository<Message>,
    private readonly usersService: UsersService,
  ) {}

  throwNotFoundError() {
    throw new NotFoundException('Message not found...');
  }

  findAll() {
    return this.messageRepository.find({
      relations: ['from', 'to'],
      order: {
        id: 'desc',
      },
      select: {
        from: {
          id: true,
          name: true,
        },
        to: {
          id: true,
          name: true,
        },
      },
    });
  }

  async findOne(id: number) {
    const message = await this.messageRepository.findOne({
      where: { id: +id },
      relations: ['from', 'to'],
      order: { id: 'asc' },
      select: {
        from: { id: true, name: true },
        to: { id: true, name: true },
      },
    });
    if (!message) this.throwNotFoundError();
    return message;
  }

  async postMessage(body: CreateMessageDto) {
    const { fromId, toId, text } = body;
    const from = await this.usersService.findOne(+fromId);
    if (!from) throw new NotFoundException('User not found!');
    const to = await this.usersService.findOne(+toId);
    if (!to) throw new NotFoundException('User not found!');

    const newMessage = {
      text,
      from,
      to,
      read: false,
      date: new Date(),
    };
    const message = await this.messageRepository.create(newMessage);

    await this.messageRepository.save(message);
    return {
      ...message,
      from: {
        id: message.from.id,
      },
      to: {
        id: message.to.id,
      },
    };
  }

  async editMessage(id: number, body: UpdateMessageDto) {
    const partialBody = {
      read: body?.read,
      text: body?.text,
    };

    const messageToBeDeleted = await this.messageRepository.preload({
      id,
      ...partialBody,
    });
    if (!messageToBeDeleted) this.throwNotFoundError();
    return this.messageRepository.save(messageToBeDeleted);
  }

  async deleteMessage(id: number) {
    const messageToBeDeleted = await this.messageRepository.findBy({ id });
    if (!messageToBeDeleted) this.throwNotFoundError();
    return this.messageRepository.remove(messageToBeDeleted);
  }
}
