import React, { useState, useContext } from "react";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { Data } from "../db/data";
import { NavLink } from "react-router-dom";
import { ShopContext } from "../App";

const Populyarnie = () => {
  const [translateX, setTranslateX] = useState(0);
  const [slideCount, setSlideCount] = useState(0); // slideCount holati
  const maxSlideCount = 6; // Maksimal oldinga surishlar soni
  const itemWidth = 330;

  const handleNext = () => {
    if (slideCount < maxSlideCount) {
      setTranslateX((prev) => prev - itemWidth);
      setSlideCount((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (slideCount > 0) {
      setTranslateX((prev) => prev + itemWidth);
      setSlideCount((prev) => prev - 1);
    }
  };
  const handleCardClick = (itemId) => {
    setShop([itemId]);
    window.scroll(0, 0); // Bu yerda ekranni yuqoriga ko'taramiz
  };

  const { shop, setShop, addToCart } = useContext(ShopContext);
  return (
    <>
      <div className="w-[1440px] m-auto pl-[65px]">
        <div className="flex my-[150px] items-start justify-between">
          <div>
            <h4 className="text-[#202020] text-[30px] mb-[25px] font-medium leading-[36px]">
              Популярные
              <br /> категории
            </h4>
          </div>
          {/* --------------- */}
          <div>
            <div className="flex items-center w-[1050px] overflow-x-hidden">
              <div
                className="flex items-center transition-transform duration-500"
                style={{ transform: `translateX(${translateX}px)` }}
              >
                {Data.slice(0, 9)
                  // .reverse()
                  .map((item) => (
                    <div
                      key={item.id}
                      className="w-[320px] h-[280px] mr-[10px] border border-[#d1d1d2] bg-[#f2f0f7] rounded-[10px]"
                    >
                      <div className="w-full h-[196px] flex items-center justify-center rounded-tl-[10px] rounded-tr-[10px] bg-white">
                        <NavLink to="/stranitsa">
                          <img
                            onClick={() => {
                              handleCardClick(item.id);
                            }}
                            className="w-[173px] h-[173px]"
                            src={item.image}
                            alt="rasm"
                          />
                        </NavLink>
                      </div>
                      <hr className="w-full border border-[#d1d1d2]" />
                      <p className="text-[#202020] w-[184px] text-[16px] font-medium ml-[25px] mt-[20px]">
                        {item.name}
                      </p>
                    </div>
                  ))}
              </div>
            </div>
            <div className="w-[1050px] mt-[40px] flex items-center justify-between pr-[65px]">
              <div className="flex items-center gap-[10px]">
                <button
                  onClick={handlePrev}
                  disabled={slideCount === 0} // Boshlang'ich holatda back button ishlamaydi
                  className={`w-[41px] h-[41px] flex items-center justify-center rounded-[50%] border border-[#D5D1E1] ${
                    slideCount > 0 ? "hover:bg-slate-300" : "bg-gray-300"
                  }`}
                >
                  <GoArrowLeft className="text-[#202020] text-[22px] " />
                </button>
                <button
                  onClick={handleNext}
                  disabled={slideCount === maxSlideCount} // 3 marta bosilgandan keyin next button ishlamaydi
                  className={`w-[41px] h-[41px] flex  items-center justify-center rounded-[50%] border border-[#D5D1E1] ${
                    slideCount < maxSlideCount
                      ? "hover:bg-slate-300"
                      : "bg-gray-300"
                  }`}
                >
                  <GoArrowRight className="text-[#202020] text-[22px] " />
                </button>
              </div>
              <NavLink to="/katalog">
                <button className="w-[155px] h-[41px] rounded-[50px] bg-[#088269] text-[#F8F7F3] text-[16px] font-semibold hover:scale-105 duration-200 hover:bg-[#07745E]">
                  Все категории
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Populyarnie;
