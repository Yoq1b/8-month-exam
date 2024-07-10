import React, { useState } from "react";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import litsenziya from "/assets/liysenziya.png";

const Sertifikat = () => {
  const [translateX, setTranslateX] = useState(0);
  const [slideCount, setSlideCount] = useState(0); // slideCount holati
  const maxSlideCount = 4; // Maksimal oldinga surishlar soni
  const itemWidth = 220;

  const handleNext = () => {
    if (slideCount < maxSlideCount) {
      setTranslateX((prev) => prev - itemWidth);
      setSlideCount((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (slideCount > 0) {
      setTranslateX((prev) => prev + itemWidth);
      setSlideCount((prev) => prev - 1);
    }
  };

  return (
    <>
      <div className="w-[1440px] m-auto pl-[65px]">
        <div className="flex my-[150px] items-start justify-between">
          <div>
            <h4 className="text-[#202020] text-[30px]  leading-[36px] font-medium">
              Сертификаты <br /> на продукцию
            </h4>
          </div>
          {/* --------------- */}
          <div>
            <div className="flex items-center w-[1050px] overflow-x-hidden">
              <div
                className="flex items-center transition-transform duration-500"
                style={{ transform: `translateX(${translateX}px)` }}
              >
                <div className="w-[210px] h-[280px] flex items-center justify-center mr-[10px] bg-white border border-[#E5E2EE] rounded-[10px]">
                  <img
                    src={litsenziya}
                    alt="rasm"
                    className="w-[178px] h-[248px]"
                  />
                </div>
                <div className="w-[210px] h-[280px] flex items-center justify-center mr-[10px] bg-white border border-[#E5E2EE] rounded-[10px]">
                  <img
                    src={litsenziya}
                    alt="rasm"
                    className="w-[178px] h-[248px]"
                  />
                </div>
                <div className="w-[210px] h-[280px] flex items-center justify-center mr-[10px] bg-white border border-[#E5E2EE] rounded-[10px]">
                  <img
                    src={litsenziya}
                    alt="rasm"
                    className="w-[178px] h-[248px]"
                  />
                </div>
                <div className="w-[210px] h-[280px] flex items-center justify-center mr-[10px] bg-white border border-[#E5E2EE] rounded-[10px]">
                  <img
                    src={litsenziya}
                    alt="rasm"
                    className="w-[178px] h-[248px]"
                  />
                </div>
                <div className="w-[210px] h-[280px] flex items-center justify-center mr-[10px] bg-white border border-[#E5E2EE] rounded-[10px]">
                  <img
                    src={litsenziya}
                    alt="rasm"
                    className="w-[178px] h-[248px]"
                  />
                </div>
                <div className="w-[210px] h-[280px] flex items-center justify-center mr-[10px] bg-white border border-[#E5E2EE] rounded-[10px]">
                  <img
                    src={litsenziya}
                    alt="rasm"
                    className="w-[178px] h-[248px]"
                  />
                </div>
                <div className="w-[210px] h-[280px] flex items-center justify-center mr-[10px] bg-white border border-[#E5E2EE] rounded-[10px]">
                  <img
                    src={litsenziya}
                    alt="rasm"
                    className="w-[178px] h-[248px]"
                  />
                </div>
                <div className="w-[210px] h-[280px] flex items-center justify-center mr-[10px] bg-white border border-[#E5E2EE] rounded-[10px]">
                  <img
                    src={litsenziya}
                    alt="rasm"
                    className="w-[178px] h-[248px]"
                  />
                </div>
              </div>
            </div>
            <div className="w-[1050px] mt-[40px] flex items-center justify-between pr-[65px]">
              <div className="flex items-center gap-[10px]">
                <button
                  onClick={handlePrev}
                  disabled={slideCount === 0} // Boshlang'ich holatda back button ishlamaydi
                  className={`w-[41px] h-[41px] flex items-center justify-center rounded-[50%] border border-[#D5D1E1] ${
                    slideCount > 0 ? "hover:bg-slate-300" : "bg-gray-300"
                  }`}
                >
                  <GoArrowLeft className="text-[#202020] text-[22px] " />
                </button>
                <button
                  onClick={handleNext}
                  disabled={slideCount === maxSlideCount} // 3 marta bosilgandan keyin next button ishlamaydi
                  className={`w-[41px] h-[41px] flex  items-center justify-center rounded-[50%] border border-[#D5D1E1] ${
                    slideCount < maxSlideCount
                      ? "hover:bg-slate-300"
                      : "bg-gray-300"
                  }`}
                >
                  <GoArrowRight className="text-[#202020] text-[22px] " />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sertifikat;
