'use client'
import Image from 'next/image'
import { heroIcons } from '@/assets'
import { useMotionValue, useTransform, motion } from 'framer-motion'
import { useState } from 'react'

const Hero = () => {
    const [windowOffset, setWindowOffset] = useState({ innerWidth: 0, innerHeight: 0})
    const [mouseMove, setMouseMove] = useState(false)

    const x = useMotionValue(0)
    const y = useMotionValue(0)

    const handleMouseMove = (e) => 
    {
        const {clientX, clientY} = e
        x.set(clientX)
        y.set(clientY)
    }

    const handleMouseEnter = () =>
    {
        setWindowOffset({ innerWidth: window.innerWidth, innerHeight: window.innerHeight })
        setMouseMove(true)
    }

    const { innerWidth, innerHeight } = windowOffset
    const rotateX = useTransform(y, [0, innerHeight], [10, -50])
    const rotateY = useTransform(x,[0, innerWidth], [-30, 30])

    return (
    <div className="h-screen grid place-items-center" onMouseMove={handleMouseMove} onMouseEnter = {handleMouseEnter}>
        <div>
            <div className="flex flex-col items-center justify-center gap-y-3 font-light capitalize">
                <motion.div className="flex items-center justify-center " style={{rotatX: mouseMove ? 
                 rotateX : 0,
                 rotateY: mouseMove ? 
                 rotateY : 0, 
                 transition: '0.1s',
                 }}
                 >
                    <Image src={'/person.png'} 
                           alt='Person Image' 
                           width={400} 
                           height={400} 
                           priority={true} 
                           className="h-auto w-[150px]"
                    />
                    <span className="absolute text-3xl font-semibold text-white">Hi</span>
                </motion.div>
                <h1 className="text-center text-3xl font-bold tracking-wider text-gray-500">My Name is Aayush Shahi Thakuri &</h1>
                <p className="text-lg tracking wider text-gray-700"> I am a Software Engineer 👨‍💻</p>
            </div>
            <div className="mt-8 flex justify-center gap-x-10 text-3xl text-yellow-600">
                { heroIcons.map((icon, i) => 
                (
                    <a href="#" key={i} className="rounded-lg hover:bg-red-400 hover:text-white transition-colors">
                        {icon}
                    </a>
                )
                )}

            </div>
            <a href="#" className="mt-7 block w-max rounded-lg bg-red-400 px-3 py-1 font-light
                                   captialize tracking-wider text-white hover:bg-red-500 transition-colors">Let's connect!</a>
        </div>
    </div>
    )
}

export default Hero