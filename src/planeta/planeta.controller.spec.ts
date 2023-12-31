import { Test, TestingModule } from '@nestjs/testing';
import { PlanetaController } from './planeta.controller';
import { PlanetaService } from './planeta.service';

describe('PlanetaController', () => {
  let controller: PlanetaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PlanetaController],
      providers: [PlanetaService],
    }).compile();

    controller = module.get<PlanetaController>(PlanetaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
