import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <header className=" z-10 fixed top-0 w-full py-3 px-6 bg-[#051923] bg-opacity-45 shadow-sm" >
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl text-white font-bold text-primary">
          FundX
        </Link>
        <nav className="flex space-x-4">
          <Link href="" className="text-sm text-white font-bold hover:text-white/80">Features</Link>
          <Link href="" className="text-sm text-white font-bold hover:text-white/80">Testimonials</Link>
        </nav>
        {/* <Button>Sign Up</Button> */}
      </div>
    </header>
  )
}

export default Header
