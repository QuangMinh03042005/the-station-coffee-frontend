import { getImage } from "../utils/images"

const menu = getImage("images/menu", "menu")
export default function Menu() {
    return (
        <div className="flex flex-col gap-5 px-8 mt-10 w-full items-center">
            <img src={menu}></img>
            <h1 className="bg-yellow-100 text-yellow-800 border border-yellow-300 px-4 py-2 rounded-md text-center text-xl">
                Để đảm bảo trải nghiệm tốt nhất, Quý khách vui lòng thông báo trước cho nhân viên về các thành phần thực phẩm có thể gây dị ứng hoặc ảnh hưởng sức khoẻ quý khách.
                Đồng thời, The Station Coffee khuyến nghị Quý khách nên thưởng thức đồ uống trong vòng 2 giờ đầu tiên kể từ khi nhận thức uống tại quầy. Việc để đồ uống quá lâu hoặc vận chuyển với thời gian dài có thể ảnh hưởng đến hương vị và chất lượng của sản phẩm.
                The Station Coffee không chịu trách nhiệm đảm bảo chất lượng sản phẩm trong trường hợp các sản phẩm pha chế được dùng sau 2h kể từ khi rời quầy.</h1>
        </div>
    )
}