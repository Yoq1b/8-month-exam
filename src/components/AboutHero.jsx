import React from "react";
import herobg from "/assets/hero_bg.png";

const AboutHero = () => {
  return (
    <>
      <div className="w-[1310px] m-auto mt-[19px] mb-[150px]">
        <img src={herobg} alt="hero_bg" className="w-full h-[456px]" />
        <div className="flex mt-[40px] items-start justify-between">
          <h3 className="text-[#202020] font-medium text-[48px] leading-[52.8px]">
            Глобал медикал трейд
          </h3>
          <div>
            <p className="text-[#202020] w-[650px]  font-medium text-[16px] ">
              Учитывая стремительное развитие мировых медицинских технологий,
              врачи в Российской Федерации и соседних странах столкнулись
              с вызовом, требующим обновления приборов в различных направлениях,
              от установок компьютерной томографии до ультразвуковых сканеров
              и ЛОР комбайнов. Переход на полностью цифровую платформу
              при диагностике и лечении заболеваний также стал серьёзным
              испытанием для большинства больниц и частных клиник.
            </p>
            <p className="text-[#202020] mt-[16px] w-[650px]  font-medium text-[16px] ">
              Компания ООО «Глобал Медикал Трейд» считает своим долгом оказать
              специалистам всю необходимую помощь в деле поставок медицинского
              оборудования. Наш каталог включает передовое оборудование
              от лучших производителей России, Европы, Азии и США.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutHero;