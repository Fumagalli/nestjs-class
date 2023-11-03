import { ObjectType } from '@nestjs/graphql';
import {
  FilterableField,
  FilterableOffsetConnection,
  FilterableRelation,
} from '@ptc-org/nestjs-query-graphql';
import { BaseDTO } from 'src/modules/bases/dto/base.dto';
import { ContentDTO } from 'src/modules/contents/dto/content.dto';
import { DisciplineDTO } from 'src/modules/disciplines/dto/disciplines.dto';

@ObjectType('Lesson')
@FilterableOffsetConnection('contents', () => ContentDTO)
@FilterableRelation('discipline', () => DisciplineDTO, { nullable: false })
export class LessonDTO extends BaseDTO {
  @FilterableField()
  description: string;
}
