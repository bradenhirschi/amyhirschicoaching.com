import ahLogo from "../../public/ah-logo.png";
import Image from "next/image";
import CallToActionButton from "@component/components/callToActionButton";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex h-[65px] items-center px-4 md:px-20 lg:px-32">
      <div className="flex flex-grow">
        <Link href="/">
          <Image src={ahLogo} alt="AH logo" height={50} />
        </Link>
      </div>
      <div>
        <div className="sm:hidden">Menu</div>
        <ul className="hidden sm:flex flex-row gap-8">
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
