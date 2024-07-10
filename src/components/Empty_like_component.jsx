import React from "react";
import { NavLink } from "react-router-dom";

const Empty_like_component = () => {
  return (
    <>
      <div className="mb-[150px]">
        <h3 className="text-[#202020] mt-[10px] mr-[135px] mb-[25px] text-[30px] font-medium">
          Не добавлено товаров в избранное
        </h3>
        <h3 className="text-[#7A7687]  mb-[25px] text-[16px] font-medium leading-[22.4px]">
          Вы можете перейти на главную страницу
          <br /> или воспользоваться каталогом товаров
        </h3>
        <div className="flex items-center gap-[10px]">
          <NavLink to="/">
            <button className="w-[140px] h-[41px] rounded-[50px] text-[#088269] border border-[#D5D1E1] hover:border-[#088269] text-[16px] font-semibold hover:scale-105 duration-200 hover:text-[#f8f7f3] hover:bg-[#088269]">
              На главную
            </button>
          </NavLink>
          <NavLink to="/katalog">
            <button className="w-[140px] h-[41px] rounded-[50px] bg-[#088269] text-[#F8F7F3] border border-[#D5D1E1] hover:border-[#088269] text-[16px] font-semibold hover:scale-105 duration-200 hover:text-[#f8f7f3] hover:bg-[#088269]">
              В каталог
            </button>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Empty_like_component;
