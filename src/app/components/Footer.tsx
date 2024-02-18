import Image from "next/image";
import logo from "../../../public/img/1722x543-banner Medium.png";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className="bg-primary flex md:flex-row flex-col justify-around py-10 items-center">
        <div className="logo">
          <Image src={logo} alt="logo" className="w-1/2" />
        </div>
        <div className="right-wrap">
          <div className="links flex flex-col text-neutral gap-5">
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="">Terms of Service</Link>
            <Link href="">Cookie Policy</Link>
          </div>
        </div>
        <div className="contact flex flex-col text-neutral gap-5">
          <p>Contact: Ilko Hristov</p>
          <Link href="mailto:management@growmymail.com">management@growmymail.com</Link>
          <p>18 Yuriy Venelin St</p>
          <p>Gabrovo, Bulgaria, EU, 5300</p>
        </div>
      </footer>
    </>
  );
}
