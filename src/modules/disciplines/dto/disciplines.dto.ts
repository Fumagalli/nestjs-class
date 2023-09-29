import { ObjectType } from '@nestjs/graphql';
import { FilterableField } from '@ptc-org/nestjs-query-graphql';
import { BaseDTO } from 'src/modules/bases/dto/base.dto';

@ObjectType('Discipline')
export class DisciplineDTO extends BaseDTO {
  @FilterableField()
  name: string;
}
