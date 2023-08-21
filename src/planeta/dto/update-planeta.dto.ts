import { PartialType } from '@nestjs/mapped-types';
import { CreatePlanetaDto } from './create-planeta.dto';
import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdatePlanetaDto extends PartialType(CreatePlanetaDto) {
  @ApiProperty()
  @IsString()
  id: string;
}
