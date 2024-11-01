import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';
import { MemberService } from './member.service';
import { UseGuards } from '@nestjs/common';
import { LoginInput, MemberInput, MembersInquiry, SellersInquiry } from '../../libs/dto/member/member.input';
import { Member, Members } from '../../libs/dto/member/member';
import { MemberUpdate } from '../../libs/dto/member/member.update';
import { ObjectId } from 'mongoose';
import { AuthGuard } from '../auth/guards/auth.guard';
import { AuthMember } from '../auth/decorators/authMember.decorator';
import { WithoutGuard } from '../auth/guards/without.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { MemberType } from '../../libs/enums/member.enum';
import { RolesGuard } from '../auth/guards/roles.guard';

@Resolver()
export class MemberResolver {
	constructor(private readonly memberService: MemberService) {}

	@Mutation(() => Member)
	public async signup(@Args('input') input: MemberInput): Promise<Member> {
		console.log('Mutation: signup');
		return this.memberService.signup(input);
	}

	@Mutation(() => Member)
	public async login(@Args('input') input: LoginInput): Promise<Member> {
		console.log('Mutation: login');
		return this.memberService.login(input);
	}

    @UseGuards(AuthGuard) // bu api authentication ni tekshiradi
	@Query(() => String)
	public async checkAuth(@AuthMember('memberNick') memberNick: string): Promise<string> {
		console.log('query: checkAuth');
		console.log('memberNick:', memberNick);
		return `Hi ${memberNick}`;
	}

	@Mutation(() => Member)
	public async updateMember(@Args('input') input: MemberUpdate, memberId: ObjectId): Promise<Member> {
		console.log('Mutation: UpdateMember');
		return await this.memberService.updateMember(memberId, input);
	}

    @UseGuards(WithoutGuard)
	@Query(() => Members)
	public async getSellers(@Args('input') input: SellersInquiry, //
	@AuthMember('_id') memberId: ObjectId): Promise<Members> {
		console.log('Query GetAgents');
		return await this.memberService.getSellers(memberId, input);
	}

	/** ADMIN APIs **/

	// Authorization: ADMIN
	@Roles(MemberType.ADMIN)
	@UseGuards(RolesGuard)
	@Query(() => Members)
	public async getAllMembersByAdmin(
		@Args('input') input: MembersInquiry): Promise<Members> {
		console.log('Query getAllMembersByAdmin');
		return await this.memberService.getAllMembersByAdmin(input);
	}

	// Authorization: ADMIN
	@Roles(MemberType.ADMIN)
	@UseGuards(RolesGuard)
	@Mutation(() => Member)
	public async updateMemberByAdmin(@Args('input') input: MemberUpdate): Promise<Member> {
		console.log('mutation: updateMemberByAdmin');
		return await this.memberService.updateMemberByAdmin(input);
	}
}
