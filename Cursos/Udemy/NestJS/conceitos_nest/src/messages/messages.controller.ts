import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { MessagesService } from './messages.service';
import { CreateMessageDto } from './dto/create-message.dto';
import { UpdateMessageDto } from './dto/update-message.dto';

@Controller('messages')
export class MessagesController {
  constructor(private readonly messagesService: MessagesService) {}

  @Get()
  findAll() {
    return this.messagesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.messagesService.findOne(id);
  }

  @Post()
  Create(@Body() reqBody: CreateMessageDto) {
    return this.messagesService.postMessage(reqBody);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() reqBody: UpdateMessageDto,
  ) {
    return this.messagesService.editMessage(id, reqBody);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.messagesService.deleteMessage(id);
  }
}
