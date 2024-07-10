import React, { useState, useEffect, useContext } from "react";
import { GoHeart, GoHeartFill } from "react-icons/go";
import line from "/assets/line.svg";
import { Data } from "../db/data";
import { HiMinusSm, HiPlusSm } from "react-icons/hi";
import { ShopContext } from "../../src/App";
import Productselect from "../components/Productselect";
import { ProductContext, LikeContext, SvarnitContext } from "../App";
import { NavLink } from "react-router-dom";
import Products from "../components/Products";
import Kabinet from "../components/Kabinet";
import { IoIosArrowForward } from "react-icons/io";
import Brend from "../components/Brend";
import Mail from "../components/Mail";
import Miniline from "../components/Miniline";
import Populyarnie from "../components/Populyarnie";

const Stranitsa = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  const [liked, setLiked] = useState([]);
  const [counts, setCounts] = useState({});
  const [selectedDiv, setSelectedDiv] = useState(1); // Boshlang'ich holatda birinchi div tanlangan
  const { likedd, setLikedd } = useContext(LikeContext);
  const { svar, setSvar } = useContext(SvarnitContext);

  useEffect(() => {
    // Boshlang'ich holatda birinchi div tanlangan
    setSelectedDiv(1);
  }, []);

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

  const toggleSvarnit = (itemId) => {
    setSvar((prevSvar) =>
      prevSvar.includes(itemId)
        ? prevSvar.filter((id) => id !== itemId)
        : [...prevSvar, itemId]
    );
  };

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

  const { shop, setShop } = useContext(ShopContext);
  const { product, setProduct } = useContext(ProductContext);

  const handleProductClick = (item) => {
    if (!product.includes(item.id)) {
      setProduct([...product, item.id]);
    } else {
      // setProduct(product.filter((id) => id !== item.id));
    }
  };

  return (
    <>
      <div className="w-[1440px] m-auto mt-[230px] mb-[60px]">
        <div className="w-[1310px] m-auto">
          <div className="flex my-[20px] items-center gap-[8px]">
            <NavLink to="/">
              <p className="text-[#7A7687] text-[14px] font-normal hover:text-[#202020]">
                Главная
              </p>
            </NavLink>
            <IoIosArrowForward className="text-[#7A7687] text-[14px]" />
            <NavLink to="/katalog">
              <p className="text-[#7A7687] text-[14px] font-normal hover:text-[#202020]">
                Каталог
              </p>
            </NavLink>
            <IoIosArrowForward className="text-[#7A7687] text-[14px]" />
            <p className="text-[#7A7687] text-[14px] font-normal hover:text-[#202020]">
              Лабораторное оборудование
            </p>
            <IoIosArrowForward className="text-[#7A7687] text-[14px]" />
            <p className="text-[14px] font-normal text-[#202020]">
              Анализатор мочи MINDRAY UA-66
            </p>
          </div>
        </div>
        <div className="w-[1310px] m-auto flex items-center justify-between">
          {Data.map(
            (item) =>
              item.id === shop[0] && (
                <div
                  key={item.id}
                  className="w-[1310px] flex items-center justify-between h-[522px]"
                >
                  <div className="w-[760px] relative mt-[1px] h-[509px] flex items-center justify-center rounded-[10px] border bg-white">
                    <div className="absolute top-[15px] left-[15px] flex items-center justify-between w-[710px]">
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

                    <img
                      src={item.image}
                      alt="rasm"
                      className="w-[413px] h-[413px]"
                    />
                    <div className="absolute bottom-[25px] left-[25px] flex items-center gap-[5px]">
                      <div
                        className={`w-[50px] h-[50px] border hover:cursor-pointer border-[#D5D1E1] rounded-[10px] flex items-center justify-center ${
                          selectedDiv === 1 ? "border-[#088269]" : ""
                        }`}
                        onClick={() => setSelectedDiv(1)}
                      >
                        <img
                          src={item.image}
                          alt="rasm"
                          className="w-[40px] h-[34px]"
                        />
                      </div>
                      <div
                        className={`w-[50px] h-[50px] border hover:cursor-pointer border-[#D5D1E1] rounded-[10px] flex items-center justify-center ${
                          selectedDiv === 2 ? "border-[#088269]" : ""
                        }`}
                        onClick={() => setSelectedDiv(2)}
                      >
                        <img
                          src={item.image}
                          alt="rasm"
                          className="w-[40px] h-[34px]"
                        />
                      </div>
                      <div
                        className={`w-[50px] h-[50px] border hover:cursor-pointer border-[#D5D1E1] rounded-[10px] flex items-center justify-center ${
                          selectedDiv === 3 ? "border-[#088269]" : ""
                        }`}
                        onClick={() => setSelectedDiv(3)}
                      >
                        <img
                          src={item.image}
                          alt="rasm"
                          className="w-[40px] h-[34px]"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mb-[30px]">
                    <p className="text-[#202020] w-[470px] mb-[10px] font-medium text-[30px] leading-[36px]">
                      {item.surname}
                    </p>
                    <p className="text-[#7A7687] mb-[5px] text-[12px] font-normal leading-[16.40px]">
                      Категория: Лабораторное оборудование
                    </p>
                    <p className="text-[#7A7687] mb-[5px] text-[12px] font-normal leading-[16.40px]">
                      Производитель: Lorem
                    </p>
                    <p className="text-[#7A7687] mb-[5px] text-[12px] font-normal leading-[16.40px]">
                      Артикул: 213134
                    </p>
                    <p className="text-[#7A7687] mb-[15px] text-[12px] font-normal leading-[16.40px]">
                      В наличии
                    </p>
                    <p className="text-[#202020] mb-[15px] text-[18px] leading-[24.60px] font-semibold">
                      {item.price} руб.
                    </p>
                    <div className="flex items-center gap-[10px]">
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
                      <button className="w-[162px] h-[41px] rounded-[50px] border border-[#D5D1E1] text-[14px] font-semibold text-[#088269] hover:bg-[#088269] hover:text-[#f5f5f6] duration-200">
                        Задать вопрос
                      </button>
                      <button
                        onClick={() => handleProductClick(item)}
                        className="w-[214px] h-[41px] rounded-[50px] border border-[#D5D1E1] text-[14px] font-semibold text-white bg-[#088269] hover:text-[#f5f5f6] duration-200"
                      >
                        Добавить в корзину
                      </button>
                    </div>
                    <hr className="mt-[25px] mb-[13px] bg-[#E5E2EE] border" />
                    <p className="text-[#202020] text-[16px] font-medium mb-[15px]">
                      О товаре
                    </p>
                    <p className="w-[441px] text-[#202020] opacity-80 leading-[16.40px] font-medium text-[12px]">
                      Но синтетическое тестирование, в своём классическом
                      представлении,
                      <br /> допускает внедрение поэтапного и последовательного
                      развития <br /> общества. В рамках спецификации
                      современных стандартов, сторонники <br /> тоталитаризма в
                      науке будут функционально разнесены.
                    </p>
                  </div>
                </div>
              )
          )}
        </div>
        <div className="w-[1310px] m-auto ">
          <Productselect />
          <Miniline />
        </div>
        <Products />
        <Kabinet />
        <Populyarnie />
        <Brend />
        <Mail />
      </div>
    </>
  );
};

export default Stranitsa;
