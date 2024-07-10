import React, { useState, useContext } from "react";
import Logo from "/assets/Logo.svg";
import SelectLabel from "./SelectLabel";
import { IoClose, IoSearchOutline } from "react-icons/io5";
import user from "/assets/login.svg";
import diagram from "/assets/comparison.svg";
import basket from "/assets/basket.svg";
import doctorimg from "/assets/doctor_img.png";
import trueimg from "/assets/confirmation.svg";
import { GoHeart } from "react-icons/go";
import { NavLink, useNavigate } from "react-router-dom";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { GrLocation } from "react-icons/gr";
import { ProductContext, SvarnitContext, LikeContext } from "../App";
import Login_modal from "./Login_modal";
import SearchInput from "./SearchInput";

const Navbar = () => {
  const { product } = useContext(ProductContext);
  const { svar } = useContext(SvarnitContext);
  const { likedd } = useContext(LikeContext);

  const [isOpen, setIsOpen] = useState(false);
  const [isOpenb, setIsOpenb] = useState(false);
  const [ismodal, setismodal] = useState(false);
  const categories = [
    { name: "Вакансии", path: "/vakansii" },
    { name: "Отзывы", path: "/otzivi" },
    { name: "Сертификаты", path: "/sertifikat" },
    { name: "Партнерские программы", path: "/okompanii" },
    { name: "Оптовые продажи", path: "/okompanii" },
    { name: "Лизинг", path: "/okompanii" },
  ];
  const [isOpenn, setIsOpenn] = useState(false);
  const [islogin, setIslogin] = useState(false);
  const categoriess = [
    { name: "Новости", path: "/blog" },
    { name: "Статьи", path: "/statya" },
    { name: "Видео", path: "/sertifikat" },
  ];

  // const { islogin, setIslogin } = useContext(LoginContext);
  const navigate = useNavigate();
  const handleLoginEnter = () => {
    const storedUserInfo = localStorage.getItem("userInfo");
    if (storedUserInfo) {
      // localStorage da ma'lumot mavjud bo'lsa, login sahifasiga yo'naltirish
      navigate("/login");
    } else {
      // localStorage bo'sh bo'lsa setIslogin(true)
      setIslogin(true);
    }
  };

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleButtonClick = () => {
    setIsOpenb(true);
  };
  const handleOK = () => {
    setismodal(true);
    setTimeout(() => {
      setismodal(false);
    }, 3000);
  };

  const handleOkClick = () => {
    setIsOpenb(false);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };
  const handleMouseEnterr = () => {
    setIsOpenn(true);
  };

  const handleMouseLeavee = () => {
    setIsOpenn(false);
  };

  const handleSelect = (category) => {
    setSelectedCategory(category.name);
    setIsOpen(false);
  };

  const combinedFunction = () => {
    handleOK();
    handleOkClick();
  };

  const closeModal = () => {
    setIslogin(false);
  };

  return (
    <>
      <div className="fixed bg-[#F8F7F3] z-50 top-0 w-[100%] m-auto">
        <div className="w-[1310px] m-auto flex items-center justify-between ">
          <ul className="flex items-center my-[10px] gap-[20px]">
            <NavLink
              onMouseEnter={handleMouseEnter}
              onClick={handleMouseLeave}
              to="okompanii"
              className="text-[#7A7687] text-[12px] font-medium hover:cursor-pointer hover:scale-105 duration-100 hover:text-[#424F65]"
            >
              О компании
            </NavLink>
            <NavLink
              to="/dostavka"
              className="text-[#7A7687] hover:scale-105 duration-100 text-[12px] font-medium hover:cursor-pointer hover:text-[#424F65]"
            >
              Доставка
            </NavLink>
            <NavLink
              to="/oplata"
              className="text-[#7A7687] hover:scale-105 duration-100 text-[12px] font-medium hover:cursor-pointer hover:text-[#424F65]"
            >
              Оплата
            </NavLink>
            <NavLink
              to="/garantii"
              className="text-[#7A7687] hover:scale-105 duration-100 text-[12px] font-medium hover:cursor-pointer hover:text-[#424F65]"
            >
              Гарантии
            </NavLink>
            <NavLink
              onMouseEnter={handleMouseEnterr}
              onClick={handleMouseLeavee}
              to="/blog"
              className="text-[#7A7687] hover:scale-105 duration-100 text-[12px] font-medium hover:cursor-pointer hover:text-[#424F65]"
            >
              Блог
            </NavLink>
          </ul>
          <ul className="flex items-center my-[10px] gap-[45px]">
            <li className="text-[#7A7687] hover:scale-105 duration-100 text-[12px] font-medium hover:cursor-pointer hover:text-[#424F65]">
              info@mail.ru
            </li>
            <li className="text-[#7A7687] hover:scale-105 duration-100 text-[12px] font-medium hover:cursor-pointer hover:text-[#424F65]">
              г. Москва, ул. Московская, д. 35
            </li>
          </ul>
        </div>
        <hr className="text-[#E5E2EE] w-full h-[1px] mb-[26px]" />
        <div className="w-[1310px] m-auto flex items-center justify-between ">
          <div className="flex items-center justify-center">
            <NavLink to="/">
              <img src={Logo} alt="logo" className="w-[96px] h-[41px]" />
            </NavLink>
            <SearchInput />
            <p className="ml-[35px] text-[#7A7687] text-[12px] font-medium">
              Пн-Пт с 09:00-19:00 <br /> Сб-Вс - выходной
            </p>
          </div>
          {/* ----------------- */}
          <ul className="flex items-center gap-[25px] justify-center">
            <li
              onClick={handleLoginEnter}
              to="/login"
              className="group flex flex-col hover:cursor-pointer items-center justify-center"
            >
              <img src={user} alt="img" className="w-[19px] h-[20px]" />
              <p className="text-[#7A7687] text-[12px] group-hover:text-[#088269]">
                Войти
              </p>
            </li>
            <NavLink
              to="/like"
              className="group relative flex flex-col hover:cursor-pointer items-center gap-[2px] justify-center"
            >
              <GoHeart className="text-[18px]" />
              {likedd.length > 0 && (
                <div className="absolute top-[-2px] right-[18px] bg-[#088269] flex items-center justify-center  border h-[8px] rounded-[50%] w-[8px]"></div>
              )}
              <p className="text-[#7A7687] text-[12px] group-hover:text-[#088269]">
                Избранное
              </p>
            </NavLink>
            <NavLink
              to="/sravnit"
              className="group relative flex flex-col hover:cursor-pointer items-center gap-[2px] justify-center"
            >
              <img src={diagram} alt="img" className="w-[19px] h-[20px]" />
              {svar.length > 0 && (
                <div className="absolute top-[-1px] right-[14px] bg-[#088269] flex items-center justify-center  border h-[8px] rounded-[50%] w-[8px]"></div>
              )}

              {/* ----------------------------------------------------- */}
              <p className="text-[#7A7687] text-[12px] group-hover:text-[#088269]">
                Сравнить
              </p>
            </NavLink>
            <NavLink
              to="/basket"
              className="aaa group  relative flex flex-col hover:cursor-pointer items-center gap-[2px] justify-center"
            >
              <img src={basket} alt="img" className="w-[21px] h-[20px]" />
              <div className="absolute top-[-4px] right-[5px] bg-[#088269] flex items-center justify-center  border h-[15px] rounded-[50%] w-[15px]">
                <p className="text-[10px] text-white">{product.length}</p>
              </div>
              <p className="text-[#7A7687] text-[12px] group-hover:text-[#088269]">
                Корзина
              </p>
            </NavLink>
          </ul>
        </div>
        <hr className="text-[#E5E2EE] w-full h-[1px] mt-[26px]" />
        <div className="w-[1310px] m-auto flex items-center justify-between">
          <ul className="flex items-center gap-[25px]">
            <NavLink
              to="/katalog"
              className="group flex items-center hover:cursor-pointer hover:scale-105 duration-100 hover:text-[#088269] gap-[5px]"
            >
              <HiOutlineMenuAlt1 />
              <p className="text-[#202020] group-hover:text-[#088269] text-[14px] font-semibold">
                Каталог
              </p>
            </NavLink>
            <NavLink
              to="/proizvoditeli"
              className="text-[#202020] hover:cursor-pointer hover:scale-105 duration-100 hover:text-[#088269] text-[14px] font-semibold"
            >
              Производители
            </NavLink>
            <NavLink
              to="/podklyuch"
              className="text-[#202020] hover:cursor-pointer hover:scale-105 duration-100 hover:text-[#088269] text-[14px] font-semibold"
            >
              Кабинеты под ключ
            </NavLink>
            <NavLink
              to="/uslugi"
              className="text-[#202020] hover:cursor-pointer hover:scale-105 duration-100 hover:text-[#088269] text-[14px] font-semibold"
            >
              Услуги
            </NavLink>
            <NavLink
              to="/aksii"
              className="text-[#202020] hover:cursor-pointer hover:scale-105 duration-100 hover:text-[#088269] text-[14px] font-semibold"
            >
              Акции
            </NavLink>
            <NavLink
              to=""
              className="text-[#202020] hover:cursor-pointer hover:scale-105 duration-100 hover:text-[#088269] text-[14px] font-semibold"
            >
              Покупателям
            </NavLink>
            <NavLink
              to="/kontakti"
              className="text-[#202020] hover:cursor-pointer hover:scale-105 duration-100 hover:text-[#088269] text-[14px] font-semibold"
            >
              Контакты
            </NavLink>
          </ul>
          <div className="flex items-center gap-[17px]">
            <NavLink to="/dostavka">
              <div className="flex items-center gap-[3px]">
                <p className="text-[#202020] group-hover:text-[#088269] text-[14px] font-semibold">
                  Москва
                </p>
                <GrLocation className="text-[13px]" />
              </div>
            </NavLink>
            <div className="flex my-[10px] items-center gap-[10px]">
              <div className="w-[168px] h-[41px] rounded-[50px] border border-[#D5D1E1] flex items-center justify-center">
                <p className="text-[#202020] text-[14px] font-semibold">
                  +7(495)000-00-00
                </p>
              </div>

              <button
                onClick={handleButtonClick}
                className="w-[168px] h-[41px] bg-[#088269] hover:bg-[#07745E] rounded-[50px] border border-[#D5D1E1] flex items-center justify-center"
              >
                <p className="text-[#F8F7F3] text-[14px] font-semibold">
                  Заказать звонок
                </p>
              </button>
            </div>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className=" z-50 absolute left-[90px] top-[30px] mt-2 w-56 rounded-md shadow-lg bg-white">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {categories.map((category) => (
              <NavLink
                key={category.name}
                to={category.path}
                onClick={() => handleSelect(category)}
                className="block px-4 py-[6px] text-[14px] text-gray-700 hover:bg-gray-100 w-full text-left"
              >
                {category.name}
              </NavLink>
            ))}
          </div>
        </div>
      )}
      {isOpenn && (
        <div className=" z-50 absolute left-[380px] top-[30px] mt-2 w-[130px] rounded-md shadow-lg bg-white">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {categoriess.map((category) => (
              <NavLink
                key={category.name}
                to={category.path}
                onClick={() => handleSelect(category)}
                className="block px-4 py-[1px] text-[14px] text-gray-700 hover:bg-gray-100 w-full text-left"
              >
                {category.name}
              </NavLink>
            ))}
          </div>
        </div>
      )}
      {isOpenb && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="w-[500px] h-[410px] rounded-[10px] bg-white px-[25px]">
            <div className="flex mt-[20px] items-center justify-between">
              <p className="text-[#202020] text-[18px] font-semibold">
                Заказать звонок
              </p>
              <IoClose
                onClick={handleOkClick}
                className="text-[22px] hover:cursor-pointer hover:scale-125 hover:text-red-500 hover:rotate-90 duration-300"
              />
            </div>
            <div className="mt-[20px] flex items-center gap-[10px]">
              <img src={doctorimg} alt="rasm" />
              <div>
                <p className="text-[#202020] font-medium text-[16px]">
                  Олег Сергеевич
                </p>
                <p className="text-[#7A7687] font-medium text-[12px]">
                  Менеджер по продажам
                </p>
              </div>
            </div>
            <input
              type="number"
              placeholder="Ваш телефон"
              className="w-full h-[31px] mt-[20px] mb-[25px] pb-[11px] border-b text-[#7A7687] text-[14px] outline-none border-b-[#E5E2EE]"
            />
            <div className="relative w-full ">
              <textarea
                id="email"
                placeholder="Ваш вопрос"
                className="w-full h-[116px] border-b text-[#7A7687] text-[14px] outline-none resize-none leading-tight border-b-[#E5E2EE]"
              ></textarea>
            </div>
            <div className="flex items-center mt-[25px] gap-[15px]">
              <button
                onClick={combinedFunction}
                className="w-[174px] h-[41px] rounded-[50px] bg-[#088269] text-[#F8F7F3] text-[14px] font-semibold hover:scale-105 duration-200 hover:bg-[#07745E]"
              >
                Оставить заявку
              </button>
              <p className="text-[#202020] text-[12px] font-medium leading-[16.39px]">
                Нажимая «Оставить заявку», я соглашаюсь
                <br /> c обработкой персональных данных на
                <br /> условиях
                <span className="text-[#088269]">
                  Политики конфиденциальности.
                </span>
              </p>
            </div>
          </div>
        </div>
      )}
      {ismodal && (
        <div className="absolute top-[30px] right-[40px] z-50 w-[300px] h-[50px] rounded-[10px] flex items-center justify-center gap-[15px] bg-[#088269]">
          <p className="text-white font-semibold text-[18px]">
            Сообщение отправлено
          </p>
          <img src={trueimg} alt="rasm" className="w-[30px] h-[30px]" />
        </div>
      )}
      {islogin && <Login_modal handlevoyti={closeModal} />}
    </>
  );
};

export default Navbar;
