import { ObjectType } from '@nestjs/graphql';
import {
  FilterableField,
  FilterableRelation,
} from '@ptc-org/nestjs-query-graphql';
import { BaseDTO } from 'src/modules/bases/dto/base.dto';
import { LessonDTO } from 'src/modules/lessons/dto/lesson.dto';

@ObjectType('Discipline')
@FilterableRelation('lesson', () => LessonDTO)
export class DisciplineDTO extends BaseDTO {
  @FilterableField()
  name: string;

  @FilterableField()
  duration: number;
}
