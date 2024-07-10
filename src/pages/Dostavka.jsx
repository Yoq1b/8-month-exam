import React, { useEffect } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { NavLink } from "react-router-dom";
import DostavkaHero from "../components/DostavkaHero";
import Pochemu from "../components/Pochemu";
import Udobno from "../components/Udobno";
import Pravila from "../components/Pravila";
import Vopros from "../components/Vopros";
import Ofis from "../components/Ofis";
import Dokument from "../components/Dokument";
import Konsultatsiya from "../components/Konsultatsiya";
import Mail from "../components/Mail";

const Dostavka = () => {
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
            <p className="text-[14px] font-normal text-[#202020]">Доставка</p>
          </div>
          <DostavkaHero />
          <Udobno />
          <Pravila />
        </div>
        <Vopros />
        <Ofis />
        <Dokument />
        <Konsultatsiya />
        <Mail />
      </div>
    </>
  );
};

export default Dostavka;
