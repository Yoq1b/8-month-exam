import React, { useEffect } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { NavLink } from "react-router-dom";
import Proizvoditel from "../components/Proizvoditel";
import Products from "../components/Products";
import Pochemu from "../components/Pochemu";
import Novosti from "../components/Novosti";
import Vopros from "../components/Vopros";
import Konsultatsiya_loc from "../components/Konsultatsiya_loc";
import Mail from "../components/Mail";

const Proizvoditeli = () => {
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
          <p className="text-[14px] font-normal text-[#202020]">
            Производители
          </p>
        </div>
        <Proizvoditel />
      </div>
      <Products />
      <Pochemu />
      <Novosti />
      <Vopros />
      <Konsultatsiya_loc />
      <Mail />
    </>
  );
};

export default Proizvoditeli;
