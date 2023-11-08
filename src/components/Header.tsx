import Link from "next/link";

export default function Header() {
  return (
    <>
      <header>
        <div className="logo">{/*logo here */}</div>
        <nav>
          <ul>
            <Link href="">Link 1</Link>
            <Link href="">Link 2</Link>
            <Link href="">Link 3</Link>
          </ul>
        </nav>
      </header>
    </>
  );
}
