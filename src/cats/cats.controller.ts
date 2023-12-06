import {
  Body,
  Controller,
  Get,
  HttpCode,
  Param,
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
    return this.catService.findAll();
  }
  @Post()
  @HttpCode(200)
  create(): string {
    return this.catService.create();
  }

  @Get(':id')
  findOne(@Param() params: any): string {
    return this.catService.findOne(params);
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
