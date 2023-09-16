import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateStudentInput {
  @Field(() => String)
  name: string;

  @Field(() => String)
  key: string;
}
