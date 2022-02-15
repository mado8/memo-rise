import React, { useState } from 'react'
const AuthService = require('../../utils/auth')

const LoginFormComponent = () => {

  const [userFormData, setUserFormData] = useState({
    username: '',
    email: '',
    password: '',
  })

  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    setUserFormData[e.target.name] = e.target.value
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validate()) {

      setUserFormData['name'] = ''
      setUserFormData['email'] = ''
      setUserFormData['message'] = ''

      //re-route to homepage from here if successfully logged in
    }
  }

  const validate = () => {

    setErrors = {}
    let isValid = true

    if (!userFormData['name']) {
      isValid = false
      errors['name'] = 'Please enter your name.'
    }

    if (!userFormData['email']) {
      isValid = false
      errors['email'] = 'Please enter your email Address.'
    }

    if (typeof userFormData['email'] !== 'undefined') {
      var pattern = new RegExp(
        /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
      )
      if (!pattern.test(userFormData['email'])) {
        isValid = false
        errors['email'] = 'Please enter valid email address.'
      }
    }

    if (!userFormData['message']) {
      isValid = false
      errors['message'] = 'Please enter your message.'
    }

    if (errors.name) {
      alert(errors.name)
    }
    if (errors.email) {
      alert(errors.email)
    }
    if (errors.message) {
      alert(errors.message)
    }

    // add auth

    return isValid
  }

  return (
    <div>
      <form onSubmit={handleSubmit()}>
        <div>
          <label>
            <input name='username' type='text' placeholder='Username' onChange={handleChange()} />
          </label>
        </div>
        <div>
          <label>
            <input name='email' type='text' placeholder='Email' onChange={handleChange()} />
          </label>
        </div>
        <div>
          <label>
            <input name='password' type='text' placeholder='Password' onChange={handleChange()} />
          </label>
        </div>
      </form>
      <button type='submit'> Submit</button>
    </div>
  )
}

export default LoginFormComponent
