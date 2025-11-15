import { Injectable, NotFoundException } from '@nestjs/common';
import { Prisma, Quiz } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateQuizDto } from './dto/create-quiz.dto';

@Injectable()
export class QuizzesService {
  constructor(private prisma: PrismaService) {}

  async find(where?: Prisma.QuizWhereInput): Promise<Quiz[]> {
    return this.prisma.quiz.findMany({ where });
  }

  async findOne(where: Prisma.QuizWhereUniqueInput): Promise<Quiz | null> {
    return this.prisma.quiz.findUnique({
      where,
    });
  }

  async create(data: CreateQuizDto) {
    return this.prisma.quiz.create({ data });
  }

  async update(where: Prisma.QuizWhereUniqueInput, data: CreateQuizDto) {
    const quiz = await this.prisma.quiz.findUnique({
      where,
    });

    if (!quiz) {
      throw new NotFoundException('Quiz not found');
    }

    Object.assign(quiz, data);

    return this.prisma.quiz.update({
      data,
      where,
    });
  }

  async delete(where: Prisma.QuizWhereUniqueInput) {
    return this.prisma.quiz.delete({ where });
  }
}
