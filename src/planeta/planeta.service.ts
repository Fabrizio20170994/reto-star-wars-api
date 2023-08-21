import { Injectable } from '@nestjs/common';
import { CreatePlanetaDto } from './dto/create-planeta.dto';
import { UpdatePlanetaDto } from './dto/update-planeta.dto';
import { Model } from 'dynamoose/dist/Model';
import { Planeta } from './entities/planeta.entity';
import { PlanetaSchema } from './entities/planeta.schema';
import * as dynamoose from 'dynamoose';
import { uuid } from 'uuidv4';

@Injectable()
export class PlanetaService {
  private dbInstance: Model<Planeta>;

  constructor() {
    this.dbInstance = dynamoose.model<Planeta>('planetas', PlanetaSchema, {
      create: false,
    });
  }

  create(createPlanetaDto: CreatePlanetaDto) {
    return this.dbInstance.create({ id: uuid(), ...createPlanetaDto });
  }

  findAll() {
    return this.dbInstance.scan().exec();
  }

  findOne(id: number) {
    return this.dbInstance.query('id').contains(id).exec();
  }
}
