import { AbstractEntity } from '../../database/entities/abstract.entity';
import { Column, Entity } from 'typeorm';

@Entity()
export class Tag extends AbstractEntity<Tag> {
  @Column()
  content: string;
}
