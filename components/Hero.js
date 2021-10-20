import React from "react"
import Image from "next/image"

const Hero = () => {
  return (
    <section id="hero" className="flex justify-between py-4">
      <div id="left-hero">
        <div className="text-5xl font-bold text-gray-800 pt-4">
          <h1>Hello, I&apos;m Jackson Price.</h1>
          <h1 className="pt-2">I&apos;m a software developer in Texas.</h1>
        </div>
      </div>
      <div id="right-hero">
        <Image src="/profile_pic_square2.png" width={124} height={124} alt="Profile picture" className="rounded-full" />
      </div>
    </section>
  )
}

export default Hero
