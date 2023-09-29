import { InputType } from '@nestjs/graphql';

@InputType()
export class CreateLessonInput {
<<<<<<< HEAD
=======
  @Field(() => String)
>>>>>>> 0a2da38b1a71d3256900430fecb433d585816898
  description: string;
}
