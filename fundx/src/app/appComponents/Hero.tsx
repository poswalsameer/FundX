'use client'

import { Button } from '@/components/ui/button'
import RippleButton from '@/components/magicui/ripple-button'
import React from 'react'

function Hero() {
  return (
    <section className="flex flex-col justify-center items-center min-h-screen py-20 bg-gradient-to-r from-primary to-primary-foreground text-white">
      <div className="h-full w-full flex flex-col justify-center items-center container mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Find Your Next Big Investment</h1>
        <p className="text-xl mb-8">Get unparalleled and unfiltered authentic insights into promising startups and make informed investment decisions</p>
        <Button size="lg" variant="secondary">
          Start Exploring
        </Button>
      </div>
    </section>
  )
}

export default Hero
