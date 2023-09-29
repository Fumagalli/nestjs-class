import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateContentInput {
  @Field(() => String)
  name: string;
}
