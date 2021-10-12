import { gql } from '@apollo/client';

export const QUERY_USER = gql`
<<<<<<< HEAD
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      reports {
        _id
        reportText
        createdAt
      }
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

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      reports {
        _id
        reportText
        reportAuthor
        createdAt
      }
    }
  }
=======
	query user($username: String!) {
		user(username: $username) {
			_id
			username
			email
			thoughts {
				_id
				thoughtText
				createdAt
			}
		}
	}
`;

export const QUERY_THOUGHTS = gql`
	query getThoughts {
		thoughts {
			_id
			thoughtText
			thoughtAuthor
			createdAt
		}
	}
`;

export const QUERY_SINGLE_THOUGHT = gql`
	query getSingleThought($thoughtId: ID!) {
		thought(thoughtId: $thoughtId) {
			_id
			thoughtText
			thoughtAuthor
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

export const QUERY_ME = gql`
	query me {
		me {
			_id
			username
			email
			thoughts {
				_id
				thoughtText
				thoughtAuthor
				createdAt
			}
		}
	}
>>>>>>> fd49970be4efb2a5f0b221086d1da773b5bb74f2
`;
