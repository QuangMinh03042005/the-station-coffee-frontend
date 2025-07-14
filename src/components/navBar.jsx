import { Link } from "react-router-dom";
import { getImage } from "../utils/images";

const logo = getImage("images", "logo")
console.log(logo)

export default function Navbar() {
  const items = ["Trang Chủ", "Menu", "Giới Thiệu"]
  const links = ["/", "menu", "about" ]
  return (
    <nav className="bg-gradient-to-r from-[#1a2a33] via-[#22333b] to-[#1a2a33] text-[#f5c453] shadow-md py-4 flex justify-between items-center">
      <div className="flex items-center justify-center space-x-1">
        <img
          src={logo}
          className="w-16 h-16 rounded-full"
        ></img>
        <span className="text-xl font-semibold tracking-widest">The Station Coffee</span>
      </div>

      <div >
        <ul className="flex space-x-6 font-light text-lg">
          {
            items.map((item, index) => (
              <li key={index} className="inline-block px-1 py-0.5 hover:underline underline-offset-8 decoration-[#f5c453] decoration-2 cursor-pointer transition-all duration-150"
>
                <Link to={links[index]} > {item}</Link>
                </li>
            ))
          }
        </ul>
      </div>
    </nav>
  );
}
