import { MaxLength } from 'class-validator';
import { Base } from 'src/modules/bases/entities/base.entity';
import { Lesson } from 'src/modules/lessons/entities/lesson.entity';
import { Column, Entity, OneToMany } from 'typeorm';

@Entity()
export class Discipline extends Base {
  @Column()
  @MaxLength(45, {
    message: 'Name é muito grande',
  })
  name: string;

  @Column()
  duration: number;

  @OneToMany(() => Lesson, (lesson) => lesson.discipline)
  lesson: Lesson[];
}
