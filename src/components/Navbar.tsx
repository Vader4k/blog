import Image from "next/image";
import { navLinks } from "@/lib/navbar";
import Link from "next/link";
import Toggle from "./Toggle";

const Navbar = () => {
  return (
    <header className="">
      <nav className="flex items-center justify-between py-10">
        <div className="flex items-center gap-3 flex-1">
          <Image src="/instagram.svg" width={24} height={24} alt="instagram" />
          <Image src="/linkedin.svg" width={24} height={24} alt="linkedin" />
          <Image src="/github.svg" width={24} height={24} alt="github" />
          <Image src="/twitter.svg" width={24} height={24} alt="twitter" />
        </div>
        <div className="font-semibold text-2xl flex-1 text-center">Danny{"'"}s Blog</div>
        <div className="flex items-center gap-5 flex-1">
          <Toggle />
          <div className="flex items-center gap-5">
            {navLinks.map((link) => (
              <Link href={link.url} key={link.id}>
                {link.title}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
