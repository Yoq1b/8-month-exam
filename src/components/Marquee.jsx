import React from "react";
import Marque from "./Marque";

const Marquee = () => {
  return (
    <>
      <div className="w-[100%] m-auto mt-[100px] bg-[#E5E4ED] pb-[100px]">
        <div className="w-[1310px] m-auto py-[100px] flex items-start gap-[450px]">
          <h3 className="text-[#202020] text-[30px] font-medium">
            Наши клиенты
          </h3>
          <p className="text-[#202020] text-[48px] font-medium leading-[52.8px]">
            БОЛЕЕ <span className="text-[#088269]">5000</span> <br /> УСПЕШНЫХ
            ПРОЕКТОВ
          </p>
        </div>
        <Marque />
      </div>
    </>
  );
};

export default Marquee;
