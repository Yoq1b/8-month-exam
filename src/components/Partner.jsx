import React from "react";
import partnerimg from "/assets/partner.png";

const Partner = () => {
  return (
    <>
      <div className="w-[1440px] bg-[#088269] my-[150px]">
        <div className="w-[1310px] py-[80px] m-auto flex items-start justify-between">
          <div className="w-[600px] h-[345px]">
            <img src={partnerimg} alt="rasm" className="w-full h-full" />
          </div>
          <div className="w-[650px]">
            <p className="text-[#F8F7F3] text-[30px] font-medium leading-[36px]">
              Наши партнёры
            </p>
            <p className="text-[#F8F7F3] mt-[25px] text-[16px] font-normal leading-[22.4px]">
              Нашими партнёрами являются наиболее серьёзные игроки на мировом
              рынке профильного оборудования. Это позволяет нам наладить
              долгосрочное <br /> и успешное сотрудничество, добиться лучших
              цен для государственных <br /> учреждений здравоохранения,
              медицинских центров, лабораторий, а также ветеринарных клиник
              и кабинетов. Купить нужную вам технику по оптимальным ценам,
              выбрать подходящую модель устройства в рамках бюджета в нашей <br />
              компании окажется намного проще. Мы поддерживаем скидки и особые <br />
              предложения для наших партнёров, предлагаем оформление аппаратов
              в лизинг и готовы предоставить системы в рассрочку на выгодных
              условиях.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Partner;
