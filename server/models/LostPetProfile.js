const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const lostPetProfileSchema = new Schema({
	lostPetAuthor: {
		type: String,
		required: true,
		trim: true,
	},
	lostPetName: {
		type: String,
		trim: true,
	},
	lostPetType: {
		type: String,
		trim: true,
	},
	lostPetCity: {
		type: String,
		trim: true,
	},
	lostPetColor: {
		type: String,
		trim: true,
	},
	lostPetAuthorPhoneNum: {
		type: String,
		trim: true,
	},
	lostPetAuthorEmail: {
		type: String,
		trim: true,
	},
	createdAt: {
		type: Date,
		default: Date.now,
		get: (timestamp) => dateFormat(timestamp),
	},
});

const LostPetProfile = model('LostPetProfile', lostPetProfileSchema);

module.exports = LostPetProfile;
