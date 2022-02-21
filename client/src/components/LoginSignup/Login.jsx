import React, { useState, useEffect } from 'react'
import { LOGIN_USER } from '../../utils/mutation';
import Auth from '../../utils/auth';
import { useMutation } from '@apollo/client';
import './LoginSignup.css'
import { withRouter } from 'react-router-dom';

// const [login, { error }] = useMutation(LOGIN_USER);

import { AuthService } from '../../utils/auth'


const LoginForm = (props) => {
  const [userFormData, setUserFormData] = useState({ username: '', password: '' });
  const [validated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [login, { error, data }] = useMutation(LOGIN_USER);
  let user = "";

  useEffect(() => {
    error ? setShowAlert(true) : setShowAlert(false);
  }, [error]);


  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await login({ variables: { ...userFormData } });

      // console.log('login form: line 34')
      // console.log(response.data.login.user.username)
      // console.log(response.data.login.token)

      user = response.data.login.user.username;
      const token = response.data.login.token;

      if (!user) {
        throw new Error('something went wrong!');
      }

      Auth.login(token);

      props.history.push('/container');

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

  // if(user !== "") {
  //   props.setRenderForm("dashboard")
  //   console.log(props.renderForm)
  // }

  const renderPage = () => {
    if (props.renderForm === "dashboard") {
      return (
        <p>Dashboard goes here</p>
      )
    } else if (props.renderForm === "login") {
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
      )
    }
  }

  return (
    <>
      {renderPage()}
    </>
  );
};

export default withRouter(LoginForm)





