import React from 'react';
import { useLocation } from 'react-router-dom';

function AdminLoginLink() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const isAdminRoute = queryParams.get('admin');

  if (!isAdminRoute) {
    return null; // Do not render anything if the query parameter is not set
  }

  return (
    <div style={{textAlign: 'center', marginTop: '20px'}}>
      <a href="http://localhost:3001/login">Admin Login</a>
    </div>
  );
}

export default AdminLoginLink;
