import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/img/1722x543-banner Medium.png";

export default function Header() {
  return (
    <>
      <header className="flex justify-between bg-primary">
        <div className="logo">
          <Image src={logo} alt="logo" className="w-1/2" />
        </div>
        <nav className="flex gap-5 items-center mr-20">
          <section className="flex gap-5 items-center text-neutral text-xl">
            <Link href="">About Us</Link>
            <Link href="" className="btn btn-secondary font-bold">
              Book a Call
            </Link>
          </section>
        </nav>
      </header>
    </>
  );
}
