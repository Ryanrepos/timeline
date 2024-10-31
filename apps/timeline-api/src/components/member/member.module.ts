import { Module } from '@nestjs/common';
import { MemberResolver } from './member.resolver';
import { MemberService } from './member.service';
import { MongooseModule } from '@nestjs/mongoose';
import memberSchema from '../../schemas/Member.model';
import { AuthService } from '../auth/auth.service';
import { AuthModule } from '../auth/auth.module';

@Module({
	imports: [MongooseModule.forFeature([
		{	
			name: "Member", 
			schema: memberSchema,
		}
	]), 
  AuthModule,
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