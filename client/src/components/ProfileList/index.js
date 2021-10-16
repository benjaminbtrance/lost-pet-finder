import React from 'react';
import { Link } from 'react-router-dom';

const ProfileList = ({ profiles, showUsername = true }) => {
	if (!profiles.length) {
		return <h3>No Reports Yet</h3>;
	}

	return (
		<div>
			{profiles &&
				profiles.map((profile) => (
					<div key={profile._id} className="card mb-3">
						<h4 className="card-header bg-primary text-light p-2 m-0">
							{showUsername ? (
								<Link
									className="text-light"
									to={`/profiles/${profile.lostPetAuthor}`}
								>
									{profile.lostPetAuthor} <br />
									<span style={{ fontSize: '1rem' }}>
										created this profile on {profile.createdAt}
									</span>
								</Link>
							) : (
								<>
									<span style={{ fontSize: '1rem' }}>
										You had this profile on {profile.createdAt}
									</span>
								</>
							)}
						</h4>
						<div className="card-body bg-light p-2">
							<p>Pet Name: {profile.lostPetName}</p>
							<p>Pet Type: {profile.lostPetType}</p>
							<p>Pet Color: {profile.lostPetColor}</p>
							<p>City: {profile.lostPetCity}</p>
						</div>
						<Link
							className="btn btn-primary btn-block btn-squared"
							to={`/profile/${profile._id}`}
						>
							Click here to help find this pet.
						</Link>
					</div>
				))}
		</div>
	);
};

export default ProfileList;
