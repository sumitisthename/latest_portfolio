import React from 'react';

const Header = () => {
  return (
    <header className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between p-4 px-8 bg-gradient-to-b from-black to-transparent">
      <h1 className="text-3xl font-bold text-red-600 uppercase tracking-wider">
        Portfolio
      </h1>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <a href="#projects" className="hover:text-gray-400">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-gray-400">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
