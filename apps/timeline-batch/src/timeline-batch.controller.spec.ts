import { Test, TestingModule } from '@nestjs/testing';
import { TimelineBatchController } from './timeline-batch.controller';
import { TimelineBatchService } from './timeline-batch.service';

describe('TimelineBatchController', () => {
  let timelineBatchController: TimelineBatchController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [TimelineBatchController],
      providers: [TimelineBatchService],
    }).compile();

    timelineBatchController = app.get<TimelineBatchController>(TimelineBatchController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(timelineBatchController.getHello()).toBe('Hello World!');
    });
  });
});
