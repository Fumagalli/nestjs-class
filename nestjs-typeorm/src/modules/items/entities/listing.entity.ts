import { AbstractEntity } from 'src/modules/database/entities/abstract.entity';
import { Entity, Column } from 'typeorm';

@Entity()
export class Listing extends AbstractEntity<Listing> {
  @Column()
  description: string;

  @Column()
  rating: number;
}
