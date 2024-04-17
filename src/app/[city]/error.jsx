'use client'

import Image from "next/image"

const errorPage = () => {
  return (
    <div className="h-dvh mt-4">
      <figure className="flex justify-center"><Image src={"/img/404-error.webp"} alt="page not fount"width={250} height={250} /></figure>
      <h2 className="text-6xl text-center">CIUDAD NO ENCONTRADA</h2>
    </div>
  )
}

export default errorPage

