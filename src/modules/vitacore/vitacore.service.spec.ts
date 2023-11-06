import { Test, TestingModule } from '@nestjs/testing';
import { VitacoreService } from './vitacore.service';

describe('VitacoreService', () => {
  let service: VitacoreService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VitacoreService],
    }).compile();

    service = module.get<VitacoreService>(VitacoreService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
