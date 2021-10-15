import React from 'react';
import { useQuery } from '@apollo/client';

import ProfileList from '../components/ProfileList';

import { QUERY_LOST_PET_PROFILES } from '../utils/queries';
import MapComponent from '../components/Map/MapComponent';

const Home = () => {
	const { loading, data } = useQuery(QUERY_LOST_PET_PROFILES);
	// const reports = data?.reports || [];
	const profiles = data?.profiles || [];
	// console.log(data);

	return (
		<main>
			<div className="flex-row justify-center">
				<div
					className="col-12 col-md-10 mb-3 p-3"
					style={{ border: '1px dotted #1a1a1a' }}
				>
					<MapComponent />
				</div>
				<div className="col-12 col-md-8 mb-3">
					{loading ? (
						<div>Loading...</div>
					) : (
						<ProfileList profiles={profiles} title="Recent lost pet profiles" />
					)}
				</div>
			</div>
		</main>
	);
};

export default Home;
