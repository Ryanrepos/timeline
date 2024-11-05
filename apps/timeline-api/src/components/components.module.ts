import { Module } from '@nestjs/common';
import { MemberModule } from './member/member.module';
import { AuthModule } from './auth/auth.module';
import { WatchModule } from './watch/watch.module';
import { ViewModule } from './view/view.module';
import { FollowModule } from './follow/follow.module';
import { CommentModule } from './comment/comment.module';
import { LikeModule } from './like/like.module';

@Module({
  imports: [
    MemberModule, 
    AuthModule, 
    WatchModule, 
    ViewModule, 
    FollowModule, 
    CommentModule, 
    LikeModule]
})
export class ComponentsModule {}
