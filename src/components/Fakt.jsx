import React from "react";

const Fakt = () => {
  return (
    <>
      <div className="w-[1310px] m-auto">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-[#202020] mb-[25px] font-medium text-[30px] leading-[36px]">
              Цифры и факты
            </h3>
            <p className="text-[#7A7687] font-medium text-[16px] leading-[22.4px]">
              Мы работаем на результат и продаём
              <br /> только качественную продукцию
            </p>
          </div>
          <div className="w-[650px]">
            <div className="py-[20px] border-b-[2px] border-b-[#D5D1E1] flex items-center">
              <p className="text-[#088269] font-medium text-[48px] leading-[52.8px]">
                7 лет
              </p>
              <p className="text-[#202020] ml-[147px] font-medium text-[16px] leading-[22.4px]">
                на рынке
              </p>
            </div>
            <div className="py-[20px] border-b-[2px] border-b-[#D5D1E1] flex items-center">
              <p className="text-[#088269] font-medium text-[48px] leading-[52.8px]">
                964+
              </p>
              <p className="text-[#202020] ml-[143px] font-medium text-[16px] leading-[22.4px]">
                оригинальной продукции со всего мира
              </p>
            </div>
            <div className="py-[20px] border-b-[2px] border-b-[#D5D1E1] flex items-center">
              <p className="text-[#088269] font-medium text-[48px] leading-[52.8px]">
                23+
              </p>
              <p className="text-[#202020] ml-[170px] font-medium text-[16px] leading-[22.4px]">
                международных сертификатов качества
              </p>
            </div>
            <div className="py-[20px]  flex items-center">
              <p className="text-[#088269] font-medium text-[48px] leading-[52.8px]">
                2452+
              </p>
              <p className="text-[#202020] ml-[115px] font-medium text-[16px] leading-[22.4px]">
                товаров всегда в наличии
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Fakt;
