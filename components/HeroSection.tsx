"use client" // this is a client component
import React from "react"
import Image from "next/image"
import { Link } from "react-scroll/modules"
import { HiArrowDown } from "react-icons/hi"
import Typewriter from 'typewriter-effect'
const HeroSection = () => {
  return (
    <section id="home">
      <div className="bg-[#DBF7FF] px-10 py-9 rounded-[20px]">
        <h1 className="text-[42px]">
          <Typewriter onInit={(typewriter) =>{
            typewriter.typeString(`🙋‍♂️ Hi I'm Ken Jaya`)
            .pauseFor(1000)
            .start()
          }}/>
        </h1>
        <p className="text-[32px] leading-[2] mt-2 font-thin">
          I’m a web developer. Currently, I’m waiting for my graduation from SMKN 1 Denpasar. In my spare time, I like to play games and searching informations about technologies.
        </p>
      </div>
    </section>
  )
}

export default HeroSection
