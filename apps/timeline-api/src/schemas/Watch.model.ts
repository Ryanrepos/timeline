import { Schema } from 'mongoose';
import { WatchCategory, WatchLocation, WatchStatus } from '../libs/enums/watch.enum';

const WatchSchema = new Schema(
	{
		watchCategory: {
			type: String,
			enum: WatchCategory,
			required: true,
		},

		watchStatus: {
			type: String,
			enum: WatchStatus,
			default: WatchStatus.ACTIVE,
		},

		watchLocation: {
			type: String,
			enum: WatchLocation,
			required: true,
		},

		watchAddress: {
			type: String,
			required: true,
		},

		watchTitle: {
			type: String,
			required: true,
		},

		watchPrice: {
			type: Number,
			required: true,
		},

		watchViews: {
			type: Number,
			default: 0,
		},

		watchLikes: {
			type: Number,
			default: 0,
		},

		watchComments: {
			type: Number,
			default: 0,
		},

		watchRank: {
			type: Number,
			default: 0,
		},

		watchImages: {
			type: [String],
			required: true,
		},

		watchDesc: {
			type: String,
		},

		watchBarter: {
			type: Boolean,
			default: false,
		},

		memberId: {
			type: Schema.Types.ObjectId,
			required: true,
			ref: 'Member',
		},

		soldAt: {
			type: Date,
		},

		deletedAt: {
			type: Date,
		},

		constructedAt: {
			type: Date,
		},
	},
	{ timestamps: true, collection: 'properties' },
);

WatchSchema.index({ watchCategory: 1, watchLocation: 1, watchTitle: 1, watchPrice: 1 }, { unique: true });

export default WatchSchema;