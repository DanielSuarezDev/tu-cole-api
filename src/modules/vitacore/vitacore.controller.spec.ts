import { Test, TestingModule } from '@nestjs/testing';
import { VitacoreController } from './vitacore.controller';

describe('VitacoreController', () => {
  let controller: VitacoreController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VitacoreController],
    }).compile();

    controller = module.get<VitacoreController>(VitacoreController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
