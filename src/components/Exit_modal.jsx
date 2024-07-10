import React, { useState, useContext } from "react";
import { NavLink } from "react-router-dom";

const Exit_modal = ({ handlevoyti }) => {
  const handleExit = () => {
    // localStorage ni tozalash
    localStorage.removeItem("userInfo");
    // setIslogin ni false qilish
    setIslogin(false);
    // Optional: boshqa tozalash kerak bo'lsa uni ham bajarsangiz:
    // localStorage.clear();
    localStorage.clear();
  };
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="w-[500px] relative h-[200px] rounded-[10px] bg-white pt-[10px] px-[25px]">
        <p className="text-[#202020] text-center capitalize text-[26px] font-semibold">
          выйти!
        </p>
        <p className="text-red-500 text-center mt-[15px] mb-[20px]  text-[18px] font-semibold">
          Вы уверены,
          <br /> что хотите выйти из своего профиля?
        </p>
        <div className="flex items-center mt-[15px] gap-[15px]">
          <button
            onClick={handlevoyti}
            className="w-full h-[41px] rounded-[50px] border capitalize hover:bg-slate-200 bg-white border-[#D5D1E1] hover:scale-105 duration-200 text-[#202020] text-[14px] font-semibold "
          >
            нет
          </button>
          <NavLink to="/" className="w-full">
            <button
              onClick={handleExit}
              className="w-full capitalize m-auto h-[41px] rounded-[50px] bg-[#088269] text-[#F8F7F3] text-[16px] font-semibold hover:scale-105 duration-200 hover:bg-[#07745E]"
            >
              Да
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Exit_modal;
