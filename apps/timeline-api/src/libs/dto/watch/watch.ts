import { Field, Int, ObjectType } from "@nestjs/graphql";
import { WatchCategory, WatchLocation, WatchStatus } from "../../enums/watch.enum";
import { ObjectId } from "mongoose";
import { MeLiked } from "../like/like";
import { Member } from "../member/member";

@ObjectType()
export class Watch {
	@Field(() => String)
	_id: ObjectId;

	@Field(() => WatchCategory)
	watchCategory: WatchCategory;

	@Field(() => WatchStatus)
	watchStatus: WatchStatus;

	@Field(() => WatchLocation)
	watchLocation: WatchLocation;

	@Field(() => String)
	watchTitle: string;

	@Field(() => Number)
	watchPrice: number;

	@Field(() => Int)
    watchViews: number;

	@Field(() => Int)
	watchLikes: number;

	@Field(() => Int)
	watchComments: number;

	@Field(() => Int)
    watchRank: number;

	@Field(() => [String])
	watchImages: string[];

	@Field(() => String, { nullable: true })
	watchDesc?: string;

	@Field(() => Boolean)
	watchBarter: boolean;

	@Field(() => String)
	memberId: ObjectId;

	@Field(() => Date, { nullable: true })
	soldAt?: Date;

	@Field(() => Date, { nullable: true })
	deletedAt?: Date;

	@Field(() => Date, { nullable: true })
	constructedAt?: Date;

	@Field(() => Date)
	createdAt: Date;

	@Field(() => Date)
	updatedAt: Date;

	/** From Aggregation **/

	@Field(() => [MeLiked], {nullable: true})
	meLiked?: MeLiked[];

	@Field(() => Member, { nullable: true })
	memberData?: Member;

}