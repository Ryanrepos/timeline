import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { WatchService } from './watch.service';
import { Watch } from '../../libs/dto/watch/watch';
import { Roles } from '../auth/decorators/roles.decorator';
import { Member } from '../../libs/dto/member/member';
import { MemberType } from '../../libs/enums/member.enum';
import { UseGuards } from '@nestjs/common';
import { RolesGuard } from '../auth/guards/roles.guard';
import { WatchInput } from '../../libs/dto/watch/watch.input';
import { AuthMember } from '../auth/decorators/authMember.decorator';
import { ObjectId } from 'mongoose';

@Resolver()
export class WatchResolver {
    constructor(private readonly watchService: WatchService) {}

    @Roles(MemberType.SELLER)
    @UseGuards(RolesGuard)
    @Mutation(() => Watch)
    public async createWatch(@Args("input") input: WatchInput, 
    @AuthMember('_id') memberId: ObjectId,): Promise<Watch> {
        console.log("createWatch")
        input.memberId = memberId;
        return await this.watchService.createWatch(input);
    }
}
