import mongoose, { Schema, Document } from 'mongoose';

interface IOrganizer extends Document {
  orgName: string;
  orgEmail: string;
  description?: string;
  bannerPhoto?: string;
  twoFactorActivated: boolean;
  createdAt: Date;
  socials: string[];
  members: string[];
  eventsCreated: mongoose.Types.ObjectId[];
}

const organizerSchema: Schema = new Schema({
  orgName: { type: String, unique: true, required: true },
  orgEmail: { type: String, unique: true, required: true },
  description: { type: String },
  bannerPhoto: { type: String },
  twoFactorActivated: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
  socials: [String],
  members: [String],
  eventsCreated: [{ type: Schema.Types.ObjectId, ref: 'Tournament' }],
});

const Organizer = mongoose.model<IOrganizer>('Organizer', organizerSchema);

export default Organizer;
