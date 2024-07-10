import React from "react";
import Data from "../db/Uslugi.json";

const Uslugi_cards = () => {
  return (
    <>
      <div className="w-[1310px] m-auto mb-[150px]">
        <h3 className="text-[#202020] mb-[40px] text-[48px] font-medium leading-[52.8px]">
          Услуги
        </h3>
        <div className="flex items-center justify-between">
          <div>
            {Data.slice(0, 4).map((item) => (
              <div
                key={item.id}
                className="w-[650px] h-[350px] mb-[10px] rounded-[10px] border border-[#E5E2EE] pl-[25px] flex justify-between"
              >
                <div className="flex flex-col justify-between">
                  <div>
                    <p className="text-[#202020] w-[323px] mt-[20px] mb-[15px] text-[18px] font-semibold">
                      {item.name}
                    </p>
                    <p className="text-[#7A7687] mb-[5px] text-[12px] font-normal">
                      Описание услуги
                    </p>
                    <p className="text-[#7A7687]   text-[16px] leading-[22.4px] font-medium">
                      Также как постоянное информационно-
                      <br />
                      пропагандистское обеспечение нашей <br /> деятельности
                      требует определения и<br /> уточнения распределения
                      внутренних
                      <br /> резервов и ресурсов.
                    </p>
                  </div>
                  <button className="w-[132px] mb-[25px] h-[41px] hover:bg-[#088269] hover:text-white duration-200 hover:scale-105 rounded-[50px] border border-[#D5D1E1] text-[#088269] text-[14px] font-semibold">
                    Заказать
                  </button>
                </div>
                <img
                  src={item.image}
                  alt="rasm"
                  className="h-full w-[265px] object-cover rounded-tr-[10px] rounded-br-[10px]"
                />
              </div>
            ))}
          </div>
          <div>
            {Data.slice(4, 8).map((item) => (
              <div
                key={item.id}
                className="w-[650px] h-[350px] mb-[10px] rounded-[10px] border border-[#E5E2EE] pl-[25px] flex justify-between"
              >
                <div className="flex flex-col justify-between">
                  <div>
                    <p className="text-[#202020]  w-[300px] mt-[20px] mb-[15px] text-[18px] font-semibold">
                      {item.name}
                    </p>
                    <p className="text-[#7A7687] mb-[5px] text-[12px] font-normal">
                      Описание услуги
                    </p>
                    <p className="text-[#7A7687]   text-[16px] leading-[22.4px] font-medium">
                      Также как постоянное информационно-
                      <br />
                      пропагандистское обеспечение нашей <br /> деятельности
                      требует определения и<br /> уточнения распределения
                      внутренних
                      <br /> резервов и ресурсов.
                    </p>
                  </div>
                  <button className="w-[132px] mb-[25px] h-[41px] hover:bg-[#088269] hover:text-white duration-200 hover:scale-105 rounded-[50px] border border-[#D5D1E1] text-[#088269] text-[14px] font-semibold">
                    Заказать
                  </button>
                </div>
                <img
                  src={item.image}
                  alt="rasm"
                  className="h-full w-[265px] object-cover rounded-tr-[10px] rounded-br-[10px]"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Uslugi_cards;
