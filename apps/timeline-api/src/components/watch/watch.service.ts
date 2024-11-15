import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { WatchInput } from '../../libs/dto/watch/watch.input';
import { Watch } from '../../libs/dto/watch/watch';
import { Message } from '../../libs/enums/common.enum';
import { MemberService } from '../member/member.service';

@Injectable()
export class WatchService {
	constructor(@InjectModel('Watch') private readonly watchModel: Model<Watch>,
        private memberService: MemberService,
    ){}

	public async createWatch(input: WatchInput): Promise<Watch> {
		try {
			const result = await this.watchModel.create(input);
			// increase watch count...
            await this.memberService.memberStatsEditor({
                _id: result.memberId,
                targetKey: "memberWatches",
                modifier: 1,
            });

            return result;
		} catch (err) {
			console.log('Error, Service.model:', err.message);
            throw new BadRequestException(Message.CREATE_FAILED);
		}
	}
}
