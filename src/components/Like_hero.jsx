import React, { useState, useContext, useEffect } from "react";
import { ProductContext } from "../App";
import { Data } from "../db/data";
import line from "/assets/line.svg";
import { GoHeart, GoHeartFill } from "react-icons/go";
import { NavLink } from "react-router-dom";
import { SvarnitContext, LikeContext } from "../App";
import Empty_like_component from "./Empty_like_component";
import { IoIosArrowDown, IoMdMenu } from "react-icons/io";
import { MdMenu, MdOutlineWindow } from "react-icons/md";

const Like_hero = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const { product, setProduct } = useContext(ProductContext);
  const { likedd, setLikedd } = useContext(LikeContext);
  const { svar, setSvar } = useContext(SvarnitContext);
  const [counts, setCounts] = useState({});
  const [liked, setLiked] = useState([]);

  const increment = (itemId) => {
    setCounts((prevCounts) => ({
      ...prevCounts,
      [itemId]: (prevCounts[itemId] || 1) + 1,
    }));
  };

  const decrement = (itemId) => {
    setCounts((prevCounts) => ({
      ...prevCounts,
      [itemId]: prevCounts[itemId] > 1 ? prevCounts[itemId] - 1 : 1,
    }));
  };

  const toggleLike = (itemId) => {
    setLiked((prevLiked) =>
      prevLiked.includes(itemId)
        ? prevLiked.filter((id) => id !== itemId)
        : [...prevLiked, itemId]
    );
    setLikedd((prevProduct) => prevProduct.filter((id) => id !== itemId));
    setCounts((prevCounts) => {
      const newCounts = { ...prevCounts };
      delete newCounts[itemId];
      return newCounts;
    });
  };

  const toggleSvarnit = (itemId) => {
    setSvar((prevSvar) =>
      prevSvar.includes(itemId)
        ? prevSvar.filter((id) => id !== itemId)
        : [...prevSvar, itemId]
    );
  };

  const handleProductClick = (item) => {
    if (!product.includes(item.id)) {
      setProduct([...product, item.id]);
    } else {
      // setProduct(product.filter((id) => id !== item.id));
    }
  };

  return (
    <>
      <div className="w-[1440px] m-auto  ">
        <div className="w-[1310px] m-auto  mt-[85px] flex items-start justify-between">
          <h3 className="text-[#202020] mb-[40px]  text-[48px] font-medium">
            Избранное
          </h3>
          {likedd.length === 0 && <Empty_like_component />}
        </div>
        {likedd.length > 0 && (
          <div className="w-[1310px] m-auto  flex items-start justify-between">
            <div className="w-[1310px] m-auto flex items-start justify-between">
              <div className="w-[320px]">
                <p className="text-[#202020]   text-[16px] font-medium">
                  Все товары ({likedd.length})
                </p>
                <p className="text-[#202020] opacity-50 mt-[10px] text-[16px] font-medium">
                  Маммографы
                </p>
                <p className="text-[#202020] opacity-50 mt-[10px] text-[16px] font-medium">
                  Флюорографы
                </p>
              </div>
              <div>
                <div className="w-[980px] h-[42px] px-[20px] rounded-[5px] border border-[#E5E2EE] mb-[10px] flex items-center justify-between">
                  <div className="flex items-center gap-[10px]">
                    <p className="text-[#202020] text-[14px] font-normal">
                      По популярности
                    </p>
                    <IoIosArrowDown />
                  </div>
                  <div className="flex items-center gap-[10px]">
                    <IoMdMenu className="text-[#7A7687] text-[22px]" />
                    <MdOutlineWindow className="text-[#088269] text-[20px]" />
                  </div>
                </div>
                <div className="w-[980px]  min-h-[500px] gap-[10px] grid grid-cols-3">
                  {Data.map((item) => {
                    return likedd.map((element) => {
                      if (element === item.id) {
                        return (
                          <div
                            key={item.id}
                            className="w-[320px] mb-[10px] h-[522px] rounded-[10px] border border-[#E5E2EE] bg-[#f5f5f6]"
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
                                    className={`w-[35px] h-[35px]  hover:cursor-pointer bg-white  rounded-[4px] duration-75 flex items-center justify-center ${
                                      liked.includes(item.id)
                                        ? "text-black"
                                        : ""
                                    }`}
                                    onClick={() => toggleLike(item.id)}
                                  >
                                    {liked.includes(item.id) ? (
                                      <GoHeart className="text-[26px]  hover:text-[#088269] text-black" />
                                    ) : (
                                      <GoHeartFill className="text-[26px] h-[35px] text-[#088269]" />
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
                        );
                      }
                      return null;
                    });
                  })}
                </div>
                <div className="flex items-end justify-end  mt-[23px] mb-[150px]">
                  <NavLink to="/katalog">
                    <button className="w-[126px] h-[41px] rounded-[50px] bg-[#088269] text-[#F8F7F3] border border-[#D5D1E1] hover:border-[#088269] text-[16px] font-semibold hover:scale-105 duration-200 hover:text-[#f8f7f3] hover:bg-[#088269]">
                      В каталог
                    </button>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Like_hero;
