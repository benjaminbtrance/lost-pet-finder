import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import { ADD_LOST_PET_PROFILE } from '../../utils/mutations';
import { QUERY_ME } from '../../utils/queries';

import Auth from '../../utils/auth';

const LostPetProfileForm = () => {
	const [lostPetName, setlostPetName] = useState('');
	const [lostPetType, setlostPetType] = useState('');
	const [lostPetCity, setlostPetCity] = useState('');
	const [lostPetColor, setlostPetColor] = useState('');
	const [lostPetAuthorPhoneNum, setlostPetAuthorPhoneNum] = useState('');
	const [lostPetAuthorEmail, setlostPetAuthorEmail] = useState('');

	const [addLostPetProfile, { error }] = useMutation(ADD_LOST_PET_PROFILE);

	// 		// update me object's cache
	// 		const { me } = cache.readQuery({ query: QUERY_ME });
	// 		cache.writeQuery({
	// 			query: QUERY_ME,
	// 			data: { me: { ...me, thoughts: [...me.thoughts, addThought] } },
	// 		});
	// 	},
	// });

	const handleFormSubmit = async (event) => {
		event.preventDefault();

		try {
			const { data } = await addLostPetProfile({
				variables: {
					lostPetName,
					lostPetType,
					lostPetCity,
					lostPetColor,
					lostPetAuthorPhoneNum,
					lostPetAuthorEmail,
				},
			});

			setlostPetName('');
			setlostPetType('');
			setlostPetCity('');
			setlostPetColor('');
			setlostPetAuthorPhoneNum('');
			setlostPetAuthorEmail('');
			console.log(data);
		} catch (err) {
			console.error(err);
		}
	};

	const handleChange = (event) => {
		// const { name, value } = event.target;

		// if (name === 'thoughtText' && value.length <= 280) {
		// 	setThoughtText(value);
		// 	setCharacterCount(value.length);
		// }
		const { name, value } = event.target;

		if (name === 'lostPetName') {
			setlostPetName(value);
		} else if (name === 'lostPetType') {
			setlostPetType(value);
		} else if (name === 'lostPetCity') {
			setlostPetCity(value);
		} else if (name === 'lostPetColor') {
			setlostPetColor(value);
		} else if (name === 'lostPetAuthorPhoneNum') {
			setlostPetAuthorPhoneNum(value);
		} else if (name === 'lostPetAuthorEmail') {
			setlostPetAuthorEmail(value);
		}
	};

	return (
		<form onSubmit={handleFormSubmit}>
			<div className="form-group">
				<label for="lostPetName">Pet Name:</label>
				<input
					id="lostPetName"
					name="lostPetName"
					placeholder="What is your pet's name?"
					value={lostPetName}
					className="form-control"
					onChange={handleChange}
				/>
			</div>
			<div className="form-group">
				<label for="lostPetType">Pet Type:</label>
				<input
					id="lostPetType"
					name="lostPetType"
					placeholder="Dog? Cat? ...?"
					value={lostPetType}
					className="form-control"
					onChange={handleChange}
				/>
			</div>
			<div className="form-group">
				<label for="lostPetCity">Pet City:</label>
				<input
					id="lostPetCity"
					name="lostPetCity"
					placeholder="Where is your pet located?"
					value={lostPetCity}
					className="form-control"
					onChange={handleChange}
				/>
			</div>
			<div className="form-group">
				<label for="lostPetColor">Pet Color:</label>
				<input
					id="lostPetColor"
					name="lostPetColor"
					placeholder="What color is your pet?"
					value={lostPetColor}
					className="form-control"
					onChange={handleChange}
				/>
			</div>
			<div className="form-group">
				<label for="lostPetAuthorPhoneNum">Pet Owner's Phone Number:</label>
				<input
					id="lostPetAuthorPhoneNum"
					name="lostPetAuthorPhoneNum"
					placeholder="Enter phone number you want to be contacted."
					value={lostPetAuthorPhoneNum}
					className="form-control"
					onChange={handleChange}
				/>
			</div>
			<div className="form-group">
				<label for="lostPetAuthorEmail">Pet Owner's E-Mail:</label>
				<input
					id="lostPetAuthorEmail"
					name="lostPetAuthorEmail"
					placeholder="Enter the e-mail you want to be contacted?"
					value={lostPetAuthorEmail}
					className="form-control"
					onChange={handleChange}
				/>
			</div>
			<button type="submit" className="btn btn-primary">
				Create Profile
			</button>
		</form>
	);

	// 	{Auth.loggedIn() ? (
	// 		<>
	//
	// 		</>
	// 	) : (
	// 		<p>
	// 			You need to be logged in to view local lost pet reports. Please{' '}
	// 			<Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
	// 		</p>
	// 	)}
};

export default LostPetProfileForm;
