import { Controller, Get, Post, Body, Param, Put, Patch, Delete } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersService } from './users.service';
import { User } from './interfaces/users.interface';

@Controller('users')
export class UsersController {
  constructor(private UserService: UsersService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    this.UserService.create(createUserDto);
  }

  @Get()
  async findAll(): Promise<User[]> {
    return this.UserService.findAll();
  }

  @Get(':name')
  async findOne(@Param('name') name: string) {
    return this.UserService.findOne(name);
  }

  @Get(':id')
  async findOneById(@Param('id') id: number) {
    return this.UserService.findOneById(id);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() UpdateUserDto: UpdateUserDto) {
    return this.UserService.updateUser(id, UpdateUserDto);
  }

  @Patch(':id')
  async updateUser(@Param() { id }, @Body() UpdateUserDto: UpdateUserDto) {
    return this.UserService.patchUser(id, UpdateUserDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    return this.UserService.deleteUser(id);
  }
}