import React from "react";

const Pravila = () => {
  return (
    <>
      <div className="w-[1310px] m-auto my-[150px] flex items-start justify-between">
        <div>
          <h3 className="text-[#202020] mb-[25px] text-[30px] font-medium leading-[36px]">
            Правила получения
            <br /> товара в пункте выдачи
          </h3>
          <p className="text-[#202020]  text-[16px] font-medium leading-[22.4px]">
            Учитывая стремительное развитие мировых медицинских
            <br /> технологий, врачи в Российской Федерации и соседних странах
            <br /> столкнулись с вызовом, требующим обновления приборов.
            <br />
          </p>
        </div>
        <div className="w-[650px]">
          <div className="border-b border-t py-[25px] border-[#D5D1E1]">
            <p className="text-[#202020] mb-[15px] text-[18px] font-semibold leading-[25px]">
              Подготовить документы
            </p>
            <p className="text-[#7A7687]  text-[16px] font-semibold leading-[22.4px]">
              Предварительно ознакомиться с условиями выдачи грузов на сайте и
              подготовьте
              <br /> нужные документы
            </p>
          </div>
          <div className="border-b py-[25px] border-[#D5D1E1]">
            <p className="text-[#202020] mb-[15px] text-[18px] font-semibold leading-[25px]">
              Проверка упаковки
            </p>
            <p className="text-[#7A7687]  text-[16px] font-semibold leading-[22.4px]">
              При получении необходимо внимательно осмотреть упаковку груза на
              наличие
              <br /> механических повреждений и нарушений целостности упаковки
            </p>
          </div>
          <div className="py-[25px]">
            <p className="text-[#202020] mb-[15px] text-[18px] font-semibold leading-[25px]">
              Проверка товара
            </p>
            <p className="text-[#7A7687]  text-[16px] font-semibold leading-[22.4px]">
              Вскрыть каждую упаковку и проверите товар по количеству согласно
              накладной<br /> поставщика и на наличие повреждений товара внутри тары
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pravila;
