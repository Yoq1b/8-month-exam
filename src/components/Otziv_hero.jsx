import React, { useState } from "react";
import sheep from "/assets/sheep.png";
import star from "/assets/Star.png";
import Data from "../db/Otzivi.json";
import { GrFormNext } from "react-icons/gr";
import { BsThreeDots } from "react-icons/bs";
import { IoChevronBackOutline } from "react-icons/io5";

const Otziv_hero = () => {
  const [sale, setSale] = useState(1);
  const [sale1, setSale1] = useState(1);

  const handlePrevious = () => {
    if (sale1 > 1) {
      setSale1(sale1 - 1);
      setSale(sale1 - 1);
    }
  };

  const handleNext = () => {
    if (sale1 < 3) {
      setSale1(sale1 + 1);
      setSale(sale1 + 1);
    }
  };
  return (
    <>
      <div className="w-[1310px] m-auto">
        <h3 className="text-[#202020] font-medium mt-[85px] mb-[40px] text-[48px] leading-[52.8px]">
          Отзывы
        </h3>
        <div className="flex flex-wrap mb-[40px] items-center justify-between">
          {sale == 1 &&
            Data.slice(0, 6).map((item) => (
              <div
                key={item.id}
                className="w-[650px] mb-[10px] h-[288px] rounded-[10px] bg-white pt-[20px] px-[25px] border border-[#E5E2EE]"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-end gap-[20px]">
                    <img src={sheep} alt="rasm" className="w-[64px] h-[64px]" />
                    <div>
                      <p className="text-[#202020] font-semibold text-[18px] leading-[24px]">
                        ООО Название компании
                      </p>
                      <p className="text-[#7A7687] font-semibold text-[18px] ">
                        Михаил Булич Андреевич, Директор
                      </p>
                      <img
                        src={star}
                        alt="rasm"
                        className="w-[81px] h-[13px] mt-[10px]"
                      />
                    </div>
                  </div>
                  <p className="text-[#202020] font-normal text-[12px] ">
                    {item.date}
                  </p>
                </div>
                <p className="text-[#7A7687] w-[580px] mt-[18px] font-normal text-[16px] leading-[22.4px]">
                  {item.text}
                </p>
              </div>
            ))}
          {sale == 2 &&
            Data.slice(6, 12).map((item) => (
              <div
                key={item.id}
                className="w-[650px] mb-[10px] h-[288px] rounded-[10px] bg-white pt-[20px] px-[25px] border border-[#E5E2EE]"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-end gap-[20px]">
                    <img src={sheep} alt="rasm" className="w-[64px] h-[64px]" />
                    <div>
                      <p className="text-[#202020] font-semibold text-[18px] leading-[24px]">
                        ООО Название компании
                      </p>
                      <p className="text-[#7A7687] font-semibold text-[18px] ">
                        Михаил Булич Андреевич, Директор
                      </p>
                      <img
                        src={star}
                        alt="rasm"
                        className="w-[81px] h-[13px] mt-[10px]"
                      />
                    </div>
                  </div>
                  <p className="text-[#202020] font-normal text-[12px] ">
                    {item.date}
                  </p>
                </div>
                <p className="text-[#7A7687] w-[580px] mt-[18px] font-normal text-[16px] leading-[22.4px]">
                  {item.text}
                </p>
              </div>
            ))}
          {sale == 3 &&
            Data.slice(12, 17).map((item) => (
              <div
                key={item.id}
                className="w-[650px] mb-[10px] h-[288px] rounded-[10px] bg-white pt-[20px] px-[25px] border border-[#E5E2EE]"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-end gap-[20px]">
                    <img src={sheep} alt="rasm" className="w-[64px] h-[64px]" />
                    <div>
                      <p className="text-[#202020] font-semibold text-[18px] leading-[24px]">
                        ООО Название компании
                      </p>
                      <p className="text-[#7A7687] font-semibold text-[18px] ">
                        Михаил Булич Андреевич, Директор
                      </p>
                      <img
                        src={star}
                        alt="rasm"
                        className="w-[81px] h-[13px] mt-[10px]"
                      />
                    </div>
                  </div>
                  <p className="text-[#202020] font-normal text-[12px] ">
                    {item.date}
                  </p>
                </div>
                <p className="text-[#7A7687] w-[580px] mt-[18px] font-normal text-[16px] leading-[22.4px]">
                  {item.text}
                </p>
              </div>
            ))}
        </div>
        <div className="flex justify-center w-full items-center gap-[10px] cursor-pointer">
          <div className="flex items-center gap-[5px]">
            <p
              className={`w-[35px] h-[35px] bg-white flex items-center justify-center border rounded-[8px] hover:bg-[#088269] hover:text-white cursor-pointer ${
                sale1 === 1 ? "opacity-50 bg-white cursor-not-allowed" : ""
              }`}
              onClick={handlePrevious}
            >
              <IoChevronBackOutline />
            </p>

            {[1, 2, 3].map((num) => (
              <p
                key={num}
                onClick={() => {
                  setSale1(num);
                  setSale(num);
                }}
                className={
                  sale1 === num
                    ? "w-[35px] h-[35px] flex items-center font-bold justify-center border rounded-[8px] bg-[#088269] text-white cursor-pointer"
                    : "w-[35px] h-[35px] hover:bg-slate-200 bg-white flex items-center justify-center border border-[#E5E5E5] rounded-[8px] cursor-pointer"
                }
              >
                {num}
              </p>
            ))}
            <p className="w-[35px] h-[35px] flex bg-white items-center justify-center  rounded-[8px] hover:bg-[#088269] hover:text-white cursor-pointer">
              <BsThreeDots />
            </p>
            <p
              className={`w-[35px] h-[35px] flex items-center bg-white justify-center border rounded-[8px] hover:bg-[#088269] hover:text-white cursor-pointer ${
                sale1 === 3 ? "opacity-50 bg-white  cursor-not-allowed" : ""
              }`}
              onClick={handleNext}
            >
              <GrFormNext />
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Otziv_hero;
