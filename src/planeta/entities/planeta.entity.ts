import { Item } from 'dynamoose/dist/Item';

export class Planeta extends Item {
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
  creado: string;
  editado: string;
}
