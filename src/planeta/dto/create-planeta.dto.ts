import { IsArray, IsDate, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreatePlanetaDto {
  @ApiProperty()
  @IsString()
  nombre: string;

  @ApiProperty()
  @IsString()
  diametro: string;

  @ApiProperty()
  @IsString()
  periodo_rotacion: string;

  @ApiProperty()
  @IsString()
  periodo_orbital: string;

  @ApiProperty()
  @IsString()
  gravedad: string;

  @ApiProperty()
  @IsString()
  poblacion: string;

  @ApiProperty()
  @IsString()
  clima: string;

  @ApiProperty()
  @IsString()
  terreno: string;

  @ApiProperty()
  @IsString()
  superficie_acuatica: string;

  @ApiProperty()
  @IsArray()
  @IsString({ each: true })
  residentes: string[];

  @ApiProperty()
  @IsArray()
  @IsString({ each: true })
  peliculas: string[];

  @ApiProperty()
  @IsString()
  url: string;

  @ApiProperty()
  @IsDate()
  creado: Date;

  @ApiProperty()
  @IsDate()
  editado: Date;
}
