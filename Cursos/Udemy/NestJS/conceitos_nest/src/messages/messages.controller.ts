import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('messages')
export class MessagesController {
    @Get()
    findAll(): string {
        return 'Recados...'
    }

    @Get(':id')
    findOne(@Param('id') id: string): string {
        return `Recado ${id}`
    }

    @Post()
    Create(@Body() reqBody: object): object {
        return reqBody
    }
}
