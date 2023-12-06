import { Injectable } from '@nestjs/common';
import { StudentsDto } from './dto/students.dto';

@Injectable()
export class StudentsService {
  private students = [];
  findAll() {
    return this.students;
  }
  findOne(id: number) {
    return this.students[id];
  }
  create(student: StudentsDto) {
    this.students.push(student);
    return this.students;
  }
  update(id: number, students: StudentsDto) {
    this.students[id] = students;
    return this.students;
  }
  delete(id: number) {
    this.students.splice(id, 1);
    return this.students;
  }
}
