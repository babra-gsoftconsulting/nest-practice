import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { StudentsModule } from './students/students.module';

@Module({
  imports: [CatsModule, StudentsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
