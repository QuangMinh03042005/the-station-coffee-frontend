import { useState, useEffect } from "react";

const path = "src/assets/images/slide/"
const images = []
for (var i = 1; i <= 3; ++i) {
    images.push(path + "img-" + i + ".jpg")
}

function ImageSlideShow() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Chuyển ảnh sau mỗi 5 giây
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === images.length - 1 ? 0 : prev + 1
      );
    }, 5000); // 5000ms = 5s

    return () => clearInterval(interval); // cleanup
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="relative w-full   overflow-hidden rounded-2xl shadow-lg">
      <img
        src={images[currentIndex]}
        alt="slide"
        className="w-full max-w-full h-[75vh] object-cover transition-all duration-500 border border-gray-300 shadow-lg rounded-xl"
      />

      {/* Nút trái */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black"
      >
        &#8592;
      </button>

      {/* Nút phải */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black"
      >
        &#8594;
      </button>
    </div>
  );
}

function MainDrinks() {
    return (
        <div className="w-full max-w-full">
            <img src={images[0]} className="w-full"></img>
        </div>
    )
}

export default function Home() {
    return(
        <div className="flex flex-col gap-5 px-8 mt-10 w-full items-center">
            <ImageSlideShow/>
            <MainDrinks/>
        </div>
    )
}