import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { StudentsService } from './students.service';
import { StudentsDto } from './dto/students.dto';

@Controller('students')
export class StudentsController {
  constructor(private readonly studentservice: StudentsService) {}

  @Get()
  findAll() {
    return this.studentservice.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.studentservice.findOne(id);
  }

  @Post()
  create(@Body() studentDto: StudentsDto) {
    return this.studentservice.create(studentDto);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() updateDto: StudentsDto) {
    return this.studentservice.update(id, updateDto);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.studentservice.delete(id);
  }
}
