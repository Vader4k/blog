"use client";
import Image from "next/image";
import { navLinks } from "@/lib/navbar";
import Link from "next/link";
import { signOut } from "@/auth";
import { useState } from "react";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);
  const session = false;

  const handleSignOut = async () => {
    await signOut();
  };

  return (
    <header className="sticky top-0 z-[20] bg-white border-b px-5 md:px-20">
      <nav className="flex items-center justify-between py-5 md:py-10">
        <div className="flex-1 block md:hidden">
          <Image
            className=""
            src={"/sun.png"}
            alt="logo"
            width={30}
            height={30}
          />
        </div>
        <div className="hidden md:flex items-center gap-3 flex-1">
          <Image src="/instagram.svg" width={24} height={24} alt="instagram" />
          <Image src="/linkedin.svg" width={24} height={24} alt="linkedin" />
          <Image src="/github.svg" width={24} height={24} alt="github" />
          <Image src="/twitter.svg" width={24} height={24} alt="twitter" />
        </div>
        <div className="font-bold text-2xl flex-1 text-center">V</div>
        <div className="hidden md:flex items-center gap-5 flex-1">
          <div className="hidden md:flex items-center gap-5">
            {navLinks.map((link) => (
              <Link href={link.url} key={link.id}>
                {link.title}
              </Link>
            ))}
            {session ? (
              <button onClick={handleSignOut}>Logout</button>
            ) : (
              <Link href={"/login"}>Login</Link>
            )}
          </div>
        </div>
        <button
          type="button"
          onClick={() => setIsNavOpen(!isNavOpen)}
          className="flex flex-col gap-1 flex-1 md:hidden w-full items-end place-items-end"
        >
          <div className={`w-6 border border-black transition-transform duration-300 ${isNavOpen ? "rotate-45 translate-y-1.5" : ""}`} />
          <div className={`w-6 border border-black ${isNavOpen ? "opacity-0" : ""}`} />
          <div className={`w-6 border border-black transition-transform duration-300 ${isNavOpen ? "rotate-[-45deg] -translate-y-1.5" : ""}`} />
        </button>
      </nav>
      {isNavOpen && (
        <div className="flex text-3xl flex-col justify-center gap-8 items-center bg-black bg-opacity-80 text-white absolute top-[70px] h-screen w-full z-[10]">
          {navLinks.map((link) => (
            <Link href={link.url} key={link.id}>
              {link.title}
            </Link>
          ))}
          {session ? (
            <button onClick={handleSignOut}>Logout</button>
          ) : (
            <Link href={"/login"}>Login</Link>
          )}
        </div>
      )}
    </header>
  );
};

export default Navbar;
