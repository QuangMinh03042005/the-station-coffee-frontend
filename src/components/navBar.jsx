import { Link } from "react-router-dom";

export default function Navbar() {
  const items = ["Trang Chủ", "Menu", "Giới Thiệu", "Liên Hệ"]
  const links = ["/", "menu", "about" , "contact"]
  return (
    <nav className="bg-green-300 shadow px-6 py-4 flex justify-between items-center">
      <div className="flex items-center justify-center space-x-1">
        <img
          src="src/assets/images/logo.jpg"
          className="w-16 h-16 rounded-full"
        ></img>
        <h1 className="text-xl">The Station Coffee</h1>
      </div>

      <div >
        <ul className="flex space-x-4 leading-loose">
          {
            items.map((item, index) => (
              <li key={index} className="hover:bg-orange-500">
                <Link to={links[index]} > {item}</Link>
                </li>
            ))
          }
        </ul>
      </div>
    </nav>
  );
}
