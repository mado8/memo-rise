import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';

import { ADD_USER } from '../utils/API';
import Auth from '../utils/auth';

const SignupForm = () => {
    // set initial form state
    const [userFormData, setUserFormData] = useState({ username: '', email: '', password: '' });
    // set state for form validation
    const [validated] = useState(false);
    // set state for alert
    const [showAlert, setShowAlert] = useState(false);
    const [addUser, { error }] = useMutation(ADD_USER);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserFormData({ ...userFormData, [name]: value });
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        // check if form has everything (as per react-bootstrap docs)
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        try {
            const response = await addUser(userFormData);

            if (!response.ok) {
                throw new Error('something went wrong!');
            }

            const { token, user } = await response.json();
            console.log(user);
            Auth.login(token);
        } catch (err) {
            console.error(err);
            setShowAlert(true);
        }

        setUserFormData({
            username: '',
            email: '',
            password: '',
        });
    };

    return (


        <div>
            <form noValidate validated={validated} onSubmit={handleFormSubmit}>
                <div>
                    <label>
                        <input name='username' type='text' placeholder='Enter a valid username'
                            onChange={handleInputChange}
                            value={userFormData.username}
                            required />


                    </label>
                </div>
                <div>
                    <label>
                        <input name='email' type='text' placeholder='Enter a valid email'
                            onChange={handleInputChange}
                            value={userFormData.username}
                            required />


                    </label>
                </div>
                <div>
                    <label>
                        <input name='password' type='text' placeholder='Enter a valid Password'
                            onChange={handleInputChange}
                            value={userFormData.password}
                            required />
                    </label>
                </div>
                <button type='submit' > Submit</button>
            </form>
        </div>

    );
};

export default SignupForm;
