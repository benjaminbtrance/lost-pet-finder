import React, { useState } from 'react';
import LostPetProfileForm from '../components/LostPetProfileForm';
import { Link } from 'react-router-dom';

import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';

import Auth from '../utils/auth';

const CreateProfile = () => {
	return (
		<>
			<div>Create Profile Page</div>
			<LostPetProfileForm />
		</>
	);
};

export default CreateProfile;
