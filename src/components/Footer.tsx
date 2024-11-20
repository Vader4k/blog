import Image from "next/image";
import { footerLinks } from "@/lib/footer";

const Footer = () => {
  return (
    <footer className="px-5 border-t md:mt-20 py-8 md:px-20 flex-col gap-5 md:flex-row flex items-start justify-between w-full">
      <div className="flex flex-col gap-2 flex-1">
        <div className="flex items-center gap-1">
          <Image src={"/logo.png"} alt="logo" width={40} height={40} />
          <span className="font-bold text-2xl">Daniel Blog</span>
        </div>
        <p className="text-sm max-w-[400px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
          architecto expedita, enim rem quis mollitia adipisci ut temporibus
          magni fuga.
        </p>
      </div>
      <ul className="flex md:justify-end gap-20 md:flex-1 w-full ">
        {footerLinks.map((link)=> (
          <li key={link.id}>
            <h2 className="font-medium">{link.title}</h2>
            <ul className="mt-2 text-sm flex flex-col gap-2 text-gray-700">
              {link.links.map((item) => (
                <li key={item.id}>
                  <a href={item.url}>{item.title}</a>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </footer>
  );
};

export default Footer;
