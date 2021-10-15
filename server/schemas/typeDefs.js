const { gql } = require('apollo-server-express');

const typeDefs = gql`
	type User {
		_id: ID
		username: String
		email: String
		password: String
		profiles: [LostPetProfile]
	}

	type LostPetProfile {
		_id: ID
		lostPetAuthor: String
		lostPetName: String
		lostPetType: String
		lostPetCity: String
		lostPetColor: String
		lostPetAuthorPhoneNum: String
		lostPetAuthorEmail: String
		createdAt: String
	}

	type Report {
		_id: ID
		reportText: String
		reportAuthor: String
		createdAt: String
		comments: [Comment]!
	}

	type Comment {
		_id: ID
		commentText: String
		commentAuthor: String
		createdAt: String
	}

	type Auth {
		token: ID!
		user: User
	}

	type Query {
		users: [User]
		user(username: String!): User
		reports(username: String): [Report]
		report(reportId: ID!): Report
		profiles(username: String): [LostPetProfile]
		profile(profileId: ID!): LostPetProfile
		me: User
	}

	type Mutation {
		addUser(username: String!, email: String!, password: String!): Auth
		login(email: String!, password: String!): Auth
		addLostPetProfile(
			lostPetName: String
			lostPetType: String
			lostPetCity: String
			lostPetColor: String
			lostPetAuthorPhoneNum: String
			lostPetAuthorEmail: String
		): LostPetProfile
		addReport(reportText: String!): Report
		addComment(reportId: ID!, commentText: String!): Report
		removeReport(reportId: ID!): Report
		removeComment(reportId: ID!, commentId: ID!): Report
	}
`;

module.exports = typeDefs;
