import * as dynamoose from 'dynamoose';

export const PlanetaSchema = new dynamoose.Schema(
  {
    id: {
      type: String,
      hashKey: true,
      required: true,
    },
    nombre: String,
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
