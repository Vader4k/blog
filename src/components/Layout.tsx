'use client'
import Navbar from "./Navbar";
import Footer from "./Footer";
import { usePathname } from "next/navigation";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname()

  const noLayoutRoutes = ["/login"];

  const hideLayout = noLayoutRoutes.includes(pathname);

  return (
    <>
      {!hideLayout && <Navbar />} {children} {!hideLayout && <Footer />}
    </>
  );
};

export default Layout;
