import React, { useState, useContext } from "react";
import { IoClose } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../App";

const Login_modal = ({ handlevoyti }) => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});

  const { setUserInfo } = useContext(LoginContext);
  const navigate = useNavigate();

  const handleOpenModal = () => {
    const newErrors = {};
    if (!name) newErrors.name = true;
    if (!surname) newErrors.surname = true;
    if (!phone) newErrors.phone = true;
    if (!email) newErrors.email = true;

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Ma'lumotlarni localStorage ga saqlash
      localStorage.setItem(
        "userInfo",
        JSON.stringify({ name, surname, phone, email })
      );

      // setUserInfo ni o'zgartirish
      setUserInfo({ name, surname, phone, email });
      navigate("/login");
      handlevoyti();
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="w-[500px] relative h-[400px] rounded-[10px] bg-white px-[25px]">
        <div className="flex mt-[20px] items-center justify-between">
          <p className="text-[#202020] text-[18px] font-semibold">Войти</p>
          <IoClose
            onClick={handlevoyti} // handleClose funksiyasini chaqiring
            className="text-[22px] hover:cursor-pointer hover:scale-125 hover:text-red-500 hover:rotate-90 duration-300"
          />
        </div>
        <input
          type="text"
          placeholder="Ваше имя*"
          className={`w-full h-[31px] capitalize mt-[40px] pb-[11px] border-b text-[#7A7687] text-[14px] outline-none ${
            errors.name ? "border-red-500 border" : "border-b-[#E5E2EE]"
          }`}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Ваше фамилия*"
          className={`w-full h-[31px] capitalize mt-[25px] pb-[11px] border-b text-[#7A7687] text-[14px] outline-none ${
            errors.surname ? "border-red-500 border" : "border-b-[#E5E2EE]"
          }`}
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
        />
        <input
          type="number"
          placeholder="Ваш телефон*"
          className={`w-full h-[31px] mt-[25px] pb-[11px] border-b text-[#7A7687] text-[14px] outline-none ${
            errors.phone ? "border-red-500 border" : "border-b-[#E5E2EE]"
          }`}
          value={phone}
          onChange={(e) => setPhone(e.target.value) & handleChange}
        />
        <input
          type="email"
          placeholder="Ваш email*"
          className={`w-full h-[31px] mt-[25px] pb-[11px] border-b text-[#7A7687] text-[14px] outline-none ${
            errors.email ? "border-red-500 border" : "border-b-[#E5E2EE]"
          }`}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <p
          className={`absolute bottom-[85px] left-[120px] text-[#7A7687] text-center text-[14px] ${
            Object.keys(errors).length > 0 ? "text-red-500" : "hidden"
          }`}
        >
          Указанные поля должны быть заполнены
        </p>
        <div className="flex items-center mt-[35px] gap-[15px]">
          <button
            onClick={handleOpenModal}
            className="w-[174px] h-[41px] rounded-[50px] bg-[#088269] text-[#F8F7F3] text-[14px] font-semibold hover:scale-105 duration-200 hover:bg-[#07745E]"
          >
            Войти
          </button>
          <p className="text-[#202020] text-[12px] font-medium leading-[16.39px]">
            Нажимая «Войти», я соглашаюсь c<br /> обработкой персональных данных
            на
            <br /> условиях
            <span className="text-[#088269]">Политики конфиденциальности.</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login_modal;
