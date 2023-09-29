import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateDisciplineInput {
  @Field(() => String)
  name: string;
}
