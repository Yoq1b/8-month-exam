import React from "react";
import { RiEditLine } from "react-icons/ri";

const Dannie = () => {
  return (
    <>
      <div className="w-[1310px] mt-[150px] flex items-start justify-between">
        <p className="text-[#202020] text-[18px] font-semibold">
          Данные о плательщике
        </p>
        <div className="w-[980px] bg-white p-[25px] border border-[#E5E2EE] rounded-[10px]">
          <div className="flex mb-[60px] items-center justify-between">
            <div>
              <p className="text-[#202020] text-[18px] font-semibold">
                Название компании
              </p>
              <p className="text-[#202020] text-[16px] font-medium">
                ИНН 9717039181
              </p>
            </div>
            <RiEditLine className="text-[#07745E] text-[22px] hover:cursor-pointer hover:scale-110 duration-200" />
          </div>
          <div className="w-[705px] border ">
            <div className="flex w-full mb-[30px] items-center justify-between">
              <div>
                <p className="text-[#7A7687] text-[16px] font-medium">
                  Адрес доставки
                </p>
                <p className="text-[#202020] text-[16px] font-semibold">
                  Россия, г. Москва, ул. Докукина, 8, стр. 2
                </p>
              </div>
              <div>
                <p className="text-[#7A7687] text-[16px] font-medium">
                  Ваша должность
                </p>
                <p className="text-[#202020] text-[16px] font-semibold">
                  Менеджер по закупкам
                </p>
              </div>
            </div>
            <div className="flex w-full mb-[30px] items-center justify-between">
              <div>
                <p className="text-[#7A7687] text-[16px] font-medium">Сайт</p>
                <p className="text-[#202020] text-[16px] font-semibold">
                  global-mt.ru
                </p>
              </div>
              <div>
                <p className="text-[#7A7687] text-[16px] font-medium">
                  Тип организации
                </p>
                <p className="text-[#202020] text-[16px] font-semibold">
                  Юридическое лицо
                </p>
              </div>
            </div>
            <div>
              <p className="text-[#7A7687] text-[16px] font-medium">Email</p>
              <p className="text-[#202020] text-[16px] font-semibold">
                info@mail.ru
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-end mt-[10px]">
        <button className="w-[221px] h-[41px] rounded-[50px] hover:scale-105 ml-[15px] text-[14px] font-semibold text-white bg-[#088269] duration-200">
          Добавить плательщика
        </button>
      </div>
    </>
  );
};

export default Dannie;
