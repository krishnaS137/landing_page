import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { HeroHeader } from './header'
import { InfiniteSlider } from '@/components/ui/infinite-slider'
import { ProgressiveBlur } from '@/components/ui/progressive-blur'
import { IconCloud } from './magicui/icon-cloud'
import { motion } from 'motion/react'

export default function HeroSection() {
    const images=[
        '/Images/image.png',
        
        '/Images/image.png',
    
        '/Images/image.png',
        
        '/Images/image.png',

        '/Images/image.png',
        
        '/Images/image.png',
        
        '/Images/image.png',
        
        '/Images/image.png',
        
        '/Images/image.png',
        
        '/Images/image.png',
        
        '/Images/image.png',
        
        '/Images/image.png',
        
        '/Images/image.png',
        
        '/Images/image.png',
        
        '/Images/image.png',
        
        '/Images/image.png',
        
        '/Images/image.png',
        '/Images/image.png',
       
        '/Images/image.png',
        '/Images/image.png',
        '/Images/image.png',
    ]
    return (
        <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8,ease: "easeOut" }}
        >
            <HeroHeader />
            <main className="overflow-x-hidden">
            <section>
                                        <div className="pb-16 pt-12 md:pb-20 lg:pb-20 lg:pt-10 border-red-900 dark:border-amber-100 border-2 m-5 mt-20 rounded-lg">
                        <div className="relative mx-auto flex max-w-6xl flex-col px-6 lg:flex lg:flex-row lg:items-center lg:gap-8">
                            <div className="mx-auto max-w-lg text-center lg:ml-0 lg:w-1/2 lg:text-left">
                                <h1 className="mt-8 max-w-2xl text-balance text-5xl font-medium md:text-6xl lg:mt-16 xl:text-7xl">Where Talent<span className='text-primary'> Meets Fame</span></h1>
                                <p className="mt-8 max-w-2xl text-pretty text-lg">Stop posting alone. Start connecting with creators and audiences daily.</p>

                                <div className="mt-12 flex flex-col items-center justify-center gap-2 sm:flex-row lg:justify-start">
                                    <Button
                                        asChild
                                        size="lg"
                                        className="px-5 text-base">
                                        <Link href="#link">
                                            <span className="text-nowrap">Join Now</span>
                                        </Link>
                                    </Button>
                                </div>
                            </div>

                            <div className="order-first mt-10 w-full h-64 sm:h-80 md:h-96 lg:order-last lg:h-auto lg:w-1/2 dark:mix-blend-lighten">
                                <div className="relative flex size-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-none mx-auto items-center justify-center overflow-hidden rounded-lg">
                                    <div className='transform scale-100 sm:scale-110 md:scale-125 lg:scale-120'>
                                        <IconCloud images={images} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>  
                <section className="bg-background pb-16 md:pb-32">
                    <div className="group relative m-auto max-w-6xl px-6">
                        <div className="flex flex-col items-center md:flex-row">
                            <div className="md:max-w-44 md:border-r md:pr-6">
                                <p className="text-end text-sm">Powering the best teams</p>
                            </div>
                            <div className="relative py-6 md:w-[calc(100%-11rem)]">
                                <InfiniteSlider
                                    speedOnHover={20}
                                    speed={40}
                                    gap={112}>
                                    <div className="flex">
                                        <img
                                            className="mx-auto h-5 w-fit dark:invert"
                                            src="https://html.tailus.io/blocks/customers/nvidia.svg"
                                            alt="Nvidia Logo"
                                            height="20"
                                            width="auto"
                                        />
                                    </div>

                                    <div className="flex">
                                        <img
                                            className="mx-auto h-4 w-fit dark:invert"
                                            src="https://html.tailus.io/blocks/customers/column.svg"
                                            alt="Column Logo"
                                            height="16"
                                            width="auto"
                                        />
                                    </div>
                                    <div className="flex">
                                        <img
                                            className="mx-auto h-4 w-fit dark:invert"
                                            src="https://html.tailus.io/blocks/customers/github.svg"
                                            alt="GitHub Logo"
                                            height="16"
                                            width="auto"
                                        />
                                    </div>
                                    <div className="flex">
                                        <img
                                            className="mx-auto h-5 w-fit dark:invert"
                                            src="https://html.tailus.io/blocks/customers/nike.svg"
                                            alt="Nike Logo"
                                            height="20"
                                            width="auto"
                                        />
                                    </div>
                                    <div className="flex">
                                        <img
                                            className="mx-auto h-5 w-fit dark:invert"
                                            src="https://html.tailus.io/blocks/customers/lemonsqueezy.svg"
                                            alt="Lemon Squeezy Logo"
                                            height="20"
                                            width="auto"
                                        />
                                    </div>
                                    <div className="flex">
                                        <img
                                            className="mx-auto h-4 w-fit dark:invert"
                                            src="https://html.tailus.io/blocks/customers/laravel.svg"
                                            alt="Laravel Logo"
                                            height="16"
                                            width="auto"
                                        />
                                    </div>
                                    <div className="flex">
                                        <img
                                            className="mx-auto h-7 w-fit dark:invert"
                                            src="https://html.tailus.io/blocks/customers/lilly.svg"
                                            alt="Lilly Logo"
                                            height="28"
                                            width="auto"
                                        />
                                    </div>

                                    <div className="flex">
                                        <img
                                            className="mx-auto h-6 w-fit dark:invert"
                                            src="https://html.tailus.io/blocks/customers/openai.svg"
                                            alt="OpenAI Logo"
                                            height="24"
                                            width="auto"
                                        />
                                    </div>
                                </InfiniteSlider>

                                <div className="bg-linear-to-r from-background absolute inset-y-0 left-0 w-20"></div>
                                <div className="bg-linear-to-l from-background absolute inset-y-0 right-0 w-20"></div>
                                <ProgressiveBlur
                                    className="pointer-events-none absolute left-0 top-0 h-full w-20"
                                    direction="left"
                                    blurIntensity={1}
                                />
                                <ProgressiveBlur
                                    className="pointer-events-none absolute right-0 top-0 h-full w-20"
                                    direction="right"
                                    blurIntensity={1}
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </motion.div>
    )
}
