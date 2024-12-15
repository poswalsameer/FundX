import React from 'react'
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Rocket, Target, BarChart3, Users } from 'lucide-react'

function Features() {
    
    const features = [
        {
          title: "Detailed and Unfiltered",
          description: "Access detailed profiles of vetted, high-potential startups across various industries.",
          icon: Rocket
        },
        {
          title: "Highly Accurate Algorithm",
          description: "Our LLM provides accurate outcomes and insights for the startups that align with your investment criteria.",
          icon: Target
        },
        {
          title: "Unbiased Insights",
          description: "Since the data is scraped by the LLM from the web, so it is free from any kind of bias and provides the actual information you need to know.",
          icon: BarChart3
        },
      ]

    return (
        <section id="features" className="py-20 bg-black">
        <div className="container mx-auto">
            <h2 className="text-2xl sm:text-3xl text-white font-bold text-center mb-12">Why to choose FundX?</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 px-8 gap-8">
            {features.map((feature, index) => (
                <Card key={index} className="h-36 sm:h-40 lg:h-52 flex flex-col justify-center bg-[#0a6fb2] rounded-md border-none">
                <CardHeader>
                    <div className=' h-[30%] flex flex-row gap-x-3 items-center'>
                        <feature.icon className="w-8 h-8 text-blue-950 " />
                        <CardTitle className=' text-base sm:text-xl text-blue-950 font-bold'>{feature.title}</CardTitle>
                    </div>
                    <CardDescription className='text-xs sm:text-base text-blue-200 font-semibold text-opacity-90'>{feature.description}</CardDescription>
                </CardHeader>
                </Card>
            ))}
            </div>
        </div>
        </section>
    )
}

export default Features
