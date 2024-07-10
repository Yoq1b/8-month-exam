import React from "react";
import mail from "/assets/mail.png";
import Checkbox from "./Checkbox";

const Mail = () => {
  return (
    <>
      <div className="w-[100%] mt-[150px] m-auto bg-[#E5E4ED] h-[276px]">
        <div className="w-[1310px] m-auto flex items-center">
          <img src={mail} alt="rasm" />
          <div className="ml-[75px]">
            <h4 className="text-[#202020] text-[30px] font-medium mb-[10px]">
              Подпишитесь и будьте в курсе!
            </h4>
            <p className="text-[#7A7687] mb-[45px] text-[17px] font-normal">
              Акции, скидки, распродажи ждут!
            </p>
            <div className="flex h-[43px] border border-[#D5D1E1] items-center bg-white rounded-[50px]">
              <input
                type="email"
                placeholder="Введите email"
                className="pl-[25px] h-full text-[14px] rounded-[50px] text-[#7A7687] outline-none w-[390px]"
              />
              <button className="w-[150px] h-full rounded-[50px] bg-[#088269] text-[#F8F7F3] text-[14px]">
                Подписаться
              </button>
            </div>
            <div className="flex mt-[22px] items-center gap-[10px]">
              
              <Checkbox />
              <p className="text-[#202020] text-[12px] font-medium">
                Я даю согласие на обработку своих персональных данных.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mail;
