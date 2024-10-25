import { Module } from '@nestjs/common';
import { TimelineBatchController } from './timeline-batch.controller';
import { TimelineBatchService } from './timeline-batch.service';

@Module({
  imports: [],
  controllers: [TimelineBatchController],
  providers: [TimelineBatchService],
})
export class TimelineBatchModule {}
