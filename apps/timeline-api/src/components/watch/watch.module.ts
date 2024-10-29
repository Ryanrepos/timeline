import { Module } from '@nestjs/common';
import { WatchResolver } from './watch.resolver';
import { WatchService } from './watch.service';

@Module({
  providers: [WatchResolver, WatchService]
})
export class WatchModule {}
