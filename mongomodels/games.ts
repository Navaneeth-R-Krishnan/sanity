import mongoose, { Schema, Document } from 'mongoose';

interface IGame extends Document {
  name: string;
  category: string;
  linkedTournaments: mongoose.Types.ObjectId[];
  profile: string;
  gameBannerPhoto: string;
}

const gamesSchema: Schema = new Schema({
  name: { type: String, unique: true, required: true },
  category: { type: String, required: true },
  linkedTournaments: [{ type: Schema.Types.ObjectId, ref: 'Tournament' }],
  profile: { type: String, required: true },
  gameBannerPhoto: { type: String, required: true },
});

const Games = mongoose.model<IGame>('Games', gamesSchema);

export default Games;
