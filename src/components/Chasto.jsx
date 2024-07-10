import React, { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { GrFormNext } from "react-icons/gr";
import { IoChevronBackOutline, IoSearchOutline } from "react-icons/io5";
import { MdArrowOutward } from "react-icons/md";
import { NavLink } from "react-router-dom";

const Chasto = () => {
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
      <div className="w-[1440px]  m-auto  mb-[50px]">
        <div className="w-[1310px] m-auto flex pt-[100px] items-start justify-between">
          <div>
            <h3 className="text-[#202020] text-[48px] mb-[25px] font-medium leading-[52.8px]">
              Часто задаваемые <br /> вопросы
            </h3>
            <div className="w-[540px] flex items-center h-[39px] bg-[linear-gradient(to_right,_#F8F7F3_50%,_#D5D1E1_50%)] border border-[#D5D1E1] rounded-[50px]">
              <input
                type="text"
                placeholder="Поиск"
                className="h-full outline-none text-[#7A7687] w-[490px] rounded-[50px] pl-[15px] bg-[#F8F7F3]"
              />
              <button className="group w-[43px] h-full flex items-center justify-center bg-[#D5D1E1]  rounded-tr-[50px] rounded-br-[50px]">
                <IoSearchOutline className="text-[#7A7687] text-[22px] group-hover:scale-110  hover:rotate-90 duration-300" />
              </button>
            </div>
          </div>
          <div className="w-[650px] ">
            <div className="w-full">
              <div>
                <hr className="bg-[#D5D1E1] border-[#D5D1E1]" />
                <div className="flex bordeer border-black justify-between items-center py-[22px] cursor-pointer">
                  <h3 className="text-[#202020] text-[18px] font-semibold">
                    О компании
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
                  <p className="text-[#202020] font-medium">
                    Но синтетическое тестирование, в своём классическом
                    представлении, допускает внедрение поэтапного и
                    последовательного развития общества. В рамках спецификации
                    современных стандартов, сторонники тоталитаризма в науке
                    будут функционально разнесены.
                  </p>
                  <NavLink to="/okompanii">
                    <button className="group flex mt-[40px] hover:cursor-pointer items-center  gap-[8px]">
                      <p className="text-[#202020] group-hover:text-gray-900 leading-[19px] text-[14px]  font-semibold">
                        Подробнее
                      </p>
                      <MdArrowOutward className="text-[#202020] opacity-80 group-hover:text-gray-900 text-[18px]" />
                    </button>
                  </NavLink>
                  <button className="flex items-center justify-center gap-[5px]"></button>
                </div>
              </div>
              <div>
                <hr className="bg-[#D5D1E1] border-[#D5D1E1]" />
                <div className="flex justify-between items-center py-[22px] cursor-pointer">
                  <h3 className="text-[#202020] text-[18px] font-semibold">
                    Преимущества сотрудников
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
                    современных стандартов, сторонники тоталитаризма в науке
                    будут функционально разнесены.
                  </p>
                </div>
              </div>
              <div>
                <hr className="bg-[#D5D1E1] border-[#D5D1E1]" />
                <div className="flex justify-between items-center py-5 cursor-pointer">
                  <h3 className="text-[#202020] text-[18px] font-semibold">
                    Достижения компании
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
                    современных стандартов, сторонники тоталитаризма в науке
                    будут функционально разнесены.
                  </p>
                </div>
              </div>
              <div>
                <hr className="bg-[#D5D1E1] border-[#D5D1E1]" />
                <div className="flex justify-between items-center py-5 cursor-pointer">
                  <h3 className="text-[#202020] text-[18px] font-semibold">
                    Возврат товара или заказа
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
                    современных стандартов, сторонники тоталитаризма в науке
                    будут функционально разнесены.
                  </p>
                </div>
              </div>
              <div>
                <hr className="bg-[#D5D1E1] border-[#D5D1E1]" />
                <div className="flex justify-between items-center py-5 cursor-pointer">
                  <h3 className="text-[#202020] text-[18px] font-semibold">
                    Стоимость доставки
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
                    современных стандартов, сторонники тоталитаризма в науке
                    будут функционально разнесены.
                  </p>
                </div>
              </div>
              <div>
                <hr className="bg-[#D5D1E1] border-[#D5D1E1]" />
                <div className="flex justify-between items-center py-5 cursor-pointer">
                  <h3 className="text-[#202020] text-[18px] font-semibold">
                    Стать поставщиком
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
                    современных стандартов, сторонники тоталитаризма в науке
                    будут функционально разнесены.
                  </p>
                </div>
              </div>
              <div>
                <hr className="bg-[#D5D1E1] border-[#D5D1E1]" />
                <div className="flex justify-between items-center py-5 cursor-pointer">
                  <h3 className="text-[#202020] text-[18px] font-semibold">
                    Возможен ли возврат денежных средств?
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
                    современных стандартов, сторонники тоталитаризма в науке
                    будут функционально разнесены.
                  </p>
                </div>
              </div>
              <div>
                <hr className="bg-[#D5D1E1] border-[#D5D1E1]" />
                <div className="flex justify-between items-center py-5 cursor-pointer">
                  <h3 className="text-[#202020] text-[18px] font-semibold">
                    Правила расторжения договора?
                  </h3>
                  <button
                    className={
                      count === 8
                        ? "w-[32px] h-[32px] flex items-center justify-center border  bg-[#088269]  rounded-full rotate-45 duration-150"
                        : " border w-[32px] h-[32px] flex items-center  border-[#D5D1E1] justify-center  rounded-[50px]"
                    }
                    onClick={() => toggleDiv(8)}
                  >
                    <span
                      className={
                        count === 8
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
                    count === 8
                      ? "block text-white opacity-75 text-[14px] py-3 transition-all duration-2000 ease-in-out max-h-screen"
                      : "hidden max-h-0 overflow-hidden"
                  }
                >
                  <p className="text-[#202020] opacity-80">
                    Но синтетическое тестирование, в своём классическом
                    представлении, допускает внедрение поэтапного и
                    последовательного развития общества. В рамках спецификации
                    современных стандартов, сторонники тоталитаризма в науке
                    будут функционально разнесены.
                  </p>
                </div>
              </div>
              <div>
                <hr className="bg-[#D5D1E1] border-[#D5D1E1]" />
                <div className="flex justify-between items-center py-5 cursor-pointer">
                  <h3 className="text-[#202020] text-[18px] font-semibold">
                    Почему не отгружаем по платежному поручению?
                  </h3>
                  <button
                    className={
                      count === 9
                        ? "w-[32px] h-[32px] flex items-center justify-center border  bg-[#088269]  rounded-full rotate-45 duration-150"
                        : " border w-[32px] h-[32px] flex items-center  border-[#D5D1E1] justify-center  rounded-[50px]"
                    }
                    onClick={() => toggleDiv(9)}
                  >
                    <span
                      className={
                        count === 9
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
                    count === 9
                      ? "block text-white opacity-75 text-[14px] py-3 transition-all duration-2000 ease-in-out max-h-screen"
                      : "hidden max-h-0 overflow-hidden"
                  }
                >
                  <p className="text-[#202020] opacity-80">
                    Но синтетическое тестирование, в своём классическом
                    представлении, допускает внедрение поэтапного и
                    последовательного развития общества. В рамках спецификации
                    современных стандартов, сторонники тоталитаризма в науке
                    будут функционально разнесены.
                  </p>
                </div>
              </div>
              <div>
                <hr className="bg-[#D5D1E1] border-[#D5D1E1]" />
                <div className="flex justify-between items-center py-5 cursor-pointer">
                  <h3 className="text-[#202020] text-[18px] font-semibold">
                    Как можно купить товар за наличный расчет?
                  </h3>
                  <button
                    className={
                      count === 10
                        ? "w-[32px] h-[32px] flex items-center justify-center border  bg-[#088269]  rounded-full rotate-45 duration-150"
                        : " border w-[32px] h-[32px] flex items-center  border-[#D5D1E1] justify-center  rounded-[50px]"
                    }
                    onClick={() => toggleDiv(10)}
                  >
                    <span
                      className={
                        count === 10
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
                    count === 10
                      ? "block text-white opacity-75 text-[14px] py-3 transition-all duration-2000 ease-in-out max-h-screen"
                      : "hidden max-h-0 overflow-hidden"
                  }
                >
                  <p className="text-[#202020] opacity-80">
                    Но синтетическое тестирование, в своём классическом
                    представлении, допускает внедрение поэтапного и
                    последовательного развития общества. В рамках спецификации
                    современных стандартов, сторонники тоталитаризма в науке
                    будут функционально разнесены.
                  </p>
                </div>
              </div>
              <div>
                <hr className="bg-[#D5D1E1] border-[#D5D1E1]" />
                <div className="flex justify-between items-center py-5 cursor-pointer">
                  <h3 className="text-[#202020] text-[18px] font-semibold">
                    Как сравнить товары на сайте?
                  </h3>
                  <button
                    className={
                      count === 11
                        ? "w-[32px] h-[32px] flex items-center justify-center border  bg-[#088269]  rounded-full rotate-45 duration-150"
                        : " border w-[32px] h-[32px] flex items-center  border-[#D5D1E1] justify-center  rounded-[50px]"
                    }
                    onClick={() => toggleDiv(11)}
                  >
                    <span
                      className={
                        count === 11
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
                    count === 11
                      ? "block text-white opacity-75 text-[14px] py-3 transition-all duration-2000 ease-in-out max-h-screen"
                      : "hidden max-h-0 overflow-hidden"
                  }
                >
                  <p className="text-[#202020] opacity-80">
                    Но синтетическое тестирование, в своём классическом
                    представлении, допускает внедрение поэтапного и
                    последовательного развития общества. В рамках спецификации
                    современных стандартов, сторонники тоталитаризма в науке
                    будут функционально разнесены.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex  justify-center w-full items-center gap-[10px] cursor-pointer">
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
            <p className="w-[35px] h-[35px] flex bg-white items-center justify-center  rounded-[8px] hover:bg-[#088269] hover:text-white cursor-pointer">
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

export default Chasto;
