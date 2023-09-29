import { Base } from 'src/modules/bases/entities/base.entity';
import { Column, Entity } from 'typeorm';

@Entity()
export class Lesson extends Base {
  @Column()
  description: string;
}
