import React from 'react'
import HowItWorks from '../Components/HowItWorks'
import Feature from '../Components/Feature'
import Generations from '../Components/Generations'
import Pricing from '../Components/Pricing'
import Problem from '../Components/Problem'
import Stats from '../Components/Stats'
import Testimonial from '../Components/Testimonial'
import Faq from '../Components/Faq'

export default function AboutPage() {
    return (
        <>
            <Generations />
            <Stats />
            <HowItWorks />
            <Feature />
            <Pricing />
            <Problem />
            <Faq/>
            <Testimonial />
        </>
    )
}
