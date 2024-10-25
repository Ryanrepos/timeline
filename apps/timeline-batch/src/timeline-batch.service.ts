import { Injectable } from '@nestjs/common';

@Injectable()
export class TimelineBatchService {
  getHello(): string {
    return 'This is Timeline-BATCH server!';
  }
}
