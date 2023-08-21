import { Test, TestingModule } from '@nestjs/testing';
import { PlanetaService } from './planeta.service';

describe('PlanetaService', () => {
  let service: PlanetaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PlanetaService],
    }).compile();

    service = module.get<PlanetaService>(PlanetaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
