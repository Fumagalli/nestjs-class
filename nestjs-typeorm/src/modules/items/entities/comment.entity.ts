import { Column, Entity, ManyToOne } from 'typeorm';
import { AbstractEntity } from '../../database/entities/abstract.entity';
import { Item } from './item.entity';

@Entity()
export class Comment extends AbstractEntity<Comment> {
  @Column()
  content: string;

  @ManyToOne(() => Item, (item) => item.comments)
  item: Item;
}
