import * as dynamoose from 'dynamoose';

export const PlanetaSchema = new dynamoose.Schema(
  {
    nombre: {
      type: String,
      hashKey: true,
      required: true,
    },
    diametro: String,
    periodo_rotacion: String,
    periodo_orbital: String,
    gravedad: String,
    poblacion: String,
    clima: String,
    terreno: String,
    superficie_acuatica: String,
    residentes: {
      type: Array,
      schema: [String],
    },
    peliculas: {
      type: Array,
      schema: [String],
    },
    url: String,
    creado: String,
    editado: String,
  },
  {
    timestamps: true,
  },
);
