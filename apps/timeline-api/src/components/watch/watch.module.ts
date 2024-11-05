import { Module } from '@nestjs/common';
import { WatchResolver } from './watch.resolver';
import { WatchService } from './watch.service';
import { MongooseModule } from '@nestjs/mongoose';
import WatchSchema from '../../schemas/Watch.model';
import { AuthModule } from '../auth/auth.module';
import { ViewModule } from '../view/view.module';

@Module({
  imports: [
    MongooseModule.forFeature ([
      {
        name: "Watch",
        schema: WatchSchema,
      },
  ]),
  AuthModule, ViewModule
  ],
  providers: [WatchResolver, WatchService]
})
export class WatchModule {}
