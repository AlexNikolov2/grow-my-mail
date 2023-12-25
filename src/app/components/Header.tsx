'use client'

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
    <header className="bg-primary p-4 md:flex md:justify-between md:items-center">
      <div className="flex items-center justify-between">
        <div className="logo">
          <Image src={logo} alt="logo" width={300} height={100} />
        </div>
        <button
          onClick={handleClick}
          className="md:hidden flex items-center text-white"
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>
      </div>

      <nav
        className={`${isOpen ? "block" : "hidden"
          } md:flex md:items-center md:w-auto mt-4 md:mt-0`}
      >
        <section className="flex flex-col md:flex-row gap-5 items-center text-neutral text-xl">
          <Link href="">
            About Us
          </Link>
          <Link href="" className="btn btn-secondary font-bold">
            Book a Call
          </Link>
        </section>
      </nav>
    </header>
  );
}