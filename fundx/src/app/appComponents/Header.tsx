import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

function Header({headerElements} : {headerElements: string[]}) {

  return (
    <header className="z-10 fixed top-0 w-full py-3 px-6 bg-[#051923] bg-opacity-45 shadow-sm" >
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl text-white font-bold text-primary">
          FundX
        </Link>
        {
          headerElements.length > 0 ? ( 
            <nav className="flex space-x-4">
              {headerElements.map((element, index) => (
                <Link key={index} href={element} className="text-sm text-white font-bold hover:text-white/80">
                  {element}
                </Link>
              ))}
            </nav>
          ) : <></>
        }
      </div>
    </header>
  )
}

// The error in the code is that the map function is not being used correctly. The map function should be used to iterate over the array and return a new JSX element for each item in the array. The correct way to use the map function is to wrap the returned JSX element in a parenthesis and use the key prop to assign a unique key to each element.

export default Header
