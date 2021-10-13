import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
	mutation login($email: String!, $password: String!) {
		login(email: $email, password: $password) {
			token
			user {
				_id
				username
			}
		}
	}
`;

export const ADD_USER = gql`
	mutation addUser($username: String!, $email: String!, $password: String!) {
		addUser(username: $username, email: $email, password: $password) {
			token
			user {
				_id
				username
			}
		}
	}
`;

export const ADD_REPORT = gql`
	mutation addReport($reportText: String!) {
		addReport(reportText: $reportText) {
			_id
			reportText
			reportAuthor
			createdAt
			comments {
				_id
				commentText
			}
		}
	}
`;

export const ADD_LOST_PET_PROFILE = gql`
	mutation addLostPetProfile(
		$lostPetName: String
		$lostPetType: String
		$lostPetCity: String
		$lostPetColor: String
	) {
		addLostPetProfile(
			lostPetName: $lostPetName
			lostPetType: $lostPetType
			lostPetCity: $lostPetCity
			lostPetColor: $lostPetColor
		) {
			_id
			lostPetAuthor
			lostPetName
			lostPetType
			lostPetCity
			lostPetColor
			createdAt
		}
	}
`;

export const ADD_COMMENT = gql`
	mutation addComment($reportId: ID!, $commentText: String!) {
		addComment(reportId: $reportId, commentText: $commentText) {
			_id
			reportText
			reportAuthor
			createdAt
			comments {
				_id
				commentText
				createdAt
			}
		}
	}
`;
