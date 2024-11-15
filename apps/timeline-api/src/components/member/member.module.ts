import { Module } from '@nestjs/common';
import { MemberResolver } from './member.resolver';
import { MemberService } from './member.service';
import { MongooseModule } from '@nestjs/mongoose';
import memberSchema from '../../schemas/Member.model';
import { AuthService } from '../auth/auth.service';
import { AuthModule } from '../auth/auth.module';
import { ViewModule } from '../view/view.module';
import { LikeModule } from '../like/like.module';

@Module({
	imports: [MongooseModule.forFeature([
		{	
			name: "Member", 
			schema: memberSchema,
		}
	]), 
  AuthModule, ViewModule, LikeModule
	// MongooseModule.forFeature([
	// 	{
	// 		name: 'Follow',
	// 		schema: FollowSchema,
	// 	},
	// ]),

],
	providers: [MemberResolver, MemberService],
	exports: [MemberService],
})
export class MemberModule {}