// LoginButton.js
import React from 'react';

const LoginButton = () => {
  return (
<button className="login-button" onClick={() => window.location.href = 'http://localhost:3001/auth/google'}>
      Admin Login
    </button>
  );
};

export default LoginButton;
