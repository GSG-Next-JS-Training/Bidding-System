import Image from "next/image";
import Link from "next/link";
import { FaTwitter, FaFacebookF, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" bg-base-content text-white py-6">
      <div className="container mx-auto flex flex-col items-center gap-6 px-4">
        <Image
          src="/image/logo.png"
          alt="Logo"
          width={100}
          height={100}
          className="mb-2"
        />
        <p className="text-gray-400 hover:text-white cursor-pointer transition duration-300">
          Contact Us
        </p>

        <div className="flex gap-6 text-2xl">
          <Link
            href="https://www.facebook.com"
            target="_blank"
            aria-label="Facebook"
          >
            <FaFacebookF className="hover:text-blue-500 transition duration-300" />
          </Link>
          <Link
            href="https://www.twitter.com"
            target="_blank"
            aria-label="Twitter"
          >
            <FaTwitter className="hover:text-sky-400 transition duration-300" />
          </Link>
          <Link
            href="https://www.instagram.com"
            target="_blank"
            aria-label="Instagram"
          >
            <FaInstagram className="hover:text-pink-500 transition duration-300" />
          </Link>
        </div>

        <p className="text-xs text-gray-500 mt-4">
          &copy; {new Date().getFullYear()} Tending System. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
export default Footer;
