import { MaxLength } from 'class-validator';
import { Base } from 'src/modules/bases/entities/base.entity';
import { Content } from 'src/modules/contents/entities/content.entity';
import { Discipline } from 'src/modules/disciplines/entities/discipline.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';

@Entity()
export class Lesson extends Base {
  @Column()
  @MaxLength(100, {
    message: 'Description muito grande, máximo de 100 caracteres',
  })
  description: string;

  @OneToMany(() => Content, (content) => content.lesson)
  contents: Content[];

  // @OneToMany(() => Photo, (photo) => photo.user)
  // photos: Photo[]

  @ManyToOne(() => Discipline, (discipline) => discipline.lesson)
  discipline: Discipline;
}
