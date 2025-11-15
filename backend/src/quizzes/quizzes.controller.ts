import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { QuizzesService } from './quizzes.service';
import { CreateQuizDto } from './dto/create-quiz.dto';

@Controller('quizzes')
export class QuizzesController {
  constructor(private quizzesService: QuizzesService) {}

  @Get()
  async getQuizzes() {
    return await this.quizzesService.find();
  }

  @Get(':id')
  async getQuiz(@Param('id', ParseIntPipe) id: number) {
    return await this.quizzesService.findOne({ id });
  }

  @Post()
  async createQuiz(@Body() data: CreateQuizDto) {
    return await this.quizzesService.create(data);
  }

  @Delete('id')
  async deleteQuiz(@Param(':id', ParseIntPipe) id: number) {
    return await this.quizzesService.delete({ id });
  }
}
