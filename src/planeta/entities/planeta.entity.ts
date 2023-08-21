import { Item } from 'dynamoose/dist/Item';

export class Planeta extends Item {
  id: string;
  nombre: string;
  diametro: string;
  periodo_rotacion: string;
  periodo_orbital: string;
  gravedad: string;
  poblacion: string;
  clima: string;
  terreno: string;
  superficie_acuatica: string;
  residentes: string[];
  peliculas: string[];
  url: string;
  creado: Date;
  editado: Date;
}
