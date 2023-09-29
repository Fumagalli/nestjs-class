import { ObjectType } from '@nestjs/graphql';
import {
  FilterableField,
  FilterableRelation,
} from '@ptc-org/nestjs-query-graphql';
import { BaseDTO } from 'src/modules/bases/dto/base.dto';
import { DisciplineDTO } from 'src/modules/disciplines/dto/disciplines.dto';

@ObjectType('Student')
@FilterableRelation('discipline', () => DisciplineDTO)
export class StudentDTO extends BaseDTO {
  @FilterableField()
  name: string;

  @FilterableField()
  key: string;

  @FilterableField()
  email: string;
}
