import React from "react";

const Dostavka_loc = () => {
  return (
    <div className="w-[1310px] m-auto mt-[10px] mb-[150px]">
      <div className="relative w-full h-[390px] border-[2px] mb-[40px] border-[#E5E2EE] rounded-[10px]">
        <iframe
          src="https://yandex.com/map-widget/v1/?ll=69.2401%2C41.2995&z=12"
          width="100%"
          height="600"
          frameBorder="0"
          allowFullScreen
          className="rounded-[10px] w-full h-full"
        ></iframe>
        <button className="absolute right-[20px] bottom-[20px]  w-[198px] h-[41px] rounded-[50px] bg-[#088269] text-[#F8F7F3] text-[16px] font-semibold hover:scale-105 duration-200 hover:bg-[#07745E]">
          Построить маршрут
        </button>
      </div>
    </div>
  );
};

export default Dostavka_loc;
