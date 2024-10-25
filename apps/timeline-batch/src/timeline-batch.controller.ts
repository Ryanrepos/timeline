import { Controller, Get } from '@nestjs/common';
import { TimelineBatchService } from './timeline-batch.service';

@Controller()
export class TimelineBatchController {
  constructor(private readonly timelineBatchService: TimelineBatchService) {}

  @Get()
  getHello(): string {
    return this.timelineBatchService.getHello();
  }
}
