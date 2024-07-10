import React, { useEffect } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { NavLink } from "react-router-dom";
import Kompleks from "../components/Kompleks";
import Vopros from "../components/Vopros";
import Location from "../components/Location";
import Kab_hero from "../components/Kab_hero";
import Pochemu from "../components/Pochemu";
import Mail from "../components/Mail";

const Podklyuch = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <>
      <div className="w-[1440px] m-auto">
        <div className="w-[1310px] m-auto">
          <div className="flex my-[20px] items-center gap-[8px]">
            <NavLink to="/">
              <p className="text-[#7A7687] text-[14px] font-normal hover:text-[#202020]">
                Главная
              </p>
            </NavLink>
            <IoIosArrowForward className="text-[#7A7687] text-[14px]" />
            <NavLink to="/podklyuch">
              <p className="text-[14px] font-normal text-[#202020]">
                Кабинет под ключ
              </p>
            </NavLink>
          </div>
          <Kab_hero />
          <Pochemu />
          <Kompleks />
        </div>
        <Vopros />
        <div className="mb-[150px]">
          <Location />
        </div>
        <Mail />
      </div>
    </>
  );
};

export default Podklyuch;
