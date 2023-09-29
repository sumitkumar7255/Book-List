import React, { useState } from 'react';
import axios from 'axios';
import './LoginRegister.css';

const LoginRegister = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isLogin) {
        // Handle login logic
        const response = await axios.post('YOUR_API_ENDPOINT/login/', {
          email,
          password,
        });
        console.log('Login successful!', response.data);
      } else {
        // Handle register logic
        const response = await axios.post('YOUR_API_ENDPOINT/register/', {
          email,
          password,
        });
        console.log('Registration successful!', response.data);
      }
      // You might want to redirect the user after successful login/registration
    } catch (error) {
      console.error('Error:', error.response.data);
      // Handle error, show error messages to the user, etc.
    }
  };

  return (
    <div>
      <h2>{isLogin ? 'Login' : 'Register'}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={handleEmailChange} required />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={handlePasswordChange} required />
        </div>
        <div>
          <button type="submit">{isLogin ? 'Login' : 'Register'}</button>
        </div>
      </form>
      <p onClick={() => setIsLogin(!isLogin)}>
        {isLogin ? 'Don\'t have an account? Register here.' : 'Already have an account? Login here.'}
      </p>
    </div>
  );
};

export default LoginRegister;
