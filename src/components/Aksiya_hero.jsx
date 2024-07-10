import React, { useState, useContext } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { Data } from "../db/data";
import line from "/assets/line.svg";
import { GoHeart, GoHeartFill } from "react-icons/go";
import { ProductContext, ShopContext } from "../App";
import { BsThreeDots } from "react-icons/bs";
import { GrFormNext } from "react-icons/gr";
import { IoChevronBackOutline } from "react-icons/io5";

const Aksiya_hero = () => {
  const [liked, setLiked] = useState([]);
  const { shop, setShop, addToCart } = useContext(ShopContext);
  const { product, setProduct } = useContext(ProductContext);
  const [sale, setSale] = useState(1);
  const [sale1, setSale1] = useState(1);

  const toggleLike = (itemId) => {
    setLiked((prevLiked) =>
      prevLiked.includes(itemId)
        ? prevLiked.filter((id) => id !== itemId)
        : [...prevLiked, itemId]
    );
  };

  const handleCardClick = (itemId) => {
    setShop([itemId]);
    window.scroll(0, 0); // Bu yerda ekranni yuqoriga ko'taramiz
  };

  const handlePrevious = () => {
    if (sale1 > 1) {
      setSale1(sale1 - 1);
      setSale(sale1 - 1);
    }
  };

  const handleNext = () => {
    if (sale1 < 3) {
      setSale1(sale1 + 1);
      setSale(sale1 + 1);
    }
  };
  const handleProductClick = (item) => {
    if (!product.includes(item.id)) {
      setProduct([...product, item.id]);
    } else {
      setProduct(product.filter((id) => id !== item.id));
    }
  };

  return (
    <>
      <div className="w-[1310px] m-auto">
        <div className="flex items-start justify-between">
          <div className="w-[320px] h-[241px] rounded-[10px] pl-[20px] pr-[14px] border border-[#E5E2EE]">
            <p className="text-[#202020] text-[16px] font-medium my-[15px] leading-[22.4px]">
              Категории
            </p>
            <hr className="mb-[8px]" />
            <div className="group flex items-center hover:scale-105 duration-200 my-[12px] hover:cursor-pointer justify-between">
              <p className="text-[#202020] group-hover:text-[#088269] text-[14px] font-medium leading-[19px]">
                Группы товаров
              </p>
              <IoIosArrowForward className="group-hover:text-[#088269] " />
            </div>
            <div className="group flex items-center hover:scale-105 duration-200 my-[12px] hover:cursor-pointer justify-between">
              <p className="text-[#202020] group-hover:text-[#088269] text-[14px] font-medium leading-[19px]">
                Мониторы
              </p>
              <IoIosArrowForward className="group-hover:text-[#088269] " />
            </div>
            <div className="group flex items-center hover:scale-105 duration-200 my-[12px] hover:cursor-pointer justify-between">
              <p className="text-[#202020] group-hover:text-[#088269] text-[14px] font-medium leading-[19px]">
                Лампы
              </p>
              <IoIosArrowForward className="group-hover:text-[#088269] " />
            </div>
            <div className="group flex items-center hover:scale-105 duration-200 my-[12px] hover:cursor-pointer justify-between">
              <p className="text-[#202020] group-hover:text-[#088269] text-[14px] font-medium leading-[19px]">
                Кровати
              </p>
              <IoIosArrowForward className="group-hover:text-[#088269] " />
            </div>
            <div className="group flex items-center hover:scale-105 duration-200 my-[12px] hover:cursor-pointer justify-between">
              <p className="text-[#202020] group-hover:text-[#088269] text-[14px] font-medium leading-[19px]">
                Рентгены
              </p>
              <IoIosArrowForward className="group-hover:text-[#088269] " />
            </div>
          </div>
          <div className="w-[980px] flex items-center justify-between flex-wrap">
            {sale == 1 &&
              Data.slice(0, 9).map((item) => (
                <div
                  key={item.id}
                  className="w-[320px] mb-[10px] h-[522px] rounded-[10px] border border-[#E5E2EE] bg-[#f5f5f6]"
                >
                  <div className="relative w-full mt-[1px] h-[279px] flex items-center justify-center rounded-tl-[10px] rounded-tr-[10px] bg-white">
                    <div className="absolute top-[15px] left-[15px] flex items-center justify-between w-[290px]">
                      <div className=" bg-[#FFE095] flex items-center justify-center w-[55px] h-[27px] border border-[#AD7B00] rounded-[60px]">
                        <p className="text-[#855E00] text-[14px] font-semibold">
                          -30%
                        </p>
                      </div>
                      <div className="flex items-center gap-[10px]">
                        <img
                          src={line}
                          alt="rasm"
                          className="w-[24px] h-[24px] hover:cursor-pointer"
                        />
                        <div
                          className={`w-[35px] h-[35px]  hover:cursor-pointer bg-white  rounded-[4px] duration-75 flex items-center justify-center ${
                            liked.includes(item.id) ? "text-black" : ""
                          }`}
                          onClick={() => toggleLike(item.id)}
                        >
                          {liked.includes(item.id) ? (
                            <GoHeartFill className="text-[26px] h-[35px] text-red-600" />
                          ) : (
                            <GoHeart className="text-[26px]  hover:text-red-600 text-black" />
                          )}
                        </div>
                      </div>
                    </div>
                    <NavLink to="/stranitsa">
                      <img
                        onClick={() => {
                          handleCardClick(item.id);
                        }}
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
            {sale == 2 &&
              Data.slice(6, 15).map((item) => (
                <div
                  key={item.id}
                  className="w-[320px] mb-[10px] h-[522px] rounded-[10px] border border-[#E5E2EE] bg-[#f5f5f6]"
                >
                  <div className="relative w-full mt-[1px] h-[279px] flex items-center justify-center rounded-tl-[10px] rounded-tr-[10px] bg-white">
                    <div className="absolute top-[15px] left-[15px] flex items-center justify-between w-[290px]">
                      <div className=" bg-[#FFE095] flex items-center justify-center w-[55px] h-[27px] border border-[#AD7B00] rounded-[60px]">
                        <p className="text-[#855E00] text-[14px] font-semibold">
                          -30%
                        </p>
                      </div>
                      <div className="flex items-center gap-[10px]">
                        <img
                          src={line}
                          alt="rasm"
                          className="w-[24px] h-[24px] hover:cursor-pointer"
                        />
                        <div
                          className={`w-[35px] h-[35px]  hover:cursor-pointer bg-white  rounded-[4px] duration-75 flex items-center justify-center ${
                            liked.includes(item.id) ? "text-black" : ""
                          }`}
                          onClick={() => toggleLike(item.id)}
                        >
                          {liked.includes(item.id) ? (
                            <GoHeartFill className="text-[26px] h-[35px] text-red-600" />
                          ) : (
                            <GoHeart className="text-[26px]  hover:text-red-600 text-black" />
                          )}
                        </div>
                      </div>
                    </div>
                    <NavLink to="/stranitsa">
                      <img
                        onClick={() => {
                          handleCardClick(item.id);
                        }}
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
            {sale == 3 &&
              Data.slice(6, 15)
                .reverse()
                .map((item) => (
                  <div
                    key={item.id}
                    className="w-[320px] mb-[10px] h-[522px] rounded-[10px] border border-[#E5E2EE] bg-[#f5f5f6]"
                  >
                    <div className="relative w-full mt-[1px] h-[279px] flex items-center justify-center rounded-tl-[10px] rounded-tr-[10px] bg-white">
                      <div className="absolute top-[15px] left-[15px] flex items-center justify-between w-[290px]">
                        <div className=" bg-[#FFE095] flex items-center justify-center w-[55px] h-[27px] border border-[#AD7B00] rounded-[60px]">
                          <p className="text-[#855E00] text-[14px] font-semibold">
                            -30%
                          </p>
                        </div>
                        <div className="flex items-center gap-[10px]">
                          <img
                            src={line}
                            alt="rasm"
                            className="w-[24px] h-[24px] hover:cursor-pointer"
                          />
                          <div
                            className={`w-[35px] h-[35px]  hover:cursor-pointer bg-white  rounded-[4px] duration-75 flex items-center justify-center ${
                              liked.includes(item.id) ? "text-black" : ""
                            }`}
                            onClick={() => toggleLike(item.id)}
                          >
                            {liked.includes(item.id) ? (
                              <GoHeartFill className="text-[26px] h-[35px] text-red-600" />
                            ) : (
                              <GoHeart className="text-[26px]  hover:text-red-600 text-black" />
                            )}
                          </div>
                        </div>
                      </div>
                      <NavLink to="/stranitsa">
                        <img
                          onClick={() => {
                            handleCardClick(item.id);
                          }}
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
            <div className="flex justify-center mt-[40px] w-full items-center gap-[10px] cursor-pointer">
              <div className="flex items-center gap-[5px] mr-[400px]">
                <p
                  className={`w-[35px] h-[35px] bg-white flex items-center justify-center border rounded-[8px] hover:bg-[#088269] hover:text-white cursor-pointer ${
                    sale1 === 1 ? "opacity-50 bg-white cursor-not-allowed" : ""
                  }`}
                  onClick={handlePrevious}
                >
                  <IoChevronBackOutline />
                </p>

                {[1, 2, 3].map((num) => (
                  <p
                    key={num}
                    onClick={() => {
                      setSale1(num);
                      setSale(num);
                    }}
                    className={
                      sale1 === num
                        ? "w-[35px] h-[35px] flex items-center font-bold justify-center border rounded-[8px] bg-[#088269] text-white cursor-pointer"
                        : "w-[35px] h-[35px] hover:bg-slate-200 bg-white flex items-center justify-center border border-[#E5E5E5] rounded-[8px] cursor-pointer"
                    }
                  >
                    {num}
                  </p>
                ))}
                <p className="w-[35px] h-[35px] flex bg-white items-center justify-center  rounded-[8px]">
                  <BsThreeDots />
                </p>
                <p
                  className={`w-[35px] h-[35px] flex items-center bg-white justify-center border rounded-[8px] hover:bg-[#088269] hover:text-white cursor-pointer ${
                    sale1 === 3 ? "opacity-50 bg-white  cursor-not-allowed" : ""
                  }`}
                  onClick={handleNext}
                >
                  <GrFormNext />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Aksiya_hero;
