import { MaxLength, IsEmail } from 'class-validator';
import { Base } from 'src/modules/bases/entities/base.entity';
import { Discipline } from 'src/modules/disciplines/entities/discipline.entity';
import { Column, Entity, ManyToMany } from 'typeorm';

@Entity()
export class Student extends Base {
  @Column()
  @MaxLength(45, {
    message: 'Name muito grande, máximo de 45 caracteres',
  })
  name: string;

  @Column()
  @MaxLength(45, {
    message: 'Key muito grande, máximo de 45 caracteres',
  })
  key: string;

  @Column()
  @IsEmail()
  email: string;

  @ManyToMany(() => Discipline)
  // @JoinTable()
  disciplines: Discipline[];
}
