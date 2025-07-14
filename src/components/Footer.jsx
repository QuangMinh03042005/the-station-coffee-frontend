import { getImage } from "../utils/images";
import { FaFacebookF, FaInstagram, FaTiktok, FaMapLocation, FaPhone, FaEnvelope } from 'react-icons/fa6';


const logo = getImage("images", "logo")
console.log(logo)

function Footer() {
  // return (
  //   <footer className="bg-gray-800 text-white text-center p-4 mt-8">
  //     <p>&copy;The Station Coffee 2023. All rights reserved. Website by The Station Coffee.</p>
  //   </footer>
  // );
  return (
    <footer className="bg-[#1a2a33] text-[#f5c453] px-8 py-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm">
        {/* Cột 1 - Có logo */}
        <div>
          <img
            src={logo}
            alt="The Station Logo"
            className="w-[128px] h-[128px] rounded-full"
          />
          <h3 className="text-base font-semibold mb-2">Về chúng tôi</h3>
          <p>
            The Station là nơi dừng chân của những tâm hồn yêu cà phê và sự
            hoài niệm.
          </p>
        </div>

        {/* Cột 2 - Liên hệ */}
        <div>
          <h3 className="text-base font-semibold mb-2">Liên hệ</h3>
          <ul className="space-y-2">
            <li className="flex items-start space-x-2">
              <FaMapLocation className="w-4 h-4 mt-0.5 flex-shrink-0" />
              <span>56 Trần Quý Cáp , Đức Long , Phan Thiet, Vietnam</span>
            </li>
            <li className="flex items-center space-x-2">
              <FaPhone className="w-4 h-4 flex-shrink-0" />
              <span>0344650807</span>
            </li>
            <li className="flex items-center space-x-2">
              <FaEnvelope className="w-4 h-4 flex-shrink-0" />
              <span>thestation@example.com</span>
            </li>
          </ul>
        </div>

        {/* Cột 3 - Mạng xã hội */}
        <div>
          <h3 className="text-base font-semibold mb-2">Mạng xã hội</h3>
          <ul className="space-y-2">
            <li>
              <a
                href="https://www.facebook.com/profile.php?id=61557606703213"
                className="flex items-center space-x-2 hover:underline hover:text-white transition"
              >
                <FaFacebookF className="w-4 h-4" />
                <span>Facebook</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/_thestation86/"
                className="flex items-center space-x-2 hover:underline hover:text-white transition"
              >
                <FaInstagram className="w-4 h-4" />
                <span>Instagram</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center space-x-2 hover:underline hover:text-white transition"
              >
                <FaTiktok className="w-4 h-4" />
                <span>Tiktok</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Thanh ngăn cách */}
      <hr className="my-6 border-t border-[#f5c453]/30" />

      {/* Copyright */}
      <div className="mt-8 text-center text-xs text-[#f5c453]/70">
        &copy; 2025 The Station Café. Thiết kế bởi Quang Minh.
      </div>
    </footer>
  );
}

export default Footer;
