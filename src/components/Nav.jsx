import React from 'react'
import Search from './Search'

const Nav = () => {
  return (
    <header className='w-full mt-8'>
      <nav className='bg-slate-150 max-w-5xl m-auto h-16 flex items-center px-4 justify-center'>
        {/* <div className='text-white text-2xl font-bold'>Logo</div>
        <Search /> */}
        <Search />
      </nav>
    </header>
  )
}

export default Nav
