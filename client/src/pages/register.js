import React from 'react'
import {Link} from 'react-router-dom';

const register = () => {
  return (
    <div className="bg-teal-400 h-screen text-center flex items-center justify-center flex-col">
      <h1 className="text-4xl mb-5 font-semibold">Register</h1>
            
        <form className="w-1/3 bg-white py-10 px-5 rounded-lg"> 
          <input className="items-center py-2 px-4 mb-5 text-lg bg-slate-300 rounded-lg w-full border-2" type="text" placeholder="Enter Your Name"/>
          <input className="items-center py-2 px-4 mb-5 text-lg bg-slate-300 rounded-lg w-full border-2" type="text" placeholder="Enter Your Email"/>
          <input className="items-center py-2 px-4 mb-5 text-lg bg-slate-300 rounded-lg w-full border-2" type="password" placeholder="Enter Your Password"/>
          <button className="bg-blue-600 rounded-2xl font-bold w-full py-2 mb-5 text-white">REGISTER</button>
          <div>
            Already you have an account? 
            <Link to={'/login'} className='hover:text-fuchsia-700 text-blue-600 underline'> Login Now</Link>
          </div>
        </form> 
    </div>
    );
}
    

export default register;