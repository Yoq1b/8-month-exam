import React from "react";
import herobg from "/assets/podklyuch.png";

const PodklyuchHero = () => {
  return (
    <>
      <div className="w-[1310px] m-auto mt-[19px] mb-[150px]">
        <h3 className="text-[#202020] font-medium mt-[85px] mb-[40px] text-[48px] leading-[52.8px]">
          Комплексное оснащение палаты
          <br /> реанимации и интенсивной терапии
        </h3>
        <img src={herobg} alt="hero_bg" className="w-full h-[390px]" />
        <div className="flex mt-[40px] items-start justify-between">
          <h3 className="text-[#202020] opacity-0 font-medium text-[48px] leading-[52.8px]">
            Глобал медикал трейд
          </h3>
          <div>
            <p className="text-[#202020] w-[650px] font-medium text-[16px] ">
              Учитывая стремительное развитие мировых медицинских технологий,
              врачи
              <br /> в Российской Федерации и соседних странах столкнулись
              с вызовом, требующим
              <br /> обновления приборов в различных направлениях, от установок
              компьютерной
              <br /> томографии до ультразвуковых сканеров и ЛОР комбайнов.
              Переход на полностью
              <br /> цифровую платформу при диагностике и лечении заболеваний
              также стал серьёзным испытанием для большинства больниц и частных
              клиник.
            </p>
            <p className="text-[#07745E] mt-[15px] hover:cursor-pointer hover:underline w-[650px]  font-medium text-[16px] ">
              Скачать каталог "Стандарты оснащения отделений"
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PodklyuchHero;
