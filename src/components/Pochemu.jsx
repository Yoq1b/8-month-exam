import React from "react";
import light from "/assets/light.png";
import snow from "/assets/snow.png";
import line from "/assets/sistema.png";
import seven from "/assets/seven.png";

const Pochemu = () => {
  return (
    <>
      <div className="w-[1310px] m-auto">
        <h3 className="text-[30px] text-[#202020] font-medium mb-[40px] mt-[150px]">
          Почему выбирают нас?
        </h3>
        <div className=" flex items-center justify-between">
          <div className="w-[320px] h-[320px] rounded-[10px] border border-[#E5E2EE] flex flex-col items-center justify-center gap-[40px]">
            <img src={light} alt="rasm" className="w-[37px] h-[75px]" />
            <p className="text-[16px] text-[#202020] font-medium">
              Быстрая доставка
            </p>
          </div>
          <div className="w-[320px] h-[320px] rounded-[10px] border border-[#E5E2EE] flex flex-col items-center justify-center gap-[31px]">
            <img src={snow} alt="rasm" className="w-[65px] h-[73px]" />
            <p className="text-[16px] text-center leading-[22.4px] text-[#202020] font-medium">
              Весь товар <br /> сертифицирован
            </p>
          </div>
          <div className="w-[320px] h-[320px] rounded-[10px] border border-[#E5E2EE] flex flex-col items-center justify-center gap-[40px]">
            <img src={line} alt="rasm" className="w-[62px] h-[55px]" />
            <p className="text-[16px] text-center leading-[22.4px] text-[#202020] font-medium">
              Гибкая система <br /> скидок
            </p>
          </div>
          <div className="w-[320px] h-[320px] rounded-[10px] border border-[#E5E2EE] flex flex-col items-center justify-center gap-[45px]">
            <img src={seven} alt="rasm" className="w-[33px] h-[58px]" />
            <p className="text-[16px] text-center leading-[22.4px] text-[#202020] font-medium">
              Лет на рынке
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pochemu;
