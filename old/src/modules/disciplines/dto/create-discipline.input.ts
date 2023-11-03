import { Field, InputType } from '@nestjs/graphql';
import { UpdateLessonInput } from 'src/modules/lessons/dto/update-lesson.input';

@InputType()
export class CreateDisciplineInput {
  name: string;
  duration: number;

  @Field(() => UpdateLessonInput)
  lesson?: UpdateLessonInput;
}
