"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import Button from "./Button";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Services", href: "#services" },
  { name: "Contact", href: "#contact" },
];

const NavItem = ({ name, href }: any) => (
  <li className="nav-item inline-block text-white mx-2 lg:mx-5 font-medium uppercase relative">
    <Link href={href}>{name}</Link>
    <div className="absolute -bottom-1.5 left-0 w-0 rounded-2xl bg-white h-1 transition-all duration-300 origin-left"></div>
  </li>
);

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const checkScroll = () => {
    setIsScrolled(window.scrollY > 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScroll);
    return () => {
      window.removeEventListener("scroll", checkScroll);
    };
  }, []);

  return (
    <div className={`fixed w-full z-[100000]  top-0 left-0 ${isScrolled ? "bg-dark" : "bg-transparent"}`}>
      <div className="container mx-auto px-3 h-20 lg:h-24 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-x-1.5">
          <Image src="/logo.png" alt="Logo" width={40} height={40} />
          <h1 className="text-2xl lg:text-4xl text-white font-bold uppercase">bdelbasset</h1>
        </Link>
        <div className="hidden lg:flex items-center justify-between space-x-10">
          <ul className="text-white flex gap-x-2 items-center">
            {navItems.map((item) => (
              <NavItem key={item.name} {...item} />
            ))}
          </ul>
          <Link href="#contact" className="hidden xl:block">
            <Button>Let&#39;s Talk</Button>
          </Link>
        </div>
        {/* add humberger menu  */}
        <div onClick={handleMenuToggle} aria-label="Hamburger Menu" className="lg:hidden cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8 text-black-one dark:text-white">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
            )}
          </svg>
        </div>
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="flex flex-col lg:hidden fixed top-20 left-0 h-max bg-dark z-50 w-full  border-t overflow-hidden shadow-md "
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              exit={{ scaleY: 0 }}
              transition={{ ease: "easeOut", duration: 0.3 }}
              style={{ originY: 0 }}>
              <nav>
                <ul className="flex flex-col items-start gap-y-6 p-6">
                  {navItems.map((item) => (
                    <NavItem key={item.name} {...item} />
                  ))}
                </ul>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Navbar;
