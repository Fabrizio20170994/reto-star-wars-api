import { Module } from '@nestjs/common';
import { PlanetaModule } from './planeta/planeta.module';
import { SwapiModule } from './swapi/swapi.module';

@Module({
  imports: [PlanetaModule, SwapiModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
