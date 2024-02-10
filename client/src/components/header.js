import React from 'react';
import logo from '../images/logo.jpg';
import {Link} from 'react-router-dom';

const header = () => {
  return (
    <div className='p-5 flex items-center text-xl bg-slate-400 justify-between'>
      <div>
      <img src={logo} alt='logo' className='w-40 rounded-full border-4'/>
      </div>
      <div>
      <Link to='/?cat-food' className='bg-orange-400 text-white py-1 px-2 rounded-full hover:bg-orange-600 ml-5'>
        Food
      </Link>
      <Link to='/?cat-technology' className='bg-orange-400 text-white py-1 px-2 rounded-full hover:bg-orange-600 ml-5'>
        Technology
      </Link>
      <Link to='/?cat-science' className='bg-orange-400 text-white py-1 px-2 rounded-full hover:bg-orange-600 ml-5'>
        Science
      </Link>
      <Link to='/?cat-cinema' className='bg-orange-400 text-white py-1 px-2 rounded-full hover:bg-orange-600 ml-5'>
        Cinema
      </Link>
      <Link to='/?cat-design' className='bg-orange-400 text-white py-1 px-2 rounded-full hover:bg-orange-600 ml-5'>
        Design
      </Link>
      <Link to='/?cat-art' className='bg-orange-400 text-white py-1 px-2 rounded-full hover:bg-orange-600 ml-5'>
        Art
      </Link>
      <Link to='/?cat-logout' className='bg-orange-400 text-white py-1 px-2 rounded-full hover:bg-orange-600 ml-5'>
      Logout
      </Link>
      <Link to='/write' className='bg-orange-400 text-white py-1 px-2 rounded-full hover:bg-orange-600 ml-5'>
        Write
      </Link>
      </div>
         
    </div>
  )
}

export default header;