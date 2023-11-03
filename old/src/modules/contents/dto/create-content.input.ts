import { Field, InputType } from '@nestjs/graphql';
import { CreateLessonInput } from 'src/modules/lessons/dto/create-lesson.input';
import { UpdateLessonInput } from 'src/modules/lessons/dto/update-lesson.input';

@InputType()
export class CreateContentInput {
  description?: string;
  linkContent?: string;

  @Field(() => CreateLessonInput)
  lesson?: CreateLessonInput;
}
