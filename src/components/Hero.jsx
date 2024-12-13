'use client'
import Image from 'next/image'

const Hero = () => {
    return <div className="h-screen grid place-items-center">
        <div>
            <div>
                <div>
                    <Image src={'/person.png'} 
                           alt='Person Image' 
                           width={400} 
                           height={400} 
                           priority={true} 
                    />
                    <span>Hi</span>
                </div>
                <h1>My Name is Aayush Shahi Thakuri &</h1>
                <p> I am a Software Engineer 👨‍💻</p>
            </div>
            <div>
                <a href="#">Icon</a>
            </div>
            <a href="#">Let's connect!</a>
        </div>
    </div>
}

export default Hero