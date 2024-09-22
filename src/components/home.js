import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Welcome to Online Notepad</h1>
      <Link to="/notes">Login with Google</Link>
    </div>
  );
};

export default Home;
