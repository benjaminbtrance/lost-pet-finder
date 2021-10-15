import { gql } from '@apollo/client';

export const QUERY_USER = gql`
	query user($username: String!) {
		user(username: $username) {
			_id
			username
			email
		}
	}
`;

export const QUERY_REPORTS = gql`
	query getReports {
		reports {
			_id
			reportText
			reportAuthor
			createdAt
		}
	}
`;

export const QUERY_PROFILE = gql`
	query getprofiles {
		profiles {
			_id
			lostPetName
			createdAt
		}
	}
`;

export const QUERY_LOST_PET_PROFILES = gql`
	query getLostPetProfiles {
		profiles {
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

export const QUERY_SINGLE_REPORT = gql`
	query getSingleReport($reportId: ID!) {
		report(reportId: $reportId) {
			_id
			reportText
			reportAuthor
			createdAt
			comments {
				_id
				commentText
				commentAuthor
				createdAt
			}
		}
	}
`;

export const QUERY_SINGLE_PROFILE = gql`
	query getSingleProfile($profileId: ID!) {
		profile(profileId: $profileId) {
			_id
			createdAt
		}
	}
`;

export const QUERY_ME = gql`
	query me {
		me {
			_id
			username
			email
		}
	}
`;
