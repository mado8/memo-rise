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
    const [login, { error }] = useMutation(LOGIN_USER);

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
            const response = await login({variables: { ...userFormData }});

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
        <>
          <div>
            <div id='login-form-container'>
              <form id='login-form' noValidate validated={validated} onSubmit={handleFormSubmit}>
                <div id='form-container'>
                  <div id='form-header'>
                    <h3>Login</h3>
                  </div>
                  <div id="form-input-container">
                    <label>
                      <input
                        className='form-input'
                        name='username'
                        type='text'
                        placeholder='Username'
                        name='username' type='text' placeholder='Username'
                        onChange={handleInputChange}
                        value={userFormData.username}
                        required
                      />
                    </label>
                    <label>
                      <input
                        className='form-input'
                        name='email'
                        type='email'
                        placeholder='Email'
                      />
                    </label>
                    <label>
                      <input
                        className='form-input'
                        name='password'
                        type='text'
                        placeholder='Password'
                        name='password' type='text' placeholder='Password'
                        onChange={handleInputChange}
                        value={userFormData.password}
                        required
                      />
                    </label>
                  </div>
                  <div id="form-buttons">
                    <button id='login-submit' type='submit'>
                      Login
                    </button>
                    <div>
                      <button id='signup'>Signup</button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 1440 320'
              className='wave-container-2'
            >
              <path
                fill='#F09B41'
                fillOpacity='1'
                d='M0,224L60,192C120,160,240,96,360,106.7C480,117,600,203,720,218.7C840,235,960,181,1080,160C1200,139,1320,149,1380,154.7L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z'
              ></path>
            </svg>
          </div>
          <div id='orange-section'></div>
        </>
      );
};

export default LoginForm





