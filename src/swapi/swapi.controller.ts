import { Controller, Get, Param } from '@nestjs/common';
import { SwapiService } from './swapi.service';

@Controller('swapi')
export class SwapiController {
  constructor(private readonly swapiService: SwapiService) {}

  @Get('/planetas')
  findAll() {
    return this.swapiService.findAll();
  }

  @Get('/planetas/:id')
  findOne(@Param('id') id: string) {
    return this.swapiService.findOne(+id);
  }
}
