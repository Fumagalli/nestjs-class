/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { CreateDisciplineInput } from './dto/create-discipline.input';
import { UpdateDisciplineInput } from './dto/update-discipline.input';

@Injectable()
export class DisciplinesService {
  create(createDisciplineInput: CreateDisciplineInput) {
    return 'This action adds a new Discipline';
  }

  findAll() {
    return `This action returns all Disciplines`;
  }

  findOne(id: string) {
    return `This action returns a #${id} Discipline`;
  }

  update(id: string, updateDisciplineInput: UpdateDisciplineInput) {
    return `This action updates a #${id} Discipline`;
  }

  remove(id: string) {
    return `This action removes a #${id} Discipline`;
  }
}
