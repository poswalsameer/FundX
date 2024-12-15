'use client'

import { Button } from '@/components/ui/button'
import RippleButton from '@/components/magicui/ripple-button'
import ShimmerButton from "@/components/magicui/shimmer-button";
import React from 'react'

function Hero() {
  return (
    <section className="flex flex-col justify-center items-center min-h-screen py-20 text-white" id='heroBackground'> 
      <div className="h-full w-full flex flex-col justify-center items-center container mx-auto text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 pb-2 heroText">Find Your Next Big Investment</h1>
        <p className="px-6 text-sm sm:text-base lg:text-lg font-bold text-white/80 mb-8">Get unparalleled and unfiltered authentic insights into promising startups and make informed investment decisions</p>
        <ShimmerButton shimmerColor='#0c7bc5' shimmerSize='0.1em' className="h-12 w-40 text-xs shadow-2xl">
          <span className="whitespace-pre-wrap text-center text-xs font-bold leading-none tracking-tight text-white dark:from-white dark:to-blue-300 lg:text-sm">
            Get Started
          </span>
        </ShimmerButton>
      </div>
    </section>

  )
}

export default Hero
