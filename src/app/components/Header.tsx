"use client";

import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/img/1722x543-banner Medium.png";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className="flex justify-between bg-primary xs:flex-nowrap md:flex-nowrap sm:flex-wrap">
        <div className="logo">
          <Image src={logo} alt="logo" className="sm:w-1/2 w-3/4" />
        </div>
        <button
          onClick={handleClick}
          className="md:hidden flex flex-col justify-center items-center mr-20"
        >
          <span
            className={`bg-white block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm ${
                      isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
                    }`}
          ></span>
          <span
            className={`bg-white block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm my-0.5 ${
                      isOpen ? "opacity-0" : "opacity-100"
                    }}`}
          ></span>
          <span
            className={`bg-white block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm ${
                      isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
                    }`}
          ></span>
        </button>
        <nav className="hidden md:flex gap-5 items-center mr-20">
          <section className="flex gap-5 items-center text-neutral text-xl">
            <Link href="">About Us</Link>
            <Link href="" className="btn btn-secondary font-bold">
              Book a Call
            </Link>
          </section>
        </nav>
        {isOpen ? (
          <nav className="flex flex-col gap-5 items-center mr-20">
            <section className="flex flex-col gap-5 items-center text-neutral text-xl">
              <Link href="">About Us</Link>
              <Link href="" className="btn btn-secondary font-bold">
                Book a Call
              </Link>
            </section>
          </nav>
        ) : (
          <nav className="hidden gap-5 items-center mr-20">
            <section className="hidden">
              <Link href="">About Us</Link>
              <Link href="" className="btn btn-secondary font-bold">
                Book a Call
              </Link>
            </section>
          </nav>
        )}
      </header>
    </>
  );
}
