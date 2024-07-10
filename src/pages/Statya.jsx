import React, {useEffect} from "react";
import { IoIosArrowForward } from "react-icons/io";
import { NavLink } from "react-router-dom";
import Informatsiya_statya from "../components/Informatsiya_statya";
import Products_statya from "../components/Products_statya";
import Kabinet from "../components/Kabinet";
import Brend from "../components/Brend";
import Konsultatsiya_loc from "../components/Konsultatsiya_loc";

const Statya = () => {
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
            <NavLink to="/blog">
              <p className="text-[#7A7687] text-[14px] font-normal hover:text-[#202020]">
                Блог
              </p>
            </NavLink>
            <IoIosArrowForward className="text-[#7A7687] text-[14px]" />
            <p className="text-[14px] font-normal text-[#202020]">
              Информационная статья
            </p>
          </div>
          <Informatsiya_statya />
        </div>
        <Products_statya />
        <Kabinet />
        <Brend />
        <div className="mb-[150px]">
          <Konsultatsiya_loc />
        </div>
      </div>
    </>
  );
};

export default Statya;
