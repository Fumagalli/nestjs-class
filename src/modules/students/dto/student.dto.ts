import { Field, ObjectType } from '@nestjs/graphql';
import { FilterableField } from '@ptc-org/nestjs-query-graphql';

@ObjectType('Student')
export class StudentDTO {
  @Field(() => String)
  id: string;

  @FilterableField()
  name: string;

  @FilterableField()
  key: string;
}
