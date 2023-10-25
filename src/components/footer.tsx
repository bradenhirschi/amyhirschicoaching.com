import { BsFacebook, BsInstagram } from "react-icons/bs";

export default function Footer() {
  return (
    <footer className="bg-gray-800 flex flex-col items-center pt-12 pb-24 text-gray-100">
      <div>
        <nav className="flex social-links mb-4 justify-center gap-4">
          <a href="https://www.instagram.com/the_adoptioncoach">
            <BsInstagram size={24} />
          </a>
          <a href="https://www.facebook.com/theadoptioncoach">
            <BsFacebook size={24} />
          </a>
        </nav>
        <p>Copyright © 2023 Amy Hirschi</p>
      </div>
    </footer>
  );
}
