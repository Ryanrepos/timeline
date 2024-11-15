import { Field, InputType, Int } from "@nestjs/graphql";
import { IsInt, IsNotEmpty, IsOptional, Length, Min } from "class-validator";
import { WatchBrand, WatchCategory, WatchLocation } from "../../enums/watch.enum";
import { ObjectId } from "mongoose";

@InputType()

export class WatchInput {
    @IsNotEmpty()
	@Field(() => WatchCategory)
	watchCategory: WatchCategory;

    @IsNotEmpty()
	@Field(() => WatchBrand)
	watchBrand: WatchBrand;

	@IsNotEmpty()
	@Field(() => WatchLocation)
	watchLocation: WatchLocation;

	@IsNotEmpty()
	@Length(3, 100)
	@Field(() => String)
	watchAddress: string;

	@IsNotEmpty()
	@Length(3, 100)
	@Field(() => String)
	watchTitle: string;

	@IsNotEmpty()
	@Field(() => Number)
	watchPrice: number;

	@IsNotEmpty()
	@Field(() => [String])
	watchImages: string[];

	@IsOptional()
	@Length(5, 500)
	@Field(() => String, { nullable: true })
	watchDesc?: string;

	@IsOptional()
	@Field(() => Boolean, { nullable: true })
	watchBarter?: boolean;

	memberId?: ObjectId;

	@IsOptional()
	@Field(() => Date, { nullable: true })
	constructedAt?: Date;
}

@InputType()
class PricesRange {
	@Field(() => Int)
	start: number;

	@Field(() => Int)
	end: number;
}