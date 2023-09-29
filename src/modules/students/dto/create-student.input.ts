import { Field, InputType } from '@nestjs/graphql';
import { UpdateDisciplineInput } from 'src/modules/disciplines/dto/update-discipline.input';

@InputType()
export class CreateStudentInput {
  name: string;
  key: string;
  email: string;

  @Field(() => UpdateDisciplineInput)
  disciplines: UpdateDisciplineInput;
}
