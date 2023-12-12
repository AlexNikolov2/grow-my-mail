import Image from "next/image";
import logo from "../../../public/img/1722x543-banner Medium.png";

export default function Footer() {
  return (
    <>
      <footer className="bg-primary">
        <div className="logo">
          <Image src={logo} alt="logo" className="w-1/4" />
        </div>
      </footer>
    </>
  );
}
