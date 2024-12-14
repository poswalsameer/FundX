import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <header className=" fixed top-0 w-full py-3 px-6 bg-white shadow-sm">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-primary">
          FundX
        </Link>
        <nav className="hidden md:flex space-x-4">
          <Link href="#features" className="text-gray-600 hover:text-primary">Home</Link>
          <Link href="#how-it-works" className="text-gray-600 hover:text-primary">How It Works</Link>
          <Link href="#testimonials" className="text-gray-600 hover:text-primary">Testimonials</Link>
        </nav>
        {/* <Button>Sign Up</Button> */}
      </div>
    </header>
  )
}

export default Header
