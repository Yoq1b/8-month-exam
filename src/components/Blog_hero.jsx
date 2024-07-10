import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { NavLink } from "react-router-dom";
import Data from "../db/Blog.json";
import { BsThreeDots } from "react-icons/bs";
import { GrFormNext } from "react-icons/gr";
import { IoChevronBackOutline } from "react-icons/io5";

const Blog_hero = () => {
  const [sale, setSale] = useState(1);
  const [sale1, setSale1] = useState(1);

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
  return (
    <>
      <div className="w-[1310px] m-auto">
        <h3 className="text-[#202020] font-medium mt-[85px] mb-[40px] text-[48px] leading-[52.8px]">
          Блог
        </h3>
        <div className="flex items-start justify-between">
          <div className="flex items-start justify-between">
            <div className="w-[320px] h-[595px] pl-[20px] pr-[14px] border border-[#E5E2EE]">
              <p className="text-[#202020] text-[16px] font-medium my-[15px] leading-[22.4px]">
                Направления
              </p>
              <hr className="mb-[8px]" />
              <div className="group flex items-center hover:scale-105 duration-200 my-[12px] hover:cursor-pointer justify-between">
                <p className="text-[#202020] group-hover:text-[#088269] text-[14px] font-medium leading-[19px]">
                  Реанимация
                </p>
                <IoIosArrowForward className="group-hover:text-[#088269] " />
              </div>
              <div className="group flex items-center hover:scale-105 duration-200 my-[12px] hover:cursor-pointer justify-between">
                <p className="text-[#202020] group-hover:text-[#088269] text-[14px] font-medium leading-[19px]">
                  Хирургия
                </p>
                <IoIosArrowForward className="group-hover:text-[#088269] " />
              </div>
              <div className="group flex items-center hover:scale-105 duration-200 my-[12px] hover:cursor-pointer justify-between">
                <p className="text-[#202020] group-hover:text-[#088269] text-[14px] font-medium leading-[19px]">
                  Офтальмология
                </p>
                <IoIosArrowForward className="group-hover:text-[#088269] " />
              </div>
              <div className="group flex items-center hover:scale-105 duration-200 my-[12px] hover:cursor-pointer justify-between">
                <p className="text-[#202020] group-hover:text-[#088269] text-[14px] font-medium leading-[19px]">
                  Лабораторная диагностика
                </p>
                <IoIosArrowForward className="group-hover:text-[#088269] " />
              </div>
              <div className="group flex items-center hover:scale-105 duration-200 my-[12px] hover:cursor-pointer justify-between">
                <p className="text-[#202020] group-hover:text-[#088269] text-[14px] font-medium leading-[19px]">
                  Акушерство и Гинекология
                </p>
                <IoIosArrowForward className="group-hover:text-[#088269] " />
              </div>
              <div className="group flex items-center hover:scale-105 duration-200 my-[12px] hover:cursor-pointer justify-between">
                <p className="text-[#202020] group-hover:text-[#088269] text-[14px] font-medium leading-[19px]">
                  Гистология
                </p>
                <IoIosArrowForward className="group-hover:text-[#088269] " />
              </div>
              <div className="group flex items-center hover:scale-105 duration-200 my-[12px] hover:cursor-pointer justify-between">
                <p className="text-[#202020] group-hover:text-[#088269] text-[14px] font-medium leading-[19px]">
                  Косметология
                </p>
                <IoIosArrowForward className="group-hover:text-[#088269] " />
              </div>
              <div className="group flex items-center hover:scale-105 duration-200 my-[12px] hover:cursor-pointer justify-between">
                <p className="text-[#202020] group-hover:text-[#088269] text-[14px] font-medium leading-[19px]">
                  Оториноларингология
                </p>
                <IoIosArrowForward className="group-hover:text-[#088269] " />
              </div>
              <div className="group flex items-center hover:scale-105 duration-200 my-[12px] hover:cursor-pointer justify-between">
                <p className="text-[#202020] group-hover:text-[#088269] text-[14px] font-medium leading-[19px]">
                  Рентгенология и томография
                </p>
                <IoIosArrowForward className="group-hover:text-[#088269] " />
              </div>
              <div className="group flex items-center hover:scale-105 duration-200 my-[12px] hover:cursor-pointer justify-between">
                <p className="text-[#202020] group-hover:text-[#088269] text-[14px] font-medium leading-[19px]">
                  Стерилизация
                </p>
                <IoIosArrowForward className="group-hover:text-[#088269] " />
              </div>
              <div className="group flex items-center hover:scale-105 duration-200 my-[12px] hover:cursor-pointer justify-between">
                <p className="text-[#202020] group-hover:text-[#088269] text-[14px] font-medium leading-[19px]">
                  Физиотерапия и реабилитация
                </p>
                <IoIosArrowForward className="group-hover:text-[#088269] " />
              </div>
              <div className="group flex items-center hover:scale-105 duration-200 my-[12px] hover:cursor-pointer justify-between">
                <p className="text-[#202020] group-hover:text-[#088269] text-[14px] font-medium leading-[19px]">
                  Функциональная диагностика
                </p>
                <IoIosArrowForward className="group-hover:text-[#088269] " />
              </div>
              <div className="group flex items-center hover:scale-105 duration-200 my-[12px] hover:cursor-pointer justify-between">
                <p className="text-[#202020] group-hover:text-[#088269] text-[14px] font-medium leading-[19px]">
                  Эндоскопия
                </p>
                <IoIosArrowForward className="group-hover:text-[#088269] " />
              </div>
              <div className="group flex items-center hover:scale-105 duration-200 my-[12px] hover:cursor-pointer justify-between">
                <p className="text-[#202020] group-hover:text-[#088269] text-[14px] font-medium leading-[19px]">
                  Новинки
                </p>
                <IoIosArrowForward className="group-hover:text-[#088269] " />
              </div>
              <div className="group flex items-center hover:scale-105 duration-200 my-[12px] hover:cursor-pointer justify-between">
                <p className="text-[#202020] group-hover:text-[#088269] text-[14px] font-medium leading-[19px]">
                  Распродажи
                </p>
                <IoIosArrowForward className="group-hover:text-[#088269] " />
              </div>
              <div className="group flex items-center hover:scale-105 duration-200 my-[12px] hover:cursor-pointer justify-between">
                <NavLink to="/podklyuch">
                  <p className="text-[#202020] group-hover:text-[#088269] text-[14px] font-medium leading-[19px]">
                    Кабинеты под ключ
                  </p>
                </NavLink>
                <IoIosArrowForward className="group-hover:text-[#088269] " />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center gap-[10px]">
            {sale == 1 &&
              Data.slice(0, 4).map((item) => (
                <div
                  key={item.id}
                  className="w-[980px] flex justify-between  rounded-[10px] border bg-white border-[#E5E2EE]"
                >
                  <img
                    src={item.image}
                    alt="rasm"
                    className="rounded-tl-[10px] border rounded-bl-[10px] w-[430px] h-[304px]"
                  />
                  <div className="my-[30px] mr-[46px] flex flex-col items-start justify-between">
                    <div>
                      <p className="text-[#202020] font-medium text-[18px] ">
                        {item.name}
                      </p>
                      <p className="text-[#7A7687] font-normal  mb-[25px] text-[12px] ">
                        {item.date}
                      </p>
                      <p className="text-[#7A7687] w-[474px] font-normal  mb-[25px] text-[16px] leading-[22.4px]">
                        {item.text}
                      </p>
                    </div>
                    <NavLink to="/statya">
                      <button className="w-[138px] h-[41px] border border-[#D5D1E1] duration-200 hover:scale-105 hover:bg-[#088269]  text-[#088269] rounded-[50px] hover:text-white text-[14px] font-semibold">
                        Подробнее
                      </button>
                    </NavLink>
                  </div>
                </div>
              ))}
            {sale == 2 &&
              Data.slice(4, 8)
                .reverse()
                .map((item) => (
                  <div
                    key={item.id}
                    className="w-[980px] flex justify-between  rounded-[10px] border bg-white border-[#E5E2EE]"
                  >
                    <img
                      src={item.image}
                      alt="rasm"
                      className="rounded-tl-[10px] border rounded-bl-[10px] w-[430px] h-[304px]"
                    />
                    <div className="my-[30px] mr-[46px] flex flex-col items-start justify-between">
                      <div>
                        <p className="text-[#202020] font-medium text-[18px] ">
                          {item.name}
                        </p>
                        <p className="text-[#7A7687] font-normal  mb-[25px] text-[12px] ">
                          {item.date}
                        </p>
                        <p className="text-[#7A7687] w-[474px] font-normal  mb-[25px] text-[16px] leading-[22.4px]">
                          {item.text}
                        </p>
                      </div>
                      <NavLink to="/statya">
                        <button className="w-[138px] h-[41px] border border-[#D5D1E1] duration-200 hover:scale-105 hover:bg-[#088269]  text-[#088269] rounded-[50px] hover:text-white text-[14px] font-semibold">
                          Подробнее
                        </button>
                      </NavLink>
                    </div>
                  </div>
                ))}
            {sale == 3 &&
              Data.slice(8, 12).map((item) => (
                <div
                  key={item.id}
                  className="w-[980px] flex justify-between  rounded-[10px] border bg-white border-[#E5E2EE]"
                >
                  <img
                    src={item.image}
                    alt="rasm"
                    className="rounded-tl-[10px] border rounded-bl-[10px] w-[430px] h-[304px]"
                  />
                  <div className="my-[30px] mr-[46px] flex flex-col items-start justify-between">
                    <div>
                      <p className="text-[#202020] font-medium text-[18px] ">
                        {item.name}
                      </p>
                      <p className="text-[#7A7687] font-normal  mb-[25px] text-[12px] ">
                        {item.date}
                      </p>
                      <p className="text-[#7A7687] w-[474px] font-normal  mb-[25px] text-[16px] leading-[22.4px]">
                        {item.text}
                      </p>
                    </div>
                    <NavLink to="/statya">
                      <button className="w-[138px] h-[41px] border border-[#D5D1E1] duration-200 hover:scale-105 hover:bg-[#088269]  text-[#088269] rounded-[50px] hover:text-white text-[14px] font-semibold">
                        Подробнее
                      </button>
                    </NavLink>
                  </div>
                </div>
              ))}
          </div>
        </div>
        <div className="flex justify-center mt-[40px] w-full items-center gap-[10px] cursor-pointer">
          <div className="flex items-center gap-[5px]">
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
    </>
  );
};

export default Blog_hero;
