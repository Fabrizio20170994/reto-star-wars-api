import { Module } from '@nestjs/common';
import { PlanetaModule } from './planeta/planeta.module';

@Module({
  imports: [PlanetaModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
