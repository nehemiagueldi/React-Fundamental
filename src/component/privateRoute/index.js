import React from 'react'
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({element}) => {
  const isAuthenticated = sessionStorage.getItem('isLoggedIn'); // Cek status login dari sessionStorage

  return isAuthenticated ? element : <Navigate to="/" />; // Jika belum login, redirect ke halaman login
}

export default PrivateRoute
