
import { Injectable } from '@nestjs/common';
import { User } from './interfaces/users.interface';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  private readonly users: User[] = [];

  create(user: User) {
    this.users.push(user);
  }

  findAll(): User[] {
    return this.users;
  }

  findOne(name: string) {
    return this.users.find((user) => user.name === name)
  }

  findOneById(id: number) {
    return this.users.find((user) => user.id === id)
  }

  updateUser(id: number, UpdateUserDto: UpdateUserDto) {
    let user = this.users.find((user) => user.id === id);

    if (user === undefined) {
      return
    }

    const { name, email, password } = UpdateUserDto;

    user.name = name;
    user.email = email;
    user.password = password;

    return user;
  }

  patchUser(id: number, UpdateUserDto: UpdateUserDto) {
    let user = this.users.find((user) => user.id === id);

    if (user === undefined) {
      return
    }

    const { name, email, password } = UpdateUserDto;

    if (name) {
      user.name = name;
    }

    if (email) {
      user.email = email;
    }

    if (password) {
      user.password = password;
    }
    
    return user;
  }

  deleteUser(id: number) {
    const index = this.users.findIndex((user) => user.id === id)
    if (index == -1) {
      return `Não encontrado #${id} na lista de usuarios`
    }

    this.users.splice(index, 1)
    return this.users;
  }
}