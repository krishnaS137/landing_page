import React from 'react'
import { PixelImage } from './ui/pixel-image'
import { RotatingTextDemo } from './ui/RotatingText'

const BodySection = () => {
  const texts=[
    'Where Creators Stay HOT',
    'Sign up, set up, and step into the spotlight..',
    'Post what you love. Find who loves it too.',
    'Earn love, not just likes.',
    'Keep it HOT. Keep it real.',
  ]
  const subtexts=[
    'Welcome to House of Talent — the social media hub that celebrates creativity in all its forms. From dance trends to fashion reels, share what makes you YOU. Get noticed, get inspired, and keep your feed HOT.',
    'Find your people, share your world, and be part of the next big thing on HOT.',
    'From dance moves to daily thoughts — express yourself freely and discover others doing the same.',
    'Every post, story, or moment brings you closer to people who genuinely value your creativity.',
    'Share your moments, your creativity, and your vibe — because authenticity is what makes this community glow.',
  ]
  return (
    <div className="py-30 px-4">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12 max-w-7xl mx-auto">
        {/* Rotating Text Section - now on the left */}
        <div className="flex-1 max-w-lg -mt-32 lg:-mt-80 mr-10">
          <div className="space-y-4">
            {/* Main Text */}
            <div>
              <RotatingTextDemo 
                delay={0} 
                y={0} 
                duration={3500} 
                texts={texts} 
                className="text-4xl font-semibold" 
              />
            </div>
            
            {/* Subtext */}
            <div>
              <RotatingTextDemo 
                delay={0} 
                y={0} 
                duration={3500} 
                texts={subtexts} 
                className="text-lg text-[#696969] dark:text-[#FAEBD7] opacity-75 mt-20 lg:mt-15" 
              />
            </div>
          </div>
        </div>

        {/* Pixel Image Section - now on the right */}
        <div className="flex-shrink-0">
          <PixelImage
            src="/Images/monetizing-content-6918852_1280.jpg"
            customGrid={{ rows: 4, cols: 6 }}
            grayscaleAnimation
          />
        </div>
      </div>
    </div>
  )
}

export default BodySection