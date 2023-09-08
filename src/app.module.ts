import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { CatsModule } from './cats/cats.module';
import { UsersModule } from './users/users.module';
import { AppService } from './app.service';
import { StudentModule } from './student/student.module';
import { LessonModule } from './lesson/lesson.module';
import { ContentModule } from './content/content.module';
import { ClassModule } from './class/class.module';

@Module({
  imports: [CatsModule, UsersModule, StudentModule, LessonModule, ContentModule, ClassModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
