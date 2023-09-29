import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { DisciplinesService } from './disciplines.service';
import { Discipline } from './entities/discipline.entity';
import { CreateDisciplineInput } from './dto/create-discipline.input';
import { UpdateDisciplineInput } from './dto/update-discipline.input';

@Resolver(() => Discipline)
export class DisciplinesResolver {
  constructor(private readonly DisciplinesService: DisciplinesService) {}

  @Mutation(() => Discipline)
  createDiscipline(
    @Args('createDisciplineInput') createDisciplineInput: CreateDisciplineInput,
  ) {
    return this.DisciplinesService.create(createDisciplineInput);
  }

  @Query(() => [Discipline], { name: 'Disciplines' })
  findAll() {
    return this.DisciplinesService.findAll();
  }

  @Query(() => Discipline, { name: 'Discipline' })
  findOne(@Args('id', { type: () => Int }) id: string) {
    return this.DisciplinesService.findOne(id);
  }

  @Mutation(() => Discipline)
  updateDiscipline(
    @Args('updateDisciplineInput') updateDisciplineInput: UpdateDisciplineInput,
  ) {
    return this.DisciplinesService.update(
      updateDisciplineInput.id,
      updateDisciplineInput,
    );
  }

  @Mutation(() => Discipline)
  removeDiscipline(@Args('id', { type: () => Int }) id: string) {
    return this.DisciplinesService.remove(id);
  }
}
