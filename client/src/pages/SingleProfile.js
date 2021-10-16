import React from 'react';

// Import the `useParams()` hook
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import { QUERY_SINGLE_PROFILE } from '../utils/queries';
import MapComponent from '../components/Map/MapComponent';

const SingleProfile = () => {
	// Use `useParams()` to retrieve value of the route parameter `:profileId`
	const { profileId } = useParams();

	const { loading, data } = useQuery(QUERY_SINGLE_PROFILE, {
		// pass URL parameter
		variables: { profileId: profileId },
	});

	console.log(data);

	const profile = data?.profile || {};

	if (loading) {
		return <div>Loading...</div>;
	}
	return (
		<div className="my-3">
			<h3 className="card-header bg-dark text-light p-2 m-0">
				{profile.lostPetAuthor} <br />
				<span style={{ fontSize: '1rem' }}>
					had this reported on {profile.createdAt}
				</span>
			</h3>
			<MapComponent />
			<div className="bg-light py-4">
				<blockquote className="p-4 block-quote">
					Pet Name: {profile.lostPetName}
				</blockquote>
				<blockquote className="p-4 block-quote">
					Pet Type: {profile.lostPetType}
				</blockquote>
				<blockquote className="p-4 block-quote">
					City: {profile.lostPetCity}
				</blockquote>
				<blockquote className="p-4 block-quote">
					Color: {profile.lostPetColor}
				</blockquote>
				<blockquote className="p-4 block-quote">
					Owner's Phone Number: {profile.lostPetAuthorPhoneNum}
				</blockquote>
				<blockquote className="p-4 block-quote">
					Owner's E-Mail: {profile.lostPetAuthorEmail}
				</blockquote>
			</div>
		</div>
	);
};

export default SingleProfile;
