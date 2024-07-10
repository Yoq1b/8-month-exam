import React, { useState } from "react";
import { MdArrowOutward } from "react-icons/md";
import { NavLink } from "react-router-dom";

const Dokument = () => {
  const [count, setCount] = useState(3); // Boshlang'ich holatda birinchi div ochilgan

  const toggleDiv = (index) => {
    setCount((prevCount) => (prevCount === index ? 0 : index));
  };
  return (
    <>
      <div className="w-[1440px] h-[534px] m-auto bg-[#E5E4ED] pb-[120px] mb-[150px]">
        <div className="w-[1310px] m-auto flex pt-[100px] items-start justify-between">
          <div>
            <h3 className="text-[#202020] text-[30px] mb-[25px] font-medium leading-[36px]">
              Документы, необходимые
              <br /> для получения груза
            </h3>
            <p className="text-[#202020] text-[16px]  font-medium leading-[22.4px]">
              По копиям доверенностей и доверенностям с незаполненными
              <br />
              обязательными реквизитами отгрузка не производится
            </p>
          </div>
          <div className="w-[650px] ">
            <div className="w-full">
              <hr className="bg-[#D5D1E1] border-[#D5D1E1]" />
              <div className="flex bordeer border-black justify-between items-center py-[22px] cursor-pointer">
                <h3 className="text-[#202020] text-[18px] font-semibold">
                  Юридические лица
                </h3>
                <button
                  className={
                    count === 1
                      ? "w-[32px] h-[32px] flex items-center justify-center border  bg-[#088269]  rounded-full rotate-45 duration-150"
                      : " border w-[32px] h-[32px] flex items-center  border-[#D5D1E1] justify-center  rounded-[50px]"
                  }
                  onClick={() => toggleDiv(1)}
                >
                  <span
                    className={
                      count === 1
                        ? "bg-transparent font-light text-[30px] text-white  mb-[6px]"
                        : "text-black bg-transparent font-light text-[30px] mb-[6px]"
                    }
                  >
                    +
                  </span>
                </button>
              </div>
              <div
                className={
                  count === 1
                    ? "block text-white  opacity-75 text-[14px] py-3 transition-all duration-2000 ease-in-out max-h-screen"
                    : "hidden max-h-0 overflow-hidden"
                }
              >
                <p className="text-[#202020] opacity-80">
                  Но синтетическое тестирование, в своём классическом
                  представлении, допускает внедрение поэтапного и
                  последовательного развития общества. В рамках спецификации
                  современных стандартов, сторонники тоталитаризма в науке будут
                  функционально разнесены.
                </p>
                <NavLink to="/okompanii">
                  <button className="group flex mt-[40px] hover:cursor-pointer items-center  gap-[8px]">
                    <p className="text-[#202020] opacity-80 group-hover:text-gray-900 leading-[19px] text-[14px]  font-semibold">
                      Подробнее
                    </p>
                    <MdArrowOutward className="text-[#202020] opacity-80 group-hover:text-gray-900 text-[18px]" />
                  </button>
                </NavLink>
                <button className="flex items-center justify-center gap-[5px]"></button>
              </div>
              <hr className="bg-[#D5D1E1] border-[#D5D1E1]" />
              <div className="flex justify-between items-center py-[22px] cursor-pointer">
                <h3 className="text-[#202020] text-[18px] font-semibold">
                  Индивидуальные предприниматели
                </h3>
                <button
                  className={
                    count === 2
                      ? "w-[32px] h-[32px] flex items-center justify-center border  bg-[#088269]  rounded-full rotate-45 duration-150"
                      : " border w-[32px] h-[32px] flex items-center  border-[#D5D1E1] justify-center  rounded-[50px]"
                  }
                  onClick={() => toggleDiv(2)}
                >
                  <span
                    className={
                      count === 2
                        ? "bg-transparent font-light text-[30px] text-white  mb-[6px]"
                        : "text-black bg-transparent font-light text-[30px] mb-[6px]"
                    }
                  >
                    +
                  </span>
                </button>
              </div>
              <div
                className={
                  count === 2
                    ? "block text-white opacity-75 text-[14px] py-3 transition-all duration-2000 ease-in-out max-h-screen"
                    : "hidden max-h-0 overflow-hidden"
                }
              >
                <p className="text-[#202020] opacity-80">
                  Но синтетическое тестирование, в своём классическом
                  представлении, допускает внедрение поэтапного и
                  последовательного развития общества. В рамках спецификации
                  современных стандартов, сторонники тоталитаризма в науке будут
                  функционально разнесены.
                </p>
              </div>
              <hr className="bg-[#D5D1E1] border-[#D5D1E1]" />
              <div className="flex justify-between items-center py-2 cursor-pointer">
                <h3 className="text-[#202020] text-[18px] font-semibold">
                  Физические лица
                </h3>
                <button
                  className={
                    count === 3
                      ? "w-[32px] h-[32px] flex items-center justify-center border  bg-[#088269]  rounded-full rotate-45 duration-150"
                      : " border w-[32px] h-[32px] flex items-center  border-[#D5D1E1] justify-center  rounded-[50px]"
                  }
                  onClick={() => toggleDiv(3)}
                >
                  <span
                    className={
                      count === 3
                        ? "bg-transparent font-light text-[30px] text-white  mb-[6px]"
                        : "text-black bg-transparent font-light text-[30px] mb-[6px]"
                    }
                  >
                    +
                  </span>
                </button>
              </div>
              <div
                className={
                  count === 3
                    ? "block text-white opacity-75 text-[14px] py-3 transition-all duration-2000 ease-in-out max-h-screen"
                    : "hidden max-h-0 overflow-hidden"
                }
              >
                <p className="text-[#202020] opacity-80">
                  Но синтетическое тестирование, в своём классическом
                  представлении, допускает внедрение поэтапного и
                  последовательного развития общества. В рамках спецификации
                  современных стандартов, сторонники тоталитаризма в науке будут
                  функционально разнесены.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dokument;
