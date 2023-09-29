import { ObjectType } from '@nestjs/graphql';
import { FilterableField } from '@ptc-org/nestjs-query-graphql';
import { BaseDTO } from 'src/modules/bases/dto/base.dto';

@ObjectType('Lesson')
export class LessonDTO extends BaseDTO {
  @FilterableField()
  name: string;
}
