'use client'
import React, { useState, useEffect } from 'react'
import { TextReveal } from './ui/text-reveal'
import { VideoText } from './ui/video-text'
import { TypingAnimation } from './ui/typing-animation'
import { motion, useScroll } from 'framer-motion'
import HotSection from './HotSection'

const Benefits = () => {
  const containerRef = React.useRef<HTMLDivElement>(null)
  const [showTyping, setShowTyping] = useState(false)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (latest) => {
      if (latest >= 0.5) {
        setShowTyping(true)
      }
    })
    return () => unsubscribe()
  }, [scrollYProgress])

  return (
    <>
        <div className='flex flex-col space-y-12'>
        {/* Row 1: text then image (mobile stacks with gap) */}
        <div className='flex flex-col items-center gap-6 md:flex-row md:items-center md:gap-8'>
          <TextReveal className='w-full md:flex-1 md:-ml-4'>
            It all begins with you.Step into a space where creators connect, share, and grow together.Your journey starts the moment you hit “Join.”
          </TextReveal> 
          <img 
            src="/Images/pexels-rdne-4910377.jpg" 
            className="w-full max-w-[20rem] md:max-w-[24rem] h-64 md:h-80 object-cover rounded-lg shadow-lg md:flex-shrink-0 md:mx-8" 
            alt="Community and competition"
          />
        </div>

        {/* Row 2: image then text on desktop; text above image on mobile */}
        <div className='flex flex-col-reverse items-center gap-6 md:flex-row md:items-center md:gap-8'>
          <TextReveal className='w-full md:flex-1 md:mr-10'>
            From dance to daily stories, there’s something for everyone.Share your moments. Connect with new creators.
          </TextReveal>
          <img 
            src="/Images/pexels-sofus-34164951.jpg" 
            className="w-full max-w-[20rem] md:max-w-[24rem] h-64 md:h-80 object-cover rounded-lg shadow-lg md:flex-shrink-0 md:mx-8" 
            alt="Trivia and talent battles"
          />
        </div>

        {/* Row 3: text then image */}
        <div className='flex flex-col items-center gap-6 md:flex-row md:items-center md:gap-8'>
          <TextReveal className='w-full md:flex-1 md:-ml-4'>
            Victory feels even better when it’s shared.Earn recognition. Grow your audience. Shine.
          </TextReveal>
          <img 
            src="/Images/pexels-wendywei-1190298.jpg" 
            className="w-full max-w-[20rem] md:max-w-[24rem] h-64 md:h-80 object-cover rounded-lg shadow-lg md:flex-shrink-0 md:mx-8" 
            alt="Victory and rewards"
          />
        </div>

        {/* Row 4: image then text on desktop; text above image on mobile */}
        <div className='flex flex-col-reverse items-center gap-6 md:flex-row md:items-center md:gap-8'>
          <TextReveal className='w-full md:flex-1 md:mr-10'>
            Sharing is what makes it legendary.Post your moments. Celebrate with friends.
          </TextReveal>
          <img 
            src="/Images/pexels-pavel-danilyuk-7180617.jpg" 
            className="w-full max-w-[20rem] md:max-w-[24rem] h-64 md:h-80 object-cover rounded-lg shadow-lg md:flex-shrink-0 md:mx-8" 
            alt="Sharing highlights"
          />
        </div>
        </div>
        
        <HotSection/>
        <div ref={containerRef} className='flex flex-col items-center justify-center min-h-screen'>
            <div className="relative h-[500px] w-full max-w-4xl overflow-hidden mb-8">
                <VideoText src="/Videos/102959-661305174.mp4">Unite</VideoText>
            </div>
            {showTyping && (
                <motion.div 
                    className='flex items-center justify-center px-6 py-2'
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <TypingAnimation 
                        key={showTyping ? 'typing' : 'not-typing'}
                        className="text-3xl font-bold text-center text-black dark:text-white"
                        duration={150}
                        delay={0}
                        startOnView={false}
                    >
                       Where creativity flows and HOT ideas connect.
                    </TypingAnimation>
                </motion.div>
            )}
        </div>
    </>
  )
}

export default Benefits