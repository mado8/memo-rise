import React, { useState } from 'react'
import { LOGIN_USER } from '../../utils/mutation';
import {AuthService} from '../../utils/auth'


const LoginForm = () => {
    const [userFormData, setUserFormData] = useState({ email: '', password: '' });
    const [validated] = useState(false);
    const [showAlert, setShowAlert] = useState(false);

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
            const response = await LOGIN_USER(userFormData);

            if (!response.ok) {
                throw new Error('something went wrong!');
            }

            const { token, user } = await response.json();
            console.log(user);
            Auth.LOGIN_USER(token);
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
}
const LoginFormComponent = () => {

    return (
        <div>
            <form>
                <div>
                    <label>
                        <input name='username' type='text' placeholder='Username' />
                    </label>
                </div>
                <div>
                    <label>
                        <input name='email' type='text' placeholder='Email' />
                    </label>
                </div>
                <div>
                    <label>
                        <input name='password' type='text' placeholder='Password' />
                    </label>
                </div>
                <button type='submit'> Submit</button>
            </form>
        </div>
    )
}
export default LoginFormComponent