"use client" // this is a client component
import React from "react"
import { useState } from "react"
import Link  from "next/link"
import { usePathname } from "next/navigation"
import { useTheme } from "next-themes"
import { RiMoonFill, RiSunLine } from "react-icons/ri"
import { IoMdMenu, IoMdClose } from "react-icons/io"
import Image from "next/image"

interface NavItem {
  label: string
  page: string
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "PROJECTS",
    page: "/projects",
  },
  {
    label: "CONTACT",
    page: "/contact",
  },
]

export default function Navbar() {
  const { systemTheme, theme, setTheme } = useTheme()
  const currentTheme = theme === "system" ? systemTheme : theme
  const pathname = usePathname()
  const [navbar, setNavbar] = useState(false)
  return (
    <header className="w-full mx-auto max-w-5xl pt-7 bg-white mb-7 ">
      <div className="flex items-center md:space-x-3 sm:space-x-3 sm:pl-4">
        <div className="lg:m-4">
          {/* xxl:px-28 xl:px-40 lg:px-12 md:px-7 sm:px-6*/}
          <Image
            src="/profile.jpg"
            alt=""
            width={180}
            height={180}
            className="rounded-full shadow-2xl object-cover object-top md:h-[9.25rem] md:w-[9.25rem] lg:w-[11.25rem] lg:h-[11.25rem] sm:w-[5rem] sm:h-[5rem]"
          />
        </div>
        <div className="leading-[2.7] md:leading-[2.7] sm:leading-[0.5]">
          <div className="" >
            <Link href="/">
              <div className="container">
                <h2 className="text-[42px] text-black md:text-[2.5rem] sm:text-[1.5rem]">Ken Jayakusuma</h2>
                <hr className="bg-[#19A7CE] rounded-full h-2 w-14 -mt-7 md:-mt-7 sm:mt-2"/>
              </div>
            </Link>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 sm:mt-4 mt-8 md:block md:pb-0 md:mt-0`}
            >
              <div className="flex space-x-4 items-center">
                {NAV_ITEMS.map((item, idx) => {
                  return (
                    <Link
                      key={idx}
                      href={item.page}
                      className={
                        "block lg:inline-block text-black hover:text-[#19A7CE] transition tracking-[0.1rem] cursor-pointer md:text-[24px] sm:text-[0.8rem] font-semibold"
                      }
                    >
                      {item.label}
                    </Link>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
