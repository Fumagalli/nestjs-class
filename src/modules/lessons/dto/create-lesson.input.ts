import { Field, InputType } from '@nestjs/graphql';
import { UpdateContentInput } from 'src/modules/contents/dto/update-content.input';
import { UpdateDisciplineInput } from 'src/modules/disciplines/dto/update-discipline.input';

@InputType()
export class CreateLessonInput {
  description: string;

  @Field(() => UpdateContentInput)
  contents: UpdateContentInput;

  @Field(() => UpdateDisciplineInput)
  discipline: UpdateDisciplineInput;
}
