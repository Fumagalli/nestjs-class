import { MaxLength } from 'class-validator';
import { Base } from 'src/modules/bases/entities/base.entity';
import { Lesson } from 'src/modules/lessons/entities/lesson.entity';
import { Column, Entity, ManyToOne } from 'typeorm';

@Entity()
export class Content extends Base {
  @Column()
  @MaxLength(100, {
    message: 'Description muito grande, máximo de 100 caracteres',
  })
  description: string;

  @Column()
  @MaxLength(45, {
    message: 'LinkContent muito grande, máximo de 45 caracteres',
  })
  linkContent: string;

  @ManyToOne(() => Lesson, (lesson) => lesson.contents)
  lesson?: Lesson;
}
