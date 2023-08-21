import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PlanetaService } from './planeta.service';
import { CreatePlanetaDto } from './dto/create-planeta.dto';
import { ApiBody } from '@nestjs/swagger';

@Controller('planetas')
export class PlanetaController {
  constructor(private readonly planetaService: PlanetaService) {}

  @ApiBody({ type: CreatePlanetaDto })
  @Post()
  create(@Body() createPlanetaDto: CreatePlanetaDto) {
    return this.planetaService.create(createPlanetaDto);
  }

  @Get()
  findAll() {
    return this.planetaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.planetaService.findOne(+id);
  }
}
