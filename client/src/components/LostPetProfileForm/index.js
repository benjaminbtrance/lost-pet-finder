import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import { ADD_LOST_PET_PROFILE } from '../../utils/mutations';
import { QUERY_ME } from '../../utils/queries';

import Auth from '../../utils/auth';

const LostPetProfileForm = () => {
	const [lostPetName, setlostPetName] = useState('');
	const [lostPetType, setlostPetType] = useState('');

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
					// lostPetCity,
					// lostPetColor,
				},
			});

			setlostPetName('');
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
		const { value } = event.target;
		setlostPetName(value);
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
				<button type="submit">Create Profile</button>
			</div>
		</form>
	);
	// <div>
	// 	<h3>Search for your pet based on your location</h3>

	// 	{Auth.loggedIn() ? (
	// 		<>
	// 			<p
	// 				className={`m-0 ${
	// 					characterCount === 280 || error ? 'text-danger' : ''
	// 				}`}
	// 			>
	// 				Character Count: {characterCount}/280
	// 			</p>
	// 			<form
	// 				className="flex-row justify-center justify-space-between-md align-center"
	// 				onSubmit={handleFormSubmit}
	// 			>
	// 				<div className="col-12 col-lg-9">
	// 					<textarea
	// 						name="thoughtText"
	// 						placeholder="Here's a new thought..."
	// 						value={thoughtText}
	// 						className="form-input w-100"
	// 						style={{ lineHeight: '1.5', resize: 'vertical' }}
	// 						onChange={handleChange}
	// 					></textarea>
	// 				</div>

	// 				<div className="col-12 col-lg-3">
	// 					<button className="btn btn-primary btn-block py-3" type="submit">
	// 						Add Thought
	// 					</button>
	// 				</div>
	// 				{error && (
	// 					<div className="col-12 my-3 bg-danger text-white p-3">
	// 						{error.message}
	// 					</div>
	// 				)}
	// 			</form>
	// 		</>
	// 	) : (
	// 		<p>
	// 			You need to be logged in to view local lost pet reports. Please{' '}
	// 			<Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
	// 		</p>
	// 	)}
	// </div>
};

export default LostPetProfileForm;
