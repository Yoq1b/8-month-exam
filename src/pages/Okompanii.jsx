import React, { useEffect } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { NavLink } from "react-router-dom";
import AboutHero from "../components/AboutHero";
import Fakt from "../components/Fakt";
import Partner from "../components/Partner";
import Doctor from "../components/Doctor";
import Marquee from "../components/Marquee";
import Pochemu from "../components/Pochemu";
import Brend from "../components/Brend";
import Location from "../components/Location";
import Sertifikat from "../components/Sertifikat";
import Konsultatsiya_loc from "../components/Konsultatsiya_loc";

const Okompanii = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <>
      <div className="w-[1440px] m-auto ">
        <div className="w-[1310px] m-auto">
          <div className="flex my-[20px] items-center gap-[8px]">
            <NavLink to="/">
              <p className="text-[#7A7687] text-[14px] font-normal hover:text-[#202020]">
                Главная
              </p>
            </NavLink>
            <IoIosArrowForward className="text-[#7A7687] text-[14px]" />
            <p className="text-[14px] font-normal text-[#202020]">О компании</p>
          </div>
          <AboutHero />
          <Fakt />
        </div>
        <Partner />
        <Doctor />
        <Marquee />
        <Pochemu />
        <Brend />
        <Sertifikat />
        <div className="mb-[150px]">
          <Konsultatsiya_loc />
        </div>
      </div>
    </>
  );
};

export default Okompanii;
