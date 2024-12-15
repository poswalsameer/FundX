'use client'

import { Input } from '@/components/ui/input'
import React, { useState } from 'react'
import { useToast } from "@/hooks/use-toast"
import { Button } from '@/components/ui/button'


function Email() {

    const [email, setEmail] = useState('')

    const {toast} = useToast()

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Here you would typically send the email to your backend
        console.log('Submitted email:', email)
        toast({
        title: "This feature will be coming in the next version. Thanks for your patience!",
        })
        setEmail('')
    }

  return (
    <section className="h-[30rem] w-full flex flex-col justify-center items-center py-20 bg-black text-white">
      <div className="w-full container text-center">
        <h2 className="px-2 text-xl sm:text-2xl md:text-3xl font-bold mb-6">Ready to Transform Your Investment Strategy?</h2>
        <p className="px-2 text-sm md:text-base font-bold text-white/80 mb-8">Join FundX today and gain access to exclusive startup opportunities.</p>
        <form onSubmit={handleSubmit} className="w-full flex flex-col sm:flex-row justify-center items-center gap-4">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="h-9 sm:h-10 w-60 sm:w-80 md:w-96 text-black font-bold bg-white rounded-md sm:rounded-sm"
          />
          <Button type="submit" size="lg" className="h-9 sm:h-10 sm:w-32 flex justify-center items-center bg-[#0c7bc5] font-bold text-white hover:bg-[#0c7bc5]/90 rounded-md sm:rounded-sm">
            Get Started
          </Button>
        </form>
      </div>
    </section>
  )
}

export default Email
