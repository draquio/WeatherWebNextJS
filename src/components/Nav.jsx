import React from 'react'
import Search from './Search'

const Nav = () => {
  return (
    <header className='bg-slate-300 w-full mb-6'>
      <nav className='bg-slate-150 max-w-7xl m-auto h-16 flex items-center px-4 justify-between'>
        <div>Logo</div>
        <Search />
      </nav>
    </header>
  )
}

export default Nav
