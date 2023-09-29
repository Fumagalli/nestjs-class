import { ObjectType } from '@nestjs/graphql';
import { FilterableField } from '@ptc-org/nestjs-query-graphql';
import { BaseDTO } from 'src/modules/bases/dto/base.dto';

@ObjectType('Content')
export class ContentDTO extends BaseDTO {
  @FilterableField({ nullable: true })
  description: string;

  @FilterableField()
  linkContent: string;
}