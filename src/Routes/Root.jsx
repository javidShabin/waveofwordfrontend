import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Root() {
  return (
    <>
      <header className='shadow-lg flex justify-center py-6 w-full z-[999] bg-white sticky top-0 left-0'>
            <div className="container w-[90%] flex justify-between items-center">
            <h1 className='text-[21px] font-bold'>WavesOfWords</h1>
            <nav>
                <ul className='flex gap-6 font-semibold'>
                    <li><Link to={'/'}>Home</Link></li>
                    <li><Link to={'/about'}>About</Link></li>
                    <li><Link to={'/contact'}>Contact</Link></li>
                </ul>
            </nav>
            </div>
        </header>
      <Outlet/>
      <footer></footer>
    </>
  )
}
