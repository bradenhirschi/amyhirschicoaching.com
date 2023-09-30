import ahLogo from "../../public/ah-logo.png";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex h-[85px] items-center px-4 md:px-20 lg:px-32">
      <Link href="/">
        <Image src={ahLogo} alt="AH logo" height={50} />
      </Link>
      <div className="grow" />
      <div>
        <div className="hidden">Menu</div>
        <ul className="flex-row gap-8">
          <li className="hidden">
            <Link href="./about" className="navbar-link">
              About
            </Link>
          </li>
          <li>
            <Link href="./contact" className="navbar-link">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
