import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios';

function Register() {
  const { register, handleSubmit, errors, watch } = useForm();
  const [registrationError, setRegistrationError] = useState('');

  const onSubmit = async (data) => {
    try {
      const response = await axios.post('/api/users/register', data);
      // Handle successful registration, e.g., show a success message
    } catch (error) {
      setRegistrationError('Registration failed. Please try again.');
    }
  };

  const password = watch('password');
  const confirmPassword = watch('confirmPassword');

  return (
    <div className="auth-form">
      <h2>Register</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            ref={register({ required: true })}
          />
          {errors.email && <span className="error">Email is required</span>}
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            ref={register({ required: true })}
          />
          {errors.password && <span className="error">Password is required</span>}
        </div>
        <div className="form-group">
          <label>Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            ref={register({
              required: true,
              validate: (value) => value === password,
            })}
          />
          {errors.confirmPassword && (
            <span className="error">Passwords do not match</span>
          )}
        </div>
        {registrationError && <span className="error">{registrationError}</span>}
        <button type="submit" className="btn btn-primary">Register</button>
      </form>
      <p>
        Already have an account? <Link to="/login">Login here</Link>
      </p>
    </div>
  );
}

export default Register;
