import React, { useEffect } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { NavLink } from "react-router-dom";
import Uslugi_cards from "../components/Uslugi_cards";
import Fakt from "../components/Fakt";
import Download from "../components/Download";
import Sertifikat from "../components/Sertifikat";
import Konsultatsiya_loc from "../components/Konsultatsiya_loc";

const Uslugi = () => {
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
            <p className="text-[14px] font-normal text-[#202020]">Услуги</p>
          </div>
          <Uslugi_cards />
          <Fakt />
          <Download />
        </div>
        <Sertifikat />
        <div className="mb-[150px]">
          <Konsultatsiya_loc />
        </div>
      </div>
    </>
  );
};

export default Uslugi;
