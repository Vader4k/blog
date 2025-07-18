"use client"

import Image from "next/image"
import { navLinks } from "@/lib/navbar"
import Link from "next/link"
import { useSession } from "next-auth/react"
import { useState } from "react"
import { handleSignOut } from "@/app/actions/auth"

const Navbar = () => {
  const { data: session, status } = useSession()
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false)

  if (status === "loading") {
    return <div>loading...</div>
  }

  return (
    <header className="sticky top-0 z-[20] bg-white border-b px-5 lg:px-20">
      <nav className="flex items-center justify-between py-5 md:py-10">
        <div className="flex-1 block lg:hidden">
          <Image
            className=""
            src={"/logo.png"}
            alt="logo"
            width={30}
            height={30}
          />
        </div>
        <div className="hidden lg:flex items-center gap-3 flex-1">
          <Image src="/instagram.svg" width={24} height={24} alt="instagram" />
          <Image src="/linkedin.svg" width={24} height={24} alt="linkedin" />
          <Image src="/github.svg" width={24} height={24} alt="github" />
          <Image src="/twitter.svg" width={24} height={24} alt="twitter" />
        </div>
        <div className="font-bold text-2xl flex-1 text-center ">V</div>
        <div className="hidden lg:flex items-center gap-5 flex-1">
          <div className="flex items-center gap-5">
            {navLinks.map((link) => (
              <Link href={link.url} key={link.id}>
                {link.title}
              </Link>
            ))}
            {session ? (
              <div className="flex items-center gap-5">
                <form action={handleSignOut}>
                  <button className="w-16" type="submit">Sign out</button>
                </form>
                <Link href="/write">Write</Link>
              </div>
            ) : (
              <Link href={"/login"}>Login</Link>
            )}
          </div>
        </div>
        <button
          type="button"
          onClick={() => setIsNavOpen(!isNavOpen)}
          className="flex flex-col gap-1 flex-1 lg:hidden w-full items-end place-items-end"
        >
          <div
            className={`w-6 border border-black transition-transform duration-300 ${
              isNavOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          />
          <div
            className={`w-6 border border-black ${
              isNavOpen ? "opacity-0" : ""
            }`}
          />
          <div
            className={`w-6 border border-black transition-transform duration-300 ${
              isNavOpen ? "rotate-[-45deg] -translate-y-1.5" : ""
            }`}
          />
        </button>
      </nav>
      {isNavOpen && (
        <div className="flex text-3xl flex-col justify-center gap-8 items-center bg-black bg-opacity-90 text-white fixed top-[80px] h-screen left-0 w-full z-[10]">
          {navLinks.map((link) => (
            <Link
              onClick={() => setIsNavOpen(false)}
              href={link.url}
              key={link.id}
            >
              {link.title}
            </Link>
          ))}
          {session ? (
            <div className="flex flex-col gap-8 items-center justify-center">
              <form action={handleSignOut}>
                <button type="submit">Sign out</button>
              </form>
              <Link href="/write">Write</Link>
            </div>
          ) : (
            <Link href={"/login"}>Login</Link>
          )}
        </div>
      )}
    </header>
  )
}

export default Navbar
