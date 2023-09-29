import { Base } from 'src/modules/bases/entities/base.entity';
import { Column, Entity } from 'typeorm';

@Entity()
export class Discipline extends Base {
  @Column()
  name: string;
}
