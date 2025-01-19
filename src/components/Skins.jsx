import PropTypes from "prop-types";
import { useState, useEffect, useRef } from "react";

const Skins = ({ data, id }) => {
  console.log(data, "skins?");
  const [selectedImage, setSelectedImage] = useState(data?.[0]?.num || 0);
  const containerRef = useRef(null); // Referencia al contenedor de imágenes

  useEffect(() => {
    if (data && data.length > 0) {
      setSelectedImage(data[0].num);
    }
  }, [data]);

  const scrollToImage = (direction) => {
    if (direction === "next") {
      setSelectedImage((prevSelectedImage) => {
        const currentIndex = data.findIndex(
          (item) => item.num === prevSelectedImage
        );
        const nextIndex = (currentIndex + 1) % data.length;
        moveScroll(nextIndex);
        return data[nextIndex].num;
      });
    } else if (direction === "prev") {
      setSelectedImage((prevSelectedImage) => {
        const currentIndex = data.findIndex(
          (item) => item.num === prevSelectedImage
        );
        const prevIndex = (currentIndex - 1 + data.length) % data.length;
        moveScroll(prevIndex);
        return data[prevIndex].num;
      });
    }
  };

  const moveScroll = (index) => {
    const container = containerRef.current;
    const targetScroll = index * 240;
    container.scrollTo({ left: targetScroll, behavior: "smooth" });
  };

  if (!data || data.length === 0 || !id) {
    return <p className="text-white">Cargando habilidades...</p>;
  }

  return (
    <div className="flex flex-col w-[1500px] h-full mx-auto py-12">
      <h3 className="text-left font-lol text-[#0a1428] text-3xl font-bold italic uppercase mb-7">
        Aspectos disponibles
      </h3>
      <div className="w-full aspect-auto mb-4">
        <img
          className="bg-red-600 w-full aspect-auto object-cover"
          src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${id}_${selectedImage}.jpg`}
          alt="Selected Skin"
        />
      </div>
      <div className="relative">
        <div
          ref={containerRef}
          className="flex flex-row flex-nowrap gap-4 overflow-x-hidden flex-shrink-0 w-[90%] mx-auto "
        >
          {data.map((skin, index) => (
            <div
              key={index}
              className="flex-shrink-0 items-center justify-center text-center p-2 group"
              onClick={() => setSelectedImage(skin.num)}
            >
              <div
                className={`w-60 aspect-auto cursor-pointer p-1  ${
                  selectedImage === skin.num
                    ? "border-4 border-[#c8aa6e]"
                    : "border-4 border-white"
                }`}
              >
                <img
                  className="aspect-auto cursor-pointer group-hover:scale-105 transition-transform"
                  src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${id}_${skin.num}.jpg`}
                  alt={`Skin ${skin.num}`}
                />
              </div>
              <p
                className={`max-w-60 font-lol text-lg font-normal uppercase mt-8 group-hover:text-[#c8aa6e] ${
                  selectedImage === skin.num
                    ? "text-[#c8aa6e]"
                    : "text-black/40"
                }`}
              >
                {skin.name}
              </p>
            </div>
          ))}
        </div>
        <div className="absolute right-0 flex flex-row justify-end  text-[#c8aa6e]">
          <button
            className="hover:-translate-y-1 transition cursor-pointer text-[#c8aa6e] font-bold px-4 py-2 text-center my-auto flex items-center justify-center rounded-sm text-4xl"
            onClick={() => scrollToImage("prev")}
          >
            <span>&#x2190;</span>
          </button>
          <button
            className="hover:-translate-y-1 transition cursor-pointer text-[#c8aa6e] font-bold px-4 py-2 text-center my-auto flex items-center justify-center rounded-sm text-4xl"
            onClick={() => scrollToImage("next")}
          >
            <span className="">&#x2192;</span>
          </button>
        </div>
      </div>
    </div>
  );
};

Skins.propTypes = {
  data: PropTypes.array,
  id: PropTypes.string,
};

export default Skins;
