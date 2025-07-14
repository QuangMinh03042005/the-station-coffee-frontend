import { Link } from "react-router-dom";
import { getImage } from "../utils/images";
import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const logo = getImage("images", "logo")
console.log(logo)

const menuItems = ["Trang Chủ", "Menu", "Giới Thiệu"]
const links = ["/", "menu", "about"]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-gradient-to-r from-[#1a2a33] via-[#22333b] to-[#1a2a33] text-[#f5c453] shadow-md py-4 flex justify-between items-center">
      <div className="flex items-center justify-center space-x-1">
        <img
          src={logo}
          className="w-16 h-16 rounded-full"
        ></img>
        <span className="text-xl font-semibold tracking-widest">The Station Coffee</span>
      </div>

      {/* Icon menu trên mobile */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
        </button>
      </div>

      {/* Menu - hiển thị ở màn hình lớn */}
      <div>
        <ul className="hidden md:flex space-x-6 font-light text-lg">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className="relative group cursor-pointer px-2 py-1"
            >
              <Link to={links[index]}><span>{item}</span></Link>

              <span className="absolute left-0 bottom-0 h-[2px] w-full translate-y-[6px] bg-[#f5c453] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
            </li>
          ))}
        </ul>
      </div>

      {/* Menu khi mở ở mobile */}
      {isOpen && (
        <ul className="md:hidden mt-4 space-y-2 text-base font-light px-2">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className="px-3 py-2 rounded hover:bg-[#f5c453]/20 hover:text-white transition"
            >
              <Link to={links[index]}><span>{item}</span></Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}

