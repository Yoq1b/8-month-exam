import React, { useState, useContext } from "react";
import { Data } from "../db/data";
import {
  GoArrowLeft,
  GoArrowRight,
  GoHeart,
  GoHeartFill,
} from "react-icons/go";
import line from "/assets/line.svg";
import { NavLink } from "react-router-dom";
import {
  ProductContext,
  ShopContext,
  LikeContext,
  SvarnitContext,
} from "../App";

const Products = () => {
  const [translateX, setTranslateX] = useState(0);
  const [slideCount, setSlideCount] = useState(0);
  const maxSlideCount = 12; // Maksimal oldinga surishlar soni
  const itemWidth = 330;
  const { shop, setShop } = useContext(ShopContext); // Added addToCart function from context
  const { product, setProduct } = useContext(ProductContext); // Added product state and setProduct function from context
  const { likedd, setLikedd } = useContext(LikeContext);
  const { svar, setSvar } = useContext(SvarnitContext);

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

  const toggleLike = (itemId) => {
    setLikedd((prevLiked) =>
      prevLiked.includes(itemId)
        ? prevLiked.filter((id) => id !== itemId)
        : [...prevLiked, itemId]
    );
  };

  const toggleSvarnit = (itemId) => {
    setSvar((prevSvar) =>
      prevSvar.includes(itemId)
        ? prevSvar.filter((id) => id !== itemId)
        : [...prevSvar, itemId]
    );
  };

  const handleProductClick = (item) => {
    setProduct((prevProduct) =>
      prevProduct.includes(item.id)
        ? prevProduct.filter((id) => id !== item.id)
        : [...prevProduct, item.id]
    );
  };

  const handleCardClick = (itemId) => {
    setShop([itemId]);
    window.scrollTo(0, 0); // Bu yerda ekranni yuqoriga ko'taramiz
  };

  return (
    <div className="w-[1440px] m-auto pl-[65px]">
      <div className="flex my-[150px] items-start justify-between">
        <div>
          <h4 className="text-[#202020] text-[30px] mb-[40px] font-medium leading-[36px]">
            Рекомендуемые
            <br /> товары
          </h4>
          <p className="text-[#202020] text-[16px] hover:text-[#088269] hover:cursor-pointer hover:scale-105 duration-200 hover:opacity-100 opacity-50 mb-[10px] font-medium">
            Хиты продаж
          </p>
          <p className="text-[#202020] text-[16px] hover:text-[#088269] hover:cursor-pointer hover:scale-105 duration-200 hover:opacity-100 opacity-50 mb-[10px] font-medium">
            Новинки
          </p>
          <p className="text-[#202020] text-[16px] hover:text-[#088269] hover:cursor-pointer hover:scale-105 duration-200 hover:opacity-100 opacity-50 font-medium">
            Акции
          </p>
        </div>
        <div>
          <div className="flex items-center w-[1050px] overflow-x-hidden">
            <div
              className="flex items-center transition-transform duration-500"
              style={{ transform: `translateX(${translateX}px)` }}
            >
              {Data.map((item) => (
                <div
                  key={item.id}
                  className="w-[320px] mr-[10px] mb-[10px] h-[522px] rounded-[10px] border border-[#E5E2EE] bg-[#f5f5f6]"
                >
                  <div className="relative w-full mt-[1px] h-[279px] flex items-center justify-center rounded-tl-[10px] rounded-tr-[10px] bg-white">
                    <div className="absolute top-[15px] left-[15px] flex items-center justify-between w-[290px]">
                      <div className=" bg-[#E1EFE6] flex items-center justify-center w-[79px] h-[27px] border border-[#088269] rounded-[60px]">
                        <p className="text-[#088269] text-[14px] font-semibold">
                          Новинка
                        </p>
                      </div>
                      <div className="flex items-center gap-[10px]">
                        <img
                          onClick={() => toggleSvarnit(item.id)}
                          src={line}
                          alt="rasm"
                          className="w-[24px] h-[24px] hover:cursor-pointer"
                        />
                        <div
                          className={`w-[35px] h-[35px] hover:cursor-pointer rounded-[4px] duration-75 flex items-center justify-center ${
                            likedd.includes(item.id) ? "text-black" : ""
                          }`}
                          onClick={() => toggleLike(item.id)}
                        >
                          {likedd.includes(item.id) ? (
                            <GoHeartFill className="text-[26px] h-[35px] text-[#088269]" />
                          ) : (
                            <GoHeart className="text-[26px] hover:text-[#088269] text-black" />
                          )}
                        </div>
                      </div>
                    </div>
                    <NavLink to="/stranitsa">
                      <img
                        onClick={() => handleCardClick(item.id)}
                        src={item.image}
                        alt="rasm"
                        className="w-[190px] h-[190px]"
                      />
                    </NavLink>
                  </div>
                  <hr />
                  <p className="text-[#202020] w-[180px] ml-[15px] mt-[20px] mb-[10px] font-medium text-[16px] leading-[25px]">
                    {item.surname}
                  </p>
                  <p className="text-[#7A7687] ml-[15px] mb-[5px] text-[12px] font-normal leading-[16.40px]">
                    Артикул: 213134
                  </p>
                  <p className="text-[#7A7687] ml-[15px] mb-[30px] text-[12px] font-normal leading-[16.40px]">
                    В наличии
                  </p>
                  <p className="text-[#202020] mb-[15px] ml-[15px] text-[18px] leading-[24.60px] font-semibold">
                    {item.price} руб.
                  </p>
                  <button
                    onClick={() => handleProductClick(item)}
                    className="w-[296px] h-[41px] rounded-[50px] border border-[#D5D1E1]  ml-[15px] text-[14px] font-semibold text-[#088269] hover:bg-[#088269] hover:text-[#f5f5f6] duration-200"
                  >
                    Добавить в корзину
                  </button>
                </div>
              ))}
            </div>
          </div>
          <div className="w-[1050px] mt-[40px] flex items-center justify-between pr-[65px]">
            <div className="flex items-center gap-[10px]">
              <button
                onClick={handlePrev}
                disabled={slideCount === 0}
                className={`w-[41px] h-[41px] flex items-center justify-center rounded-[50%] border border-[#D5D1E1] ${
                  slideCount > 0
                    ? "hover:bg-slate-300"
                    : "bg-gray-300 cursor-not-allowed"
                }`}
              >
                <GoArrowLeft className="text-[#202020] text-[22px]" />
              </button>
              <button
                onClick={handleNext}
                disabled={slideCount === maxSlideCount}
                className={`w-[41px] h-[41px] flex  items-center justify-center rounded-[50%] border border-[#D5D1E1] ${
                  slideCount < maxSlideCount
                    ? "hover:bg-slate-300"
                    : "bg-gray-300 cursor-not-allowed"
                }`}
              >
                <GoArrowRight className="text-[#202020] text-[22px] " />
              </button>
            </div>
            <div className="flex items-center gap-[10px]">
              <button className="w-[241px] h-[41px] rounded-[50px] text-[#088269] border border-[#D5D1E1] hover:border-[#088269] text-[16px] font-semibold hover:scale-105 duration-200 hover:text-[#f8f7f3] hover:bg-[#088269]">
                Бесплатная консультация
              </button>
              <button className="w-[138px] h-[41px] rounded-[50px] bg-[#088269] text-[#F8F7F3] border border-[#D5D1E1] hover:border-[#088269] text-[16px] font-semibold hover:scale-105 duration-200 hover:text-[#f8f7f3] hover:bg-[#088269]">
                Все товары
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
