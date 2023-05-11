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
    <header className="w-full mx-auto px-28 pt-28 bg-white ">
      <div className="flex items-center">
        <div className="m-4">
          <Image
            src="/profile.jpg"
            alt=""
            width={180}
            height={180}
            className="rounded-full shadow-2xl"
          />
        </div>
        <div className="leading-[2.7]">
          <div className="" >
            <Link href="/">
              <div className="container">
                <h2 className="text-[42px] text-black">Ken Jayakusuma</h2>
                <hr className="bg-[#19A7CE] rounded-full h-3 w-10 -mt-4"/>
              </div>
            </Link>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0`}
            >
              <div className="flex space-x-4 items-center">
                {NAV_ITEMS.map((item, idx) => {
                  return (
                    <Link
                      key={idx}
                      href={item.page}
                      className={
                        "block lg:inline-block text-black tracking-[9] cursor-pointer text-[24px] font-semibold"
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
