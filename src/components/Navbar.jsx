import React from 'react'
import logo from "../assets/abdulfattah1.png";
import { FaLinkedin, FaGithub } from 'react-icons/fa';

export const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-30 mt-5" src={logo} alt="logo" />
      </div>

      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/abdulfattah-ahmed"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500 transition-colors"
        >
          <FaLinkedin />
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/abdulfattaha42"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-400 transition-colors"
        >
          <FaGithub />
        </a>
      </div>
    </nav>
  );
};
