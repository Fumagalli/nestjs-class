import { CreateCommentDto } from './create-comment.dto';
import { CreateListingDto } from './create-listing.dto';
import { CreateTagDto } from './create-tag.dto';

export class CreateItemDto {
  name: string;
  public: boolean;
  listing: CreateListingDto;
  comments: CreateCommentDto[];
  tags: CreateTagDto[];
}
