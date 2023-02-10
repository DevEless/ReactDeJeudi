import React, { useState } from 'react';

const SignUpForm = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [error, setError] = useState({
    nameError: '',
    emailError: '',
    passwordError: '',
    confirmPasswordError: ''
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  const validate = () => {
    let nameError = '';
    let emailError = '';
    let passwordError = '';
    let confirmPasswordError = '';

    if (!user.name) {
      nameError = 'Name is required';
    }

    if (!user.email.includes('@')) {
      emailError = 'Invalid email';
    }

    if (!user.password) {
      passwordError = 'Password is required';
    } else if (user.password.length < 8) {
      passwordError = 'Password must be at least 8 characters long';
    }

    if (user.password !== user.confirmPassword) {
      confirmPasswordError = 'Passwords do not match';
    }

    if (nameError || emailError || passwordError || confirmPasswordError) {
      setError({ nameError, emailError, passwordError, confirmPasswordError });
      return false;
    }

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validate();
    if (isValid) {
      console.log(user);
      setUser({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
      });
      setError({
        nameError: '',
        emailError: '',
        passwordError: '',
        confirmPasswordError: ''
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={user.name}
          onChange={handleChange}
        />
        <div style={{ fontSize: 12, color: 'red' }}>{error.nameError}</div>
      </div>
      <div>
        <input
          type="text"
          name="email"
          placeholder="Email"
          value={user.email}
          onChange={handleChange}
        />
        <div style={{ fontSize: 12, color: 'red' }}>{error.emailError}</div>
      </div>
      <div>
        <input
        type="password"
        name="password"
        placeholder="Password"
        value={user.password}
        onChange={handleChange}
      />
      <div style={{ fontSize: 12, color: 'red' }}>{error.passwordError}</div>
    </div>
    <div>
      <input
        type="password"
        name="confirmPassword"
        placeholder="Confirm Password"
        value={user.confirmPassword}
        onChange={handleChange}
      />
      <div style={{ fontSize: 12, color: 'red' }}>{error.confirmPasswordError}</div>
    </div>
    <button type="submit">Submit</button>
  </form>
);
};

export default SignUpForm;

