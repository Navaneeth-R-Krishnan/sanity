const mongoose = require('mongoose');
const { Schema } = mongoose;


const gamesSchema = new Schema({
  name: { type: String, unique: true, required: true },
  category: { type: String, required: true },
  linkedTournaments: [{ type: Schema.Types.ObjectId, ref: 'Tournament' }],
  profile: { type: String, required: true },
  gameBannerPhoto: { type: String, required: true },
});


const organizerSchema = new Schema({
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


const tournamentSchema = new Schema({
  tournamentName: { type: String, required: true },
  tournamentDates: {
    created: { type: Date, default: Date.now },
    started: { type: Date },
    ended: { type: Date },
  },
  schedules: { type: Schema.Types.Mixed },
  organizerId: { type: Schema.Types.ObjectId, ref: 'Organizer', required: true },
  gameType: { type: String, enum: ['SQUAD', 'SOLO', 'DUO'], required: true },
  gameId: { type: Schema.Types.ObjectId, ref: 'Games', required: true },
  links: { type: Schema.Types.Mixed },
  gameBannerPhoto: { type: String },
  results: [{ type: Schema.Types.Mixed }],
  teamsRegistered: [{
    id: { type: Schema.Types.ObjectId },
    name: { type: String, required: true },
    members: [{ type: Schema.Types.ObjectId }],
  }],
  rounds: [{ type: Schema.Types.Mixed }],
  teamSize: { type: Number, required: true },
  prize: [{ type: Schema.Types.Mixed }],
  howToX: [String],
  rules: { type: String, required: true },
  slots: { type: Number, required: true },
  email: { type: String, required: true },
  registeredNumber: { type: Number, default: 0 },
});


const Games = mongoose.model('Games', gamesSchema);
const Organizer = mongoose.model('Organizer', organizerSchema);
const Tournament = mongoose.model('Tournament', tournamentSchema);


module.exports = {
  Games,
  Organizer,
  Tournament,
};
