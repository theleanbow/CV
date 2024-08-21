import React from 'react'
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/resume');
  };
  return (
    <div className="h-screen flex justify-center items-center">
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleClick}>
      View Resume
    </button>
  </div>
  )
}

export default Home
