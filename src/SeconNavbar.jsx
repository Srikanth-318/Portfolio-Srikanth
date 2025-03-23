import React from 'react';
import { Link } from "react-router-dom";
import { HiMiniHome } from 'react-icons/hi2'; 
import { FaUser } from 'react-icons/fa6';

const SeconNavbar = () => {

    
  return (
    <nav className=' bg-[#1D2430] text-gray-400 font-semibold flex items-center justify-between  h-16 px-4 py-3 sticky  top-0 z-50'>

      <div className='flex items-center gap-6'>
        <Link to="/" className='text-white cursor-pointer py-5 flex items-center  gap-2 transition'>
          <HiMiniHome className="text-2xl hover:text-yellow-400 transition relative -top-1" />
          Home
        </Link>
      </div>

    </nav>
  );
}

export default SeconNavbar;