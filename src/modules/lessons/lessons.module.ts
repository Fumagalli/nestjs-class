import { Module } from '@nestjs/common';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql/src/module';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { Lesson } from './entities/lesson.entity';
import { LessonDTO } from './dto/lesson.dto';
import { CreateLessonInput } from './dto/create-lesson.input';
import { UpdateLessonInput } from './dto/update-lesson.input';
import { PagingStrategies } from '@ptc-org/nestjs-query-graphql';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([Lesson])],
      resolvers: [
        {
          DTOClass: LessonDTO,
          EntityClass: Lesson,
          CreateDTOClass: CreateLessonInput,
          UpdateDTOClass: UpdateLessonInput,
          enableTotalCount: true,
          pagingStrategy: PagingStrategies.OFFSET,
          enableSubscriptions: true,
        },
      ],
    }),
  ],
  providers: [],
})
export class LessonsModule {}
