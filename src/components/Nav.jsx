import React from 'react'
import Search from './Search'

const Nav = () => {
  return (
    <header className='w-full mb-6 border-b-[1px] border-white'>
      <nav className='bg-slate-150 max-w-7xl m-auto h-16 flex items-center px-4 justify-between'>
        <div className='text-white text-2xl font-bold'>Logo</div>
        <Search />
      </nav>
    </header>
  )
}

export default Nav
