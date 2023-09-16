import { Module } from '@nestjs/common';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql/src/module';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { Student } from './entities/student.entity';
import { StudentDTO } from './dto/student.dto';
import { CreateStudentInput } from './dto/create-student.input';
import { UpdateStudentInput } from './dto/update-student.input';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([Student])],
      resolvers: [
        {
          DTOClass: StudentDTO,
          EntityClass: Student,
          CreateDTOClass: CreateStudentInput,
          UpdateDTOClass: UpdateStudentInput,
          enableTotalCount: true,
        },
      ],
    }),
  ],
  providers: [],
})
export class StudentsModule {}
