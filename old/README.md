# Escopo
Projeto para aprender NestJS no curso de ADS do Senac.

## Ideia Inicial
Replicar uma estrutura que já fiz com typeORM, em 2020.
Tentar aplicar com typeORM dentro do nest e ver como se comporta.

## Comentario
Acho que se eu remover o graphql da questão eu consigo fazer o projeto rodar da forma que eu quero, muito mais rápido. Cogitar isso.

### Relação das tabelas.
1 -> N
N <-> N
Content N -> 1 Lesson
Lesson N -> 1 Discipline
Discipline N <-> N Student


1 Conteudo, 


## Entidades/Classes/Modulo:
```bash
Student
Discipline
Content
Lesson
```

### Modulos feitos sem relacionamento
```bash
Students
Discipline
Content
Lesson
```

### Modulos que precisa fazer o relacionamento
```bash
Students
Discipline
Content
Lesson
```


# Ideia Secundaria
Assumindo que a ideia inicial seja feita de forma "simples", desenvolver uma estrutura para listas de filmes. (ainda falta finalizar o ER)

## Entidades/Classes/Modulos:
```bash
User
List
Type
Avaliation
Media
Reaction
Category
```


# SETUP
Criar arquivo .env na raiz do projeto.

Adicionar os seguintes campos no .env

DATABASE_HOST=host
DATABASE_NAME=databaseName
DATABASE_USER=databaseUser
DATABASE_PASSWORD=databasePassword
---

## Tecnologias

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

[Graphiql](https://github.com/nestjs/nest) framework TypeScript starter repository.

[TypeORM](https://github.com/nestjs/nest) framework TypeScript starter repository.

[Mysql](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
npm install
```

## Running the app

```bash
# development
npm run start

# watch mode
npm run start:dev

# production mode
npm run start:prod
```

<!-- ## Test

```bash
# unit tests
npm run test

# e2e tests
npm run test:e2e

# test coverage
npm run test:cov
``` -->
