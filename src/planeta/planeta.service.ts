import { Injectable } from '@nestjs/common';
import { CreatePlanetaDto } from './dto/create-planeta.dto';
import { UpdatePlanetaDto } from './dto/update-planeta.dto';
import { Model } from 'dynamoose/dist/Model';
import { Planeta } from './entities/planeta.entity';
import { PlanetaSchema } from './entities/planeta.schema';
import * as dynamoose from 'dynamoose';

@Injectable()
export class PlanetaService {
  private dbInstance: Model<Planeta>;

  constructor() {
    this.dbInstance = dynamoose.model<Planeta>('planetas', PlanetaSchema, {
      create: false,
    });
  }

  create(createPlanetaDto: CreatePlanetaDto) {
    console.info(dynamoose.aws.ddb.DynamoDB);
    return this.dbInstance.create(createPlanetaDto);
  }

  findAll() {
    return `This action returns all planeta`;
  }

  findOne(id: number) {
    return `This action returns a #${id} planeta`;
  }

  update(id: number, updatePlanetaDto: UpdatePlanetaDto) {
    return `This action updates a #${id} planeta`;
  }

  remove(id: number) {
    return `This action removes a #${id} planeta`;
  }
}
