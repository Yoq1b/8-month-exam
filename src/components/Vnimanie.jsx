import React from "react";

const Vnimanie = () => {
  return (
    <>
      <div className="w-[1310px] h-[264px] m-auto mt-[150px] bg-[#088269] p-[40px] rounded-[10px] flex items-start justify-between">
        <p className="text-[#F8F7F3] text-[30px] font-medium ">Внимание!</p>
        <div>
          <p className="text-[#F8F7F3] text-[16px] mb-[20px] font-medium leading-[22.4px]">
            Рассмотрение заявки на замену товара осуществляется в срок до 30
            дней
            <br /> со дня её регистрации согласно п. 1 ст. 12 Закона № 59-ФЗ,
            при условии
            <br /> предоставления документов, перечисленных в договоре.
          </p>
          <p className="text-[#F8F7F3] text-[16px] mb-[20px] font-medium leading-[22.4px]">
            Оформление гарантийного случая осуществляется согласно
            <br /> Гражданскому кодексу РФ, при условии предоставления
            документов,
            <br /> перечисленных в договоре и при наличии заявления с указанием
            <br /> причины возврата, оформленного надлежащим образом.
          </p>
        </div>
      </div>
    </>
  );
};

export default Vnimanie;
