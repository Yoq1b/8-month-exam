import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import Otziv_hero from "../components/Otziv_hero";
import Konsultatsiya_loc from "../components/Konsultatsiya_loc";

const Otzivi = () => {
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
            <p className="text-[14px] font-normal text-[#202020]">Отзывы</p>
          </div>
          <Otziv_hero />
          <div className="mb-[150px]">
            <Konsultatsiya_loc />
          </div>
        </div>
      </div>
    </>
  );
};

export default Otzivi;
