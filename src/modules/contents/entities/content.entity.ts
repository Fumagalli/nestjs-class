import { Base } from 'src/modules/bases/entities/base.entity';
import { Column, Entity } from 'typeorm';

@Entity()
export class Content extends Base {
  @Column()
  description: string;

  @Column()
  linkContent: string;
}
