export default function Navbar() {
  return (
    <nav className="flex h-[75px] items-center px-4 md:px-20 lg:px-32">
      <div className="flex flex-grow">
        <h2>Amy Hirschi Coaching</h2>
      </div>
      <div className="">
        <div className="sm:hidden">Menu</div>
        <ul className="hidden sm:flex flex-row gap-8">
          <li className="hidden">About</li>
          <li className="hidden">Services</li>
          <li className="hidden">Coaching</li>
          <li>
            <a href="mailto:amyhirschi@gmail.com">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
