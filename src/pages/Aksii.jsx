import React, { useEffect } from "react";
import Aksiya_hero from "../components/Aksiya_hero";
import Kabinet from "../components/Kabinet";
import { NavLink } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import Products from "../components/Products";
import Products_statya from "../components/Products_statya";
import Populyarnie from "../components/Populyarnie";
import Brend from "../components/Brend";
import Konsultatsiya_loc from "../components/Konsultatsiya_loc";
import Mail from "../components/Mail";

const Aksii = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <>
      <div className="w-[1310px] m-auto">
        <div className="flex my-[20px] items-center gap-[8px]">
          <NavLink to="/">
            <p className="text-[#7A7687] text-[14px] font-normal hover:text-[#202020]">
              Главная
            </p>
          </NavLink>
          <IoIosArrowForward className="text-[#7A7687] text-[14px]" />
          <p className="text-[14px] font-normal text-[#202020]">Акции</p>
        </div>
        <Aksiya_hero />
      </div>
      <Kabinet />
      <Products />
      <Populyarnie />
      <Brend />
      <Konsultatsiya_loc />
      <Mail />
    </>
  );
};

export default Aksii;
