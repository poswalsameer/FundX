import { Github, Linkedin, Twitter } from 'lucide-react'
import React from 'react'

function Footer() {
  return (
    <footer className="h-8 border-t border-[#0c7bc5] flex justify-between items-center bg-black text-white py-8">
      
      <div className='text-xs sm:text-base text-[#1392e6] font-bold ml-4 sm:ml-10' >
      &copy; {new Date().getFullYear()} FundX. All rights reserved.
      </div>

      <div className='mr-5 sm:mr-10 flex justify-center items-center gap-x-3 sm:gap-x-5'>
            <a href="https://twitter.com/sameerposwal03" target="_blank">
                <Twitter className='h-4 w-4 sm:h-6 sm:w-6 text-[#1392e6] transition-all delay-75 ease-linear hover:-translate-y-1 hover:cursor-pointer ' 
                />
            </a>
            
            <a href="https://github.com/poswalsameer" target="_blank">
                <Github className='h-4 w-4 sm:h-6 sm:w-6 text-[#1392e6] transition-all delay-75 ease-linear hover:-translate-y-1 hover:cursor-pointer  '/>
            </a>

            <a href="https://www.linkedin.com/in/sameerposwal/" target="_blank">
                <Linkedin className='h-4 w-4 sm:h-6 sm:w-6 text-[#1392e6] transition-all delay-75 ease-linear hover:-translate-y-1 hover:cursor-pointer  '/>
            </a>
      </div>

    </footer>
  )
}

export default Footer
