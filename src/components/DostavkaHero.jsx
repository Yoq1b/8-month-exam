import React from "react";

const DostavkaHero = () => {
  return (
    <>
      <div className="w-[1310px] m-auto">
        <h2 className="text-[#202020] mt-[90px] mb-[40px] text-[48px] font-medium leading-[52.8px]">
          Информация о доставке
        </h2>
        <div className="relative w-full h-[390px] border-[2px] mb-[40px] border-[#E5E2EE] rounded-[10px]">
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
        </div>
        <div className="w-full h-[135px] relative">
          <div className="absolute right-0">
            <p className="text-[#202020] font-medium text-[16px] leading-[22.4px]">
              Учитывая стремительное развитие мировых медицинских технологий,
              врачи
              <br /> в Российской Федерации и соседних странах столкнулись
              с вызовом, требующим
              <br /> обновления приборов в различных направлениях, от установок
              компьютерной
              <br /> томографии до ультразвуковых сканеров и ЛОР комбайнов.
              Переход на полностью
              <br /> цифровую платформу при диагностике и лечении заболеваний
              также стал
              <br /> серьёзным испытанием для большинства больниц и частных
              клиник.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DostavkaHero;
