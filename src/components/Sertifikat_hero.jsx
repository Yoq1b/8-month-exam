import React, { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { GrFormNext } from "react-icons/gr";
import { IoChevronBackOutline, IoSearchOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";

const Sertifikat_hero = () => {
  const [count, setCount] = useState(1); // Boshlang'ich holatda birinchi div ochilgan

  const toggleDiv = (index) => {
    setCount((prevCount) => (prevCount === index ? 0 : index));
  };

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
      <div className="w-[1310px] m-auto flex pt-[100px] items-start justify-between">
        <div>
          <h3 className="text-[#202020] text-[48px] mb-[25px] font-medium leading-[52.8px]">
            Сертификаты
          </h3>
        </div>
        <div className="w-[650px] ">
          <div className="w-full">
            <div>
              <hr className="bg-[#D5D1E1] border-[#D5D1E1]" />
              <div className="flex bordeer border-black justify-between items-center py-[22px] cursor-pointer">
                <h3 className="text-[#202020] text-[18px] font-semibold">
                  Медицинские инструменты
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
                    ? "block text-white   text-[14px] py-3 transition-all duration-2000 ease-in-out max-h-screen"
                    : "hidden max-h-0 overflow-hidden"
                }
              >
                <div className="mb-[20px]">
                  <p className="text-[#07745E] my-[5px] text-[12px] font-medium">
                    Инструменты медицинские хирургические РУ № РЗН 2015/3121 от
                    12 октября 2015 г.
                  </p>
                  <p className="text-[#07745E] my-[5px] text-[12px] font-medium">
                    Фильтры медицинские РУ № РЗН 2019/8405 от 5 июня 2019 г.
                  </p>
                  <p className="text-[#07745E] my-[5px] text-[12px] font-medium">
                    Воздуховоды полимерные РУ № ФСР 2011/10719 от 15 августа
                    2016 г
                  </p>
                  <p className="text-[#07745E] my-[5px] text-[12px] font-medium">
                    Набор оториноларингологический РУ № ФСЗ 2010/08840 от 23
                    ноября 2018 г.
                  </p>
                  <p className="text-[#07745E] my-[5px] text-[12px] font-medium">
                    Инструменты одноразовые РУ № ФСЗ 2009/05638 от 23 ноября
                    2018 года
                  </p>
                  <p className="text-[#07745E] my-[5px] text-[12px] font-medium">
                    Пипетка офтальмологическая РУ № ФСР 2009/04211 от 23 ноября
                    2015 г.
                  </p>
                  <p className="text-[#07745E] my-[5px] text-[12px] font-medium">
                    Термометр инфракрасный РУ № ФСЗ 2012/13255 от 22 ноября 2012
                    г.
                  </p>
                  <p className="text-[#07745E] my-[5px] text-[12px] font-medium">
                    Зажим пупочный РУ № ФСР 2011/10731 от 6 мая 2011 г.
                  </p>
                  <p className="text-[#07745E] my-[5px] text-[12px] font-medium">
                    Гигрометры ВИТ Свидетельство об утверждении
                  </p>
                  <p className="text-[#07745E]  my-[5px] text-[12px] font-medium">
                    Термометры медицинские РУ № РЗН 2015/2853 от 6 июля 2017 г.
                  </p>
                  <p className="text-[#07745E]  my-[5px] text-[12px] font-medium">
                    Станов для бритья РУ № ФСЗ 2009/04329 от 20 июля 2009 г.
                  </p>
                  <p className="text-[#07745E] my-[5px] text-[12px] font-medium">
                    Пинцеты медицинские РУ № ФСЗ 2010/06996 от 23 ноября 2018 г.
                  </p>
                  <p className="text-[#07745E] my-[5px] text-[12px] font-medium">
                    Емкость-контейнеры для сбора РУ № РЗН 2014/2254 от 18 марта
                    2020 г.
                  </p>
                  <p className="text-[#07745E] my-[5px] text-[12px] font-medium">
                    Емкости-контейнеры РУ № ФСР 2012/13095 ч.1
                  </p>
                  <p className="text-[#07745E] my-[5px] text-[12px] font-medium">
                    Электроды медицинские РУ № ФСЗ 2012/12612
                  </p>
                  <p className="text-[#07745E] my-[5px] text-[12px] font-medium">
                    Инструменты хирургические РУ № ФСЗ 2012/12251 от 30 мая 2012
                    г.
                  </p>
                  <p className="text-[#07745E] my-[5px] text-[12px] font-medium">
                    Изделие медицинское для инфуз.-трансфуз. РУ № ФСЗ 2011/11287
                    от 27 декабря 2011 г.
                  </p>
                  <p className="text-[#07745E] my-[5px] text-[12px] font-medium">
                    Термометр медицинский РУ № ФСЗ 2011/10572
                  </p>
                </div>

                <button className="flex items-center justify-center gap-[5px]"></button>
              </div>
            </div>
            <div>
              <hr className="bg-[#D5D1E1] border-[#D5D1E1]" />
              <div className="flex justify-between items-center py-[22px] cursor-pointer">
                <h3 className="text-[#202020] text-[18px] font-semibold">
                  Материалы для гинекологии и урологии
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
            </div>
            <div>
              <hr className="bg-[#D5D1E1] border-[#D5D1E1]" />
              <div className="flex justify-between items-center py-5 cursor-pointer">
                <h3 className="text-[#202020] text-[18px] font-semibold">
                  Материалы для инъекционных процедур
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
            <div>
              <hr className="bg-[#D5D1E1] border-[#D5D1E1]" />
              <div className="flex justify-between items-center py-5 cursor-pointer">
                <h3 className="text-[#202020] text-[18px] font-semibold">
                  Перевязочные материалы
                </h3>
                <button
                  className={
                    count === 4
                      ? "w-[32px] h-[32px] flex items-center justify-center border  bg-[#088269]  rounded-full rotate-45 duration-150"
                      : " border w-[32px] h-[32px] flex items-center  border-[#D5D1E1] justify-center  rounded-[50px]"
                  }
                  onClick={() => toggleDiv(4)}
                >
                  <span
                    className={
                      count === 4
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
                  count === 4
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

export default Sertifikat_hero;
