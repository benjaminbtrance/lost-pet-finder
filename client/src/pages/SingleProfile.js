import React from 'react';

// Import the `useParams()` hook
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import { QUERY_SINGLE_PROFILE } from '../utils/queries';
import MapComponent from '../components/Map/MapComponent';

const SingleProfile = () => {
	// Use `useParams()` to retrieve value of the route parameter `:profileId`
	const { profileId } = useParams();

	console.log(profileId);

	const { loading, data } = useQuery(QUERY_SINGLE_PROFILE, {
		// pass URL parameter
		variables: { profileId: profileId },
	});

	const profile = data?.profile || {};

	if (loading) {
		return <div>Loading...</div>;
	}
	return (
		<div className="my-3">
			<h3 className="card-header bg-dark text-light p-2 m-0">
				{profile.lostPetName} <br />
				<span style={{ fontSize: '1rem' }}>
					had this report on {profile.createdAt}
				</span>
			</h3>

			<div id="wrapper">
				<div className="m-3 p-4"></div>
				<MapComponent />
			</div>
		</div>
	);
};

export default SingleProfile;
