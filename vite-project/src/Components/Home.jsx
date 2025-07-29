import React, { use } from 'react'
import { useNavigate } from 'react-router-dom';

const Home = () => {

  const navigate=useNavigate();

  const handleClick = () => {
    navigate('/about');// Navigate to the About page;
  };

  return (
    <div>Home
      <button onClick={handleClick}>
        Click Me
      </button>
    </div>
  )
}

export default Home