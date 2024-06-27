// src/components/Navbar.jsx
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    // Remove token and update auth state
    localStorage.removeItem('token');
    setIsAuthenticated(false);
    navigate('/');
  };

  return (
    <nav>
      <Link to="/">Home</Link>
      {!isAuthenticated && <Link to="/login">Login</Link>}
      {isAuthenticated && <Link to="/dashboard">Dashboard</Link>}
      {isAuthenticated && <button onClick={handleLogout}>Logout</button>}
    </nav>
  );
};

export default Navbar;
