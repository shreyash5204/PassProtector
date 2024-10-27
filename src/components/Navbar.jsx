import React from 'react'

export const Navbar = () => {
  return (
    <nav className="text-white">
      <div className="mycontainer flex justify-between items-center px-4 py-5 h-14">
        <div className="logo font-bold text-gray-900">
          <span className='text-cyan-700'>&lt;</span>
          Pass
          <span className='text-cyan-700'>Protector/&gt;</span>
        </div>
          <ul>
              <li className='flex gap-4'>
                  <a className='text-gray-900 hover:font-bold hover:cursor-pointer' href="/">Home</a>
              </li>
          </ul>
        </div>  
        <div className="border-b-2 border-cyan-900 nt-2"></div>
    </nav>
  )
}

export default Navbar
