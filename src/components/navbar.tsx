import ahLogo from "../../public/ah-logo.png";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="flex h-[65px] items-center px-4 md:px-20 lg:px-32">
      <div className="flex flex-grow">
        <Image src={ahLogo} alt="AH logo" height={50}/>
      </div>
      <div className="">
        <div className="sm:hidden">Menu</div>
        <ul className="hidden sm:flex flex-row gap-8">
          <li className="hidden">About</li>
          <li className="hidden">Services</li>
          <li className="hidden">Coaching</li>
          <li>
            <a className="button">Grab your free copy!</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
