import React, { useState, useEffect } from 'react'
import { LOGIN_USER } from '../../utils/mutation';
import Auth from '../../utils/auth';
import { useMutation } from '@apollo/client';

// const [login, { error }] = useMutation(LOGIN_USER);

import { AuthService } from '../../utils/auth'


const LoginForm = () => {
    const [userFormData, setUserFormData] = useState({ username: '', password: '' });
    const [validated] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const [login, { error, data }] = useMutation(LOGIN_USER);

    useEffect(() => {
        error ? setShowAlert(true) : setShowAlert(false);
    }, [error]);


    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserFormData({ ...userFormData, [name]: value });
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        // check if form has everything (as per react-bootstrap docs)
        // try {
        //     const { data } = await login({
        //       variables: { ...userFormData },
        //     });

        try {
            console.log(userFormData)

            // const response = await login({userFormData.username, userFormData.password});
            // const { data } = await login({ variables: { ...userFormData }}
            const response = await login({ variables: { ...userFormData }});


            if (!response.ok) {
                throw new Error('something went wrong!');
            }

            const { token, user } = await response.json();
            console.log(user);
            Auth.login(token);
        } catch (err) {
            console.log(err);
            setShowAlert(true);
        }

        setUserFormData({
            username: '',
            // email: '',
            password: '',
        });
    };



    return (
        <div>
            <form validated={`${validated}`} onSubmit={handleFormSubmit}>
                <div>
                    <label>
                        <input name='username' type='text' placeholder='Username'
                            onChange={handleInputChange}
                            value={userFormData.username}
                            required />


                    </label>
                </div>
                <div>
                    <label>
                        <input name='password' type='text' placeholder='Password'
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

export default LoginForm





