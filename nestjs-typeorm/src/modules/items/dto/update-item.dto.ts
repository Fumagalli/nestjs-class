import { PartialType } from '@nestjs/mapped-types';
import { CreateItemDto } from './create-item.dto';
import { CreateCommentDto } from './create-comment.dto';
import { CreateTagDto } from './create-tag.dto';

export class UpdateItemDto extends PartialType(CreateItemDto) {
  public: boolean;
  comments: CreateCommentDto[];
  tags: CreateTagDto[];
}
