import { CreateStudentInput } from './create-student.input';
import { InputType, Field, PartialType, ID } from '@nestjs/graphql';

@InputType()
export class UpdateStudentInput extends PartialType(CreateStudentInput) {
  @Field(() => ID)
  id?: string;

  @Field(() => String)
  name: string;

  @Field(() => String)
  key: string;
}
