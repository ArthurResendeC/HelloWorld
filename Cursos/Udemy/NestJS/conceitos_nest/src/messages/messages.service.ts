import { Injectable, NotFoundException } from '@nestjs/common';
import { Message } from './entities/message.entity';
import { CreateMessageDto } from './dto/create-message.dto';
import { UpdateMessageDto } from './dto/update-message.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class MessagesService {
  constructor(
    @InjectRepository(Message)
    private readonly messageRepository: Repository<Message>,
  ) {}

  throwNotFoundError() {
    throw new NotFoundException('Message not found...');
  }

  findAll() {
    return this.messageRepository.find();
  }

  async findOne(id: number) {
    const message = await this.messageRepository.findOne({
      where: { id: +id },
    });
    if (!message) this.throwNotFoundError();
    return message;
  }

  async postMessage(body: CreateMessageDto) {
    const newMessage = {
      ...body,
      read: false,
      date: new Date(),
    };
    const message = await this.messageRepository.create(newMessage);

    return this.messageRepository.save(message);
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
