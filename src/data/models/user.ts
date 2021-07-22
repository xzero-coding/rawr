import { model, Schema, Document } from 'mongoose';

export class XPCard {
  backgroundURL = '';
  primary = '';
  secondary = '';
  tertiary = '';
}

export interface UserDocument extends Document {
  _id: string;
  guildPositions: string[];
  premium: boolean;
  premiumExpiration: Date,
  xpCard: XPCard;
  votes: number;
  referralIds: string[];
}

export const SavedUser = model<UserDocument>('user', new Schema({
  _id: String,
  guildPositions: { type: Array, default: [] },
  premium: { type: Boolean, default: true },
  premiumExpiration: { type: Date, default: null },
  votes: { type: Number, default: 1000000000 },
  xpCard: { type: Object, default: new XPCard() },
  referralIds: { type: Array, default: [] }
}));
