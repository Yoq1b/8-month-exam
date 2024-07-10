import React, { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { GrFormNext } from "react-icons/gr";
import { IoChevronBackOutline, IoSearchOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";

const Vakansiya = () => {
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
            Вакансии
          </h3>
          <p className="text-[#202020] font-medium text-[16px] leading-[22.4px]">
            В «Глобал Медикал Трейд» всегда есть место как для новичков,
            <br />
            так и для состоявшихся экспертов. Тем, кто только начинает строить
            <br />
            карьеру, мы предлагаем возможность получить ценные знания,
            <br />
            а опытным специалистам — расширить компетенции.
          </p>
        </div>
        <div className="w-[650px] ">
          <div className="w-full">
            <h3 className="text-[#202020] text-[30px] mb-[25px] font-medium leading-[52.8px]">
              Актуальные вакансии
            </h3>
            <div>
              <hr className="bg-[#D5D1E1] border-[#D5D1E1]" />
              <div className="flex bordeer border-black justify-between items-center py-[22px] cursor-pointer">
                <h3 className="text-[#202020] text-[18px] font-semibold">
                  Менеджер по продажам
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
                  <p className="text-[#7A7687] text-[16px] font-medium">
                    Обязанности:
                  </p>
                  <div className="flex items-center gap-[5px]">
                    <div className="w-[5px] h-[5px] rounded-[50%] bg-[#202020]"></div>
                    <p className="text-[#202020] text-[16px] font-medium">
                      Работа с входящими/исходящими звонками
                    </p>
                  </div>
                  <div className="flex items-center gap-[5px]">
                    <div className="w-[5px] h-[5px] rounded-[50%] bg-[#202020]"></div>
                    <p className="text-[#202020] text-[16px] font-medium">
                      Работа с договорами составление/заключение
                    </p>
                  </div>
                  <div className="flex items-center gap-[5px]">
                    <div className="w-[5px] h-[5px] rounded-[50%] bg-[#202020]"></div>
                    <p className="text-[#202020] text-[16px] font-medium">
                      Ведение деловой переписки (эл. почта, переписка в
                      мессенджерах)
                    </p>
                  </div>
                  <div className="flex items-center gap-[5px]">
                    <div className="w-[5px] h-[5px] rounded-[50%] bg-[#202020]"></div>
                    <p className="text-[#202020] text-[16px] font-medium">
                      Выполнение плановых показателей
                    </p>
                  </div>
                </div>
                <div className="mb-[20px]">
                  <p className="text-[#7A7687] text-[16px] font-medium">
                    Требования:
                  </p>
                  <div className="flex items-center gap-[5px]">
                    <div className="w-[5px] h-[5px] rounded-[50%] bg-[#202020]"></div>
                    <p className="text-[#202020] text-[16px] font-medium">
                      Опыт работы телефонных продаж
                    </p>
                  </div>
                  <div className="flex items-center gap-[5px]">
                    <div className="w-[5px] h-[5px] rounded-[50%] bg-[#202020]"></div>
                    <p className="text-[#202020] text-[16px] font-medium">
                      Опыт работы в CRM
                    </p>
                  </div>
                  <div className="flex items-center gap-[5px]">
                    <div className="w-[5px] h-[5px] rounded-[50%] bg-[#202020]"></div>
                    <p className="text-[#202020] text-[16px] font-medium">
                      Ведение деловой переписки (эл. почта, переписка в
                      мессенджерах)
                    </p>
                  </div>
                  <div className="flex items-center gap-[5px]">
                    <div className="w-[5px] h-[5px] rounded-[50%] bg-[#202020]"></div>
                    <p className="text-[#202020] text-[16px] font-medium">
                      Способность восприятия большого объема информации
                    </p>
                  </div>
                </div>
                <div className="mb-[20px]">
                  <p className="text-[#7A7687] text-[16px] font-medium">
                    График работы:
                  </p>
                  <div className="flex items-center gap-[5px]">
                    <div className="w-[5px] h-[5px] rounded-[50%] bg-[#202020]"></div>
                    <p className="text-[#202020] text-[16px] font-medium">
                      Оформление с первого рабочего дня
                    </p>
                  </div>
                  <div className="flex items-center gap-[5px]">
                    <div className="w-[5px] h-[5px] rounded-[50%] bg-[#202020]"></div>
                    <p className="text-[#202020] text-[16px] font-medium">
                      00:00 - 23:59
                    </p>
                  </div>
                </div>
                <NavLink to="/okompanii">
                  <button className="w-[191px] h-[41px] rounded-[50px] bg-[#088269] text-[#F8F7F3] border border-[#D5D1E1] hover:border-[#088269] text-[16px] font-semibold hover:scale-105 duration-200 hover:text-[#f8f7f3] hover:bg-[#088269]">
                    Отправить резюме
                  </button>
                </NavLink>
                <button className="flex items-center justify-center gap-[5px]"></button>
              </div>
            </div>
            <div>
              <hr className="bg-[#D5D1E1] border-[#D5D1E1]" />
              <div className="flex justify-between items-center py-[22px] cursor-pointer">
                <h3 className="text-[#202020] text-[18px] font-semibold">
                  Специалист по медицинскому оборудованию
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
                  Офис менеджер
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
                  HR–менеджер
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
            <h3 className="text-[#202020] text-[30px] mb-[25px] font-medium leading-[52.8px]">
              Архив вакансий
            </h3>
            <div>
              <hr className="bg-[#D5D1E1] border-[#D5D1E1]" />
              <div className="flex justify-between items-center py-5 cursor-pointer">
                <h3 className="text-[#202020] text-[18px] font-semibold">
                  Специалист по медицинскому оборудованию
                </h3>
                <button
                  className={
                    count === 5
                      ? "w-[32px] h-[32px] flex items-center justify-center border  bg-[#088269]  rounded-full rotate-45 duration-150"
                      : " border w-[32px] h-[32px] flex items-center  border-[#D5D1E1] justify-center  rounded-[50px]"
                  }
                  onClick={() => toggleDiv(5)}
                >
                  <span
                    className={
                      count === 5
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
                  count === 5
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
                  Офис менеджер
                </h3>
                <button
                  className={
                    count === 6
                      ? "w-[32px] h-[32px] flex items-center justify-center border  bg-[#088269]  rounded-full rotate-45 duration-150"
                      : " border w-[32px] h-[32px] flex items-center  border-[#D5D1E1] justify-center  rounded-[50px]"
                  }
                  onClick={() => toggleDiv(6)}
                >
                  <span
                    className={
                      count === 6
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
                  count === 6
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
                  HR–менеджер
                </h3>
                <button
                  className={
                    count === 7
                      ? "w-[32px] h-[32px] flex items-center justify-center border  bg-[#088269]  rounded-full rotate-45 duration-150"
                      : " border w-[32px] h-[32px] flex items-center  border-[#D5D1E1] justify-center  rounded-[50px]"
                  }
                  onClick={() => toggleDiv(7)}
                >
                  <span
                    className={
                      count === 7
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
                  count === 7
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

export default Vakansiya;
