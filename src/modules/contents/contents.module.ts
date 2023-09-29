import { Module } from '@nestjs/common';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql/src/module';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { Content } from './entities/content.entity';
import { ContentDTO } from './dto/content.dto';
import { CreateContentInput } from './dto/create-content.input';
import { UpdateContentInput } from './dto/update-content.input';
import { PagingStrategies } from '@ptc-org/nestjs-query-graphql';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([Content])],
      resolvers: [
        {
          DTOClass: ContentDTO,
          EntityClass: Content,
          CreateDTOClass: CreateContentInput,
          UpdateDTOClass: UpdateContentInput,
          enableTotalCount: true,
          pagingStrategy: PagingStrategies.OFFSET,
        },
      ],
    }),
  ],
  providers: [],
})
export class ContentsModule {}
