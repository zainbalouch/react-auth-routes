// src/pages/Login.jsx
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const { setIsAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = () => {
    // Simulate login by setting a token
    localStorage.setItem('token', 'sample-token');
    setIsAuthenticated(true);
    navigate('/dashboard');
  };

  return (
    <div>
      <h1>Login Page - Non-Authenticated Users</h1>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
