import { Module } from '@nestjs/common';
import { TimelineBatchController } from './timeline-batch.controller';
import { TimelineBatchService } from './timeline-batch.service';
import { ConfigModule } from '@nestjs/config'; 

@Module({
  imports: [ConfigModule.forRoot()], // for .env usage],
  controllers: [TimelineBatchController],
  providers: [TimelineBatchService],
})
export class TimelineBatchModule {}
