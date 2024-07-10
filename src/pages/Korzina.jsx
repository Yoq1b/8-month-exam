import React, { useState, useContext, useEffect } from "react";
import { HiMinusSm, HiPlusSm } from "react-icons/hi";
import { ProductContext, LikeContext } from "../App";
import { Data } from "../db/data";
import line from "/assets/line.svg";
import { GoHeart, GoHeartFill } from "react-icons/go";
import { IoCloseOutline } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import { NavLink } from "react-router-dom";

const Korzina = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const { product, setProduct } = useContext(ProductContext);
  const [counts, setCounts] = useState({});
  const [liked, setLiked] = useState([]);
  const { likedd, setLikedd } = useContext(LikeContext);

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

    if (!likedd.includes(itemId)) {
      setLikedd([...likedd, itemId]); // likedd o'zgaruvchisini setLikedd orqali yangilash
    } else {
      setLikedd(likedd.filter((id) => id !== itemId));
    }
  };

  const deleteItem = (itemId) => {
    setProduct((prevProduct) => prevProduct.filter((id) => id !== itemId));
    setCounts((prevCounts) => {
      const newCounts = { ...prevCounts };
      delete newCounts[itemId];
      return newCounts;
    });
  };

  const getTotalPrice = () => {
    let totalPrice = 0;
    Data.forEach((item) => {
      if (product.includes(item.id)) {
        const quantity = counts[item.id] || 1;
        totalPrice += item.price * quantity;
      }
    });
    return totalPrice.toFixed(2);
  };

  return (
    <>
      <div className="w-[1440px] m-auto  border">
        <div className="w-[1310px] m-auto flex items-center justify-between">
          <div className="flex my-[20px] items-center gap-[8px]">
            <NavLink to="/">
              <p className="text-[#7A7687] text-[14px] font-normal hover:text-[#202020]">
                Главная
              </p>
            </NavLink>
            <IoIosArrowForward className="text-[#7A7687] text-[14px]" />
            <p className="text-[14px] font-normal text-[#202020]">
              Корзина ({product.length})
            </p>
          </div>
        </div>

        <div className="w-[1310px] m-auto flex items-start justify-between">
          <div className="w-[980px] min-h-[500px] flex flex-col">
            {Data.map((item) => {
              return product.map((element) => {
                if (element === item.id) {
                  return (
                    <div
                      key={item.id}
                      className="w-[980px] border-[2px]  rounded-[10px] border-[#E5E2EE] mb-[10px] flex items-start h-[237px]"
                    >
                      <div className="relative w-[320px] h-[233px]  rounded-tl-[10px] rounded-bl-[10px] mr-[25px] border-r-[2px] flex items-center justify-center bg-white">
                        <div className="absolute left-[15px] top-[15px] bg-[#E1EFE6] flex items-center justify-center w-[79px] h-[27px] border border-[#088269] rounded-[60px]">
                          <p className="text-[#088269] text-[14px] font-semibold">
                            Новинка
                          </p>
                        </div>
                        <img
                          src={item.image}
                          alt="rasm"
                          className="w-[160px] h-[160px]"
                        />
                      </div>
                      <div className="flex items-start  mt-[20px] justify-between">
                        <div className="flex flex-col">
                          <p className="text-[#202020] text-[18px] mb-[10px] w-[160px] font-semibold">
                            {item.surname}
                          </p>
                          <p className="text-[#7A7687] mb-[5px] text-[12px] font-normal leading-[16.40px]">
                            Артикул: 213134
                          </p>
                          <p className="text-[#7A7687] mb-[15px] text-[12px] font-normal leading-[16.40px]">
                            В наличии
                          </p>
                        </div>
                        <div className="flex items-start ml-[100px] gap-[100px]">
                          <div className="flex flex-col items-center  gap-[28px]">
                            <p className="text-[#202020] mb-[15px] text-[18px] leading-[24.60px] font-semibold">
                              {item.price} руб.
                            </p>
                            <div className="w-[96px] h-[41px] border border-[#D5D1E1] rounded-[50px] flex items-center justify-center">
                              <button
                                onClick={() => decrement(item.id)}
                                className="increment"
                              >
                                <HiMinusSm className="text-[#088269]" />
                              </button>
                              <p className="font-semibold ml-[10px] mr-[10px] text-center leading-[19px] text-[#088269] text-[20px] w-[20px]">
                                {counts[item.id] || 1}
                              </p>
                              <button
                                onClick={() => increment(item.id)}
                                className="increment"
                              >
                                <HiPlusSm className="text-[#088269]" />
                              </button>
                            </div>
                          </div>
                          <div className="flex items-center justify-center gap-[10px]  ">
                            <img
                              src={line}
                              alt="rasm"
                              className="w-[24px] h-[24px] hover:cursor-pointer"
                            />
                            <div
                              className={`w-[35px] h-[35px] hover:cursor-pointer rounded-[4px] duration-75 flex items-center justify-center ${
                                liked.includes(item.id) ? "text-black" : ""
                              }`}
                              onClick={() => toggleLike(item.id)}
                            >
                              {liked.includes(item.id) ? (
                                <GoHeartFill className="text-[26px] h-[35px] text-[#088269]" />
                              ) : (
                                <GoHeart className="text-[26px] hover:text-[#088269] text-black" />
                              )}
                            </div>
                            <IoCloseOutline
                              onClick={() => deleteItem(item.id)}
                              className="hover:text-red-600  hover:rotate-90 text-[33px]  hover:cursor-pointer duration-300 "
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                }
                return null;
              });
            })}
          </div>
          <div className="w-[320px] h-[237px] rounded-[10px] border px-[20px] border-[#E5E2EE]">
            <div className="flex items-center mt-[15px] justify-between">
              <p className="text-[#202020] text-[14px] font-semibold">Итого</p>
              <p className="text-[#202020] text-[14px] font-semibold">
                {getTotalPrice()} руб.
              </p>
            </div>
            <hr className="border my-[15px]" />
            <div className="flex items-center mb-[8px] justify-between">
              <p className="text-[#202020] text-[12px] font-semibold">
                Товары ({product.length} шт)
              </p>
              <p className="text-[#202020] text-[12px] font-semibold">
                {getTotalPrice()} руб.
              </p>
            </div>
            <div className="flex items-center mb-[20px] justify-between">
              <p className="text-[#202020] text-[12px] font-semibold">Скидка</p>
              <p className="text-[#202020] text-[12px] font-semibold">0 руб.</p>
            </div>
            <button className="w-full h-[41px] rounded-[50px] bg-[#088269] hover:scale-105 duration-200 text-[#F8F7F3] text-[14px] font-semibold">
              Оформить заказ
            </button>
            <button className="w-full h-[41px] mt-[10px] rounded-[50px] border hover:scale-105 duration-200 border-[#D5D1E1] text-[#202020] text-[14px] font-semibold">
              Задать вопрос
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Korzina;
