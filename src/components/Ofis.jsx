import React from "react";

const Ofis = () => {
  return (
    <div className="w-[1440px] m-auto my-[150px]">
      <div className="w-[1310px] m-auto">
        <div className="flex items-center justify-between mb-[10px]">
          <p className="text-[#202020] text-[30px] font-medium leading-[36px]">
            Вы сможете забрать оборудование
            <br />
            <span className="text-[#088269]">самостоятельно</span> из нашего
            офиса
          </p>
          <div className="flex items-center gap-[10px]">
            <div className="w-[320px] h-[139px] rounded-[10px] border p-[25px] bg-white border-[#E5E2EE]">
              <p className="text-[#202020] text-[18px] mb-[15px] font-semibold leading-[24.5px]">
                Контакты
              </p>
              <p className="text-[#7A7687] text-[16px] mb-[2px] font-medium leading-[22.4px]">
                +7 (000) 000-00-00
              </p>
              <p className="text-[#7A7687] text-[16px] font-medium leading-[22.4px]">
                info@mail.ru
              </p>
            </div>
            <div className="w-[320px] h-[139px] rounded-[10px] border p-[25px] bg-white border-[#E5E2EE]">
              <p className="text-[#202020] text-[18px] mb-[15px] font-semibold leading-[24.5px]">
                Режим работы
              </p>
              <p className="text-[#7A7687] text-[16px] mb-[2px] font-medium leading-[22.4px]">
                пн-пт: 09:00-19:00
              </p>
              <p className="text-[#7A7687] text-[16px] font-medium leading-[22.4px]">
                сб-вс: выходной
              </p>
            </div>
          </div>
        </div>
        <div className="relative w-full h-[390px] border-[2px]  border-[#E5E2EE] rounded-[10px]">
          <iframe
            src="https://yandex.com/map-widget/v1/?ll=69.2401%2C41.2995&z=12"
            width="100%"
            height="600"
            frameBorder="0"
            allowFullScreen
            className="rounded-[10px] w-full h-full"
          ></iframe>
          <button className="absolute right-[20px] bottom-[20px]  w-[155px] h-[41px] rounded-[50px] bg-[#088269] text-[#F8F7F3] text-[16px] font-semibold hover:scale-105 duration-200 hover:bg-[#07745E]">
            Пункт выдачи
          </button>
          <div className="absolute left-[20px] top-[20px]  w-[171px] h-[24px] flex items-center justify-center rounded-[50px] bg-white border border-[#E5E2EE]">
            <p className="text-[#202020] text-[10px] font-medium leading-[13.6px]">
              г. Москва, ул. Московская, д. 35
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ofis;
