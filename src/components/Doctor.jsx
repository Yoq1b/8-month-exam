import React, { useState } from "react";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import first from "/assets/first.png";
import three from "/assets/three.png";
import second from "/assets/second.png";

const Doctor = () => {
  const [translateX, setTranslateX] = useState(0);
  const [slideCount, setSlideCount] = useState(0); // slideCount holati
  const maxSlideCount = 4; // Maksimal oldinga surishlar soni
  const itemWidth = 660;

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
        <div className="flex mb-[150px] items-start justify-between">
          <div>
            <h4 className="text-[#202020] text-[30px] mb-[25px] font-medium leading-[36px]">
              Опытные сотрудники из <br /> производственных компаний
            </h4>
            <p className="text-[#202020] text-[16px] font-medium leading-[22.4px]">
              Наши сотрудники имеют огромный опыт работы в сложных условиях,
              <br />
              в том числе в разгар пандемии COVID–19. В этот период
              <br />
              мы осуществили поставки медицинских аппаратов в новейшие <br />{" "}
              клиники Минобороны в различных регионах страны.
            </p>
          </div>
          {/* --------------- */}
          <div>
            <div className="flex items-center w-[650px] overflow-x-hidden">
              <div
                className="flex items-center transition-transform duration-700"
                style={{ transform: `translateX(${translateX}px)` }}
              >
                <div className="w-[650px] h-[367px] mr-[10px] flex items-center justify-between ">
                  <div className="w-[430px] h-[366px] rounded-[10px] border border-[#E5E2EE]">
                    <img
                      src={first}
                      alt="rasm"
                      className="h-[261px] w-full mb-[20px]"
                    />
                    <p className="text-[#202020] text-[16px] ml-[20px] mb-[2px] font-medium leading-[22.4px]">
                      Константин
                      <br /> Константинопольский
                    </p>
                    <p className="text-[#7A7687] text-[14px] ml-[20px] mb-[2px] font-normal leading-[22.4px]">
                      Основатель компании
                    </p>
                  </div>
                  <div className="w-[210px] h-[366px] ">
                    <img
                      src={three}
                      alt="rasm"
                      className="h-[178px] w-full mb-[8px]"
                    />
                    <img
                      src={second}
                      alt="rasm"
                      className="h-[178px] w-full mb-[10px]"
                    />
                  </div>
                </div>
                <div className="w-[650px] h-[367px] mr-[10px] flex items-center justify-between ">
                  <div className="w-[430px] h-[366px] rounded-[10px] border border-[#E5E2EE]">
                    <img
                      src={first}
                      alt="rasm"
                      className="h-[261px] w-full mb-[20px]"
                    />
                    <p className="text-[#202020] text-[16px] ml-[20px] mb-[2px] font-medium leading-[22.4px]">
                      Константин
                      <br /> Константинопольский
                    </p>
                    <p className="text-[#7A7687] text-[14px] ml-[20px] mb-[2px] font-normal leading-[22.4px]">
                      Основатель компании
                    </p>
                  </div>
                  <div className="w-[210px] h-[366px] ">
                    <img
                      src={three}
                      alt="rasm"
                      className="h-[178px] w-full mb-[8px]"
                    />
                    <img
                      src={second}
                      alt="rasm"
                      className="h-[178px] w-full mb-[10px]"
                    />
                  </div>
                </div>
                <div className="w-[650px] h-[367px] mr-[10px] flex items-center justify-between ">
                  <div className="w-[430px] h-[366px] rounded-[10px] border border-[#E5E2EE]">
                    <img
                      src={first}
                      alt="rasm"
                      className="h-[261px] w-full mb-[20px]"
                    />
                    <p className="text-[#202020] text-[16px] ml-[20px] mb-[2px] font-medium leading-[22.4px]">
                      Константин
                      <br /> Константинопольский
                    </p>
                    <p className="text-[#7A7687] text-[14px] ml-[20px] mb-[2px] font-normal leading-[22.4px]">
                      Основатель компании
                    </p>
                  </div>
                  <div className="w-[210px] h-[366px] ">
                    <img
                      src={three}
                      alt="rasm"
                      className="h-[178px] w-full mb-[8px]"
                    />
                    <img
                      src={second}
                      alt="rasm"
                      className="h-[178px] w-full mb-[10px]"
                    />
                  </div>
                </div>
                <div className="w-[650px] h-[367px] mr-[10px] flex items-center justify-between ">
                  <div className="w-[430px] h-[366px] rounded-[10px] border border-[#E5E2EE]">
                    <img
                      src={first}
                      alt="rasm"
                      className="h-[261px] w-full mb-[20px]"
                    />
                    <p className="text-[#202020] text-[16px] ml-[20px] mb-[2px] font-medium leading-[22.4px]">
                      Константин
                      <br /> Константинопольский
                    </p>
                    <p className="text-[#7A7687] text-[14px] ml-[20px] mb-[2px] font-normal leading-[22.4px]">
                      Основатель компании
                    </p>
                  </div>
                  <div className="w-[210px] h-[366px] ">
                    <img
                      src={three}
                      alt="rasm"
                      className="h-[178px] w-full mb-[8px]"
                    />
                    <img
                      src={second}
                      alt="rasm"
                      className="h-[178px] w-full mb-[10px]"
                    />
                  </div>
                </div>
                <div className="w-[650px] h-[367px] mr-[10px] flex items-center justify-between ">
                  <div className="w-[430px] h-[366px] rounded-[10px] border border-[#E5E2EE]">
                    <img
                      src={first}
                      alt="rasm"
                      className="h-[261px] w-full mb-[20px]"
                    />
                    <p className="text-[#202020] text-[16px] ml-[20px] mb-[2px] font-medium leading-[22.4px]">
                      Константин
                      <br /> Константинопольский
                    </p>
                    <p className="text-[#7A7687] text-[14px] ml-[20px] mb-[2px] font-normal leading-[22.4px]">
                      Основатель компании
                    </p>
                  </div>
                  <div className="w-[210px] h-[366px] ">
                    <img
                      src={three}
                      alt="rasm"
                      className="h-[178px] w-full mb-[8px]"
                    />
                    <img
                      src={second}
                      alt="rasm"
                      className="h-[178px] w-full mb-[10px]"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[650px] mt-[40px] flex items-center justify-between pr-[65px]">
              <div className="flex items-center gap-[10px]">
                <button
                  onClick={handlePrev}
                  disabled={slideCount === 0} // Boshlang'ich holatda back button ishlamaydi
                  className={`w-[41px] h-[41px] flex items-center justify-center rounded-[50%] border border-[#D5D1E1] ${
                    slideCount > 0
                      ? "hover:bg-slate-300"
                      : "bg-gray-300 cursor-not-allowed"
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
                      : "bg-gray-300 cursor-not-allowed"
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

export default Doctor;
