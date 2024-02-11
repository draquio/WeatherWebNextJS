import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='w-full h-16 flex justify-center items-center mt-auto text-white text-center text-balance'>
      <Link href="https://draquioportfolio.vercel.app/" target='_blank' title='Sergio Mercado Dev'>© Sergio Mercado (Draquio) | Fullstack Developer</Link>
    </footer>
  )
}

export default Footer
