import { HttpStatus, Injectable } from '@nestjs/common';

@Injectable()
export class CatsService {
  findAll(): string {
    return 'This action returns all cats by service';
  }
  create(): string {
    return 'This action adds a new cat by service';
  }
  findOne(params: any): string {
    console.log(params.id);
    return `This action returns a #${params.id} cat`;
  }
  insertCatsData(body: any) {
    return `cats created with name: ${body.name}, price: ${body.age} and breed:${body.breed}`;
  }
  libraryUseFunc(response: any) {
    response.status(HttpStatus.OK).send('tested by library');
  }
}
