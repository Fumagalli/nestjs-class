import { Field, InputType } from '@nestjs/graphql';
import { UpdateContentInput } from 'src/modules/contents/dto/update-content.input';
import { CreateDisciplineInput } from 'src/modules/disciplines/dto/create-discipline.input';
import { UpdateDisciplineInput } from 'src/modules/disciplines/dto/update-discipline.input';

@InputType()
export class CreateLessonInput {
  description: string;

  @Field(() => UpdateContentInput)
  contents?: UpdateContentInput;

  @Field(() => CreateDisciplineInput)
  discipline?: CreateDisciplineInput;
}
