import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Res,
} from '@nestjs/common';
import { CatsService } from './cats.service';
import { CreateCatDto } from './dto/create-cat.dto';
import { Response } from 'express';

@Controller('cats')
export class CatsController {
  constructor(private readonly catService: CatsService) {}
  @Get()
  findAll(): string {
    try {
      return this.catService.findAll();
    } catch (error) {
      throw new HttpException({
        status: HttpStatus.FORBIDDEN,
        error: 'This is a custom message',
      }, HttpStatus.FORBIDDEN, {
        cause: error
      });
    }
  }
  @Post()
  @HttpCode(200)
  create(): string {
    return this.catService.create();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id:number){
    return this.catService.findOne(id);
  }

  @Post('body')
  insertCatsData(@Body() createCatDto: CreateCatDto): string {
    return this.catService.insertCatsData(createCatDto);
  }

  @Post('libarayUse')
  @HttpCode(200)
  libraryUsefunc(@Res() res: Response) {
    this.catService.libraryUseFunc(res);
  }
}
