// src/Routes.jsx
import { Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';

const AppRoutes = () => {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Home />} />
      


      {/* Authenticated Routes */}
      {isAuthenticated && (
        <>
          <Route path="/dashboard" element={<Dashboard />} />
        </>
      )}
      


      {/* Non-Authenticated Routes */}
      {!isAuthenticated && (
        <>
          <Route path="/login" element={<Login />} />
        </>
      )}
      

      
      {/* Redirects */}
      <Route
        path="*"
        element={<Navigate to={isAuthenticated ? "/dashboard" : "/"} />}
      />
    </Routes>
  );
};

export default AppRoutes;
