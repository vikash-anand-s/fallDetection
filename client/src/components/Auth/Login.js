import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios';

function Login() {
  const { register, handleSubmit, errors } = useForm();
  const [loginError, setLoginError] = useState('');

  const onSubmit = async (data) => {
    try {
      const response = await axios.post('/api/users/login', data);
      // Handle successful login, e.g., store the token in local storage
    } catch (error) {
      setLoginError('Invalid email or password');
    }
  };

  return (
    <div className="auth-form">
      <h2>Login</h2>
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
        {loginError && <span className="error">{loginError}</span>}
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
      <p>
        Don't have an account? <Link to="/register">Register here</Link>
      </p>
    </div>
  );
}

export default Login;
