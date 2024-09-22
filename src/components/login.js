import React from 'react';

const Login = () => {
  const handleGoogleLogin = () => {
    // This will redirect to backend for Google OAuth login
    window.location.href = 'http://localhost:8000/login';
  };

  return (
    <div>
      <h2>Login</h2>
      <button onClick={handleGoogleLogin}>Login with Google</button>
    </div>
  );
};

export default Login;
