import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie'; // You might need to install js-cookie package

const AuthCallbackHandler = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Assuming the token is stored in a cookie accessible via JavaScript
    const token = Cookies.get('jwtToken');

    if (token) {
      navigate('/dashboard'); // User is authenticated, navigate to the dashboard
    } else {
      navigate('/'); // No token found, redirect to the homepage or login page
    }
  }, [navigate]);

  return <div>Processing authentication...</div>;
};

export default AuthCallbackHandler;

