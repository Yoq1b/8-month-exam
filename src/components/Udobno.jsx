import React from "react";
import light from "/assets/subtract.png";
import snow from "/assets/Groupa.png";
import line from "/assets/Symbol.png";
import seven from "/assets/vvv.png";

const Udobno = () => {
  return (
    <>
      <div className="w-[1310px] m-auto">
        <h3 className="text-[30px] text-[#202020] font-medium mb-[40px] mt-[150px]">
          С нами выгодно и удобно
        </h3>
        <div className=" flex items-center justify-between">
          <div className="w-[320px] h-[320px] rounded-[10px] border border-[#E5E2EE] flex flex-col items-center justify-center gap-[30px]">
            <img src={light} alt="rasm" className="w-[57px] h-[74px]" />
            <p className="text-[16px] text-[#202020] leading-[22.4px] font-medium">
              Доставка по <br /> всей России
            </p>
          </div>
          <div className="w-[320px] h-[320px] rounded-[10px] border border-[#E5E2EE] flex flex-col items-center justify-center gap-[37px]">
            <img src={snow} alt="rasm" className="w-[65px] h-[62px]" />
            <p className="text-[16px] text-center leading-[22.4px] text-[#202020] font-medium">
              Собственный склад <br />с продукцией
            </p>
          </div>
          <div className="w-[320px] h-[320px] rounded-[10px] border border-[#E5E2EE] flex flex-col items-center justify-center gap-[31px]">
            <img src={line} alt="rasm" className="w-[65px] h-[73px]" />
            <p className="text-[16px] text-center leading-[22.4px] text-[#202020] font-medium">
              Весь товар
              <br /> сертифицирован
            </p>
          </div>
          <div className="w-[320px] h-[320px] rounded-[10px] border border-[#E5E2EE] flex flex-col items-center justify-center gap-[31px]">
            <img src={seven} alt="rasm" className="w-[50px] h-[67px]" />
            <p className="text-[16px] text-center leading-[22.4px] text-[#202020] font-medium">
              Безопасные
              <br /> способы оплаты
            </p>
          </div>
        </div>
        <div className="flex justify-end mt-[50px]">
          <button className="right-[20px] bottom-[20px] w-[250px] h-[41px] rounded-[50px] bg-[#088269] text-[#F8F7F3] text-[16px] font-semibold hover:scale-105 duration-200 hover:bg-[#07745E]">
            Проверить статус доставки
          </button>
        </div>
      </div>
    </>
  );
};

export default Udobno;
