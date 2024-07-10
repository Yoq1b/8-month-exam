import React, { useState } from "react";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineAccessTime } from "react-icons/md";
import { SlLocationPin } from "react-icons/sl";
import { LuMail } from "react-icons/lu";
import trio from "/assets/trio_icon.png";

const Kontakt_hero = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [question, setQuestion] = useState("");
  const [errors, setErrors] = useState({});

  const handleOpenModal = () => {
    const newErrors = {};
    if (!name) newErrors.name = true;
    if (!phone) newErrors.phone = true;
    if (!email) newErrors.email = true;
    if (!question) newErrors.question = true;

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setIsOpen(true);
    }
  };

  const handleOKButtonClick = () => {
    setName("");
    setPhone("");
    setEmail("");
    setQuestion("");
    setIsOpen(false);
  };
  return (
    <>
      <div className="w-[1310px] m-auto">
        <h3 className="text-[#202020] mb-[40px] mt-[85px] text-[48px] font-medium">
          Контакты
        </h3>
        <div className="flex items-center justify-between">
          <div className="w-[650px]  p-[40px] rounded-[10px]  border border-[#E5E2EE] bg-white">
            <p className="text-[#202020] mb-[25px] text-[30px] font-medium">
              ООО Глобал Медикал Трейд
            </p>
            <div>
              <div className="flex items-center gap-[5px]">
                <SlLocationPin className="text-[#7A7687] text-[16px]" />
                <p className="text-[#7A7687]  text-[16px] font-medium">
                  Юридический адрес:
                </p>
              </div>
              <div className="flex items-center gap-[5px]">
                <SlLocationPin className="text-[#7A7687] opacity-0 text-[16px]" />
                <p className="text-[#202020]  text-[16px] font-medium">
                  Россия, г. Москва, ул. Докукина, 8, стр. 2
                </p>
              </div>
            </div>
            <div>
              <div className="flex mt-[15px] items-center gap-[5px]">
                <SlLocationPin className="text-[#7A7687] text-[16px]" />
                <p className="text-[#7A7687]  text-[16px] font-medium">
                  Фактический адрес:
                </p>
              </div>
              <div className="flex items-center gap-[5px]">
                <SlLocationPin className="text-[#7A7687] opacity-0 text-[16px]" />
                <p className="text-[#202020]  text-[16px] font-medium">
                  Россия, г. Москва, ул. Докукина, 8, стр. 2
                </p>
              </div>
            </div>
            <div>
              <div className="flex mt-[15px] items-center gap-[5px]">
                <MdOutlineAccessTime className="text-[#7A7687] text-[18px]" />
                <p className="text-[#7A7687]  text-[16px] font-medium">
                  Режим работы:
                </p>
              </div>
              <div className="flex items-center gap-[5px]">
                <SlLocationPin className="text-[#7A7687] opacity-0 text-[16px]" />
                <p className="text-[#202020]  text-[16px] font-medium">
                  Пн-Пт с 09:00-19:00
                  <br />
                  Сб-Вс - выходной
                </p>
              </div>
            </div>
            <p className="text-[#202020] mb-[25px] mt-[30px] text-[18px] font-medium">
              Звоните. Звонки по России бесплатны:
            </p>
            <div>
              <div className="flex mt-[15px] items-center gap-[5px]">
                <IoCallOutline className="text-[#7A7687] text-[18px]" />
                <p className="text-[#7A7687]  text-[16px] font-medium">
                  Телефоны:
                </p>
              </div>
              <div className="flex items-center gap-[5px]">
                <SlLocationPin className="text-[#7A7687] opacity-0 text-[16px]" />
                <p className="text-[#202020]  text-[16px] font-medium">
                  8-800-000-00-00 &nbsp;&nbsp; +7-000-000-00-00
                  &nbsp;&nbsp;&nbsp;&nbsp;+7-495-000-00-00
                </p>
              </div>
            </div>
            <div className="mb-[30px]">
              <div className="flex mt-[15px]  items-center gap-[5px]">
                <LuMail className="text-[#7A7687] text-[18px]" />
                <p className="text-[#7A7687]  text-[16px] font-medium">
                  Пишите:
                </p>
              </div>
              <div className="flex items-center gap-[5px]">
                <SlLocationPin className="text-[#7A7687] opacity-0 text-[16px]" />
                <p className="text-[#202020]  text-[16px] font-medium">
                  info@mail.ru
                </p>
              </div>
            </div>
            <div className="flex items-center  justify-between w-[432px]">
              <div>
                <p className="text-[#202020] mb-[25px] text-[18px] font-medium">
                  Реквизиты:
                </p>
                <div className="flex items-center gap-[30px]">
                  <div>
                    <p className="text-[#7A7687] text-[16px] font-medium leading-[22.4px]">
                      ИНН
                    </p>
                    <p className="text-[#202020] text-[16px] font-medium">
                      9717039181
                    </p>
                  </div>
                  <div>
                    <p className="text-[#7A7687] text-[16px] font-medium leading-[22.4px]">
                      ОГРН
                    </p>
                    <p className="text-[#202020] text-[16px] font-medium">
                      1167746796986
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <p className="text-[#202020] mb-[27px] text-[18px] font-medium">
                  Мы в соцсетях
                </p>
                <img src={trio} alt="rasm" className="w-[131px] h-[37px]" />
              </div>
            </div>
          </div>
          <div className="w-[650px] h-[672px] relative rounded-[10px] px-[40px] pt-[35px] bg-[#FFFFFF] border border-[#E5E2EE]">
            <h3 className="text-[#202020] mt-[10px] text-[30px] font-medium mb-[20px]">
              Бесплатная консультация
            </h3>
            <p className="text-[#7A7687] text-[16px] font-medium leading-[22.4px] mb-[35px]">
              Оставьте свои координаты и наш менеджер<br /> перезвонит вам через 10
              минут
            </p>
            <input
              type="text"
              placeholder="Ваше имя"
              className={`w-full h-[31px] mb-[25px] pb-[11px] border-b text-[#7A7687] text-[14px] outline-none ${
                errors.name ? "border-red-500 border" : "border-b-[#E5E2EE]"
              }`}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="number"
              placeholder="Ваш телефон"
              className={`w-full h-[31px] mb-[25px] pb-[11px] border-b text-[#7A7687] text-[14px] outline-none ${
                errors.phone ? "border-red-500 border" : "border-b-[#E5E2EE]"
              }`}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <input
              type="email"
              placeholder="Ваш email"
              className={`w-full h-[31px] mb-[25px] pb-[11px] border-b text-[#7A7687] text-[14px] outline-none ${
                errors.email ? "border-red-500 border" : "border-b-[#E5E2EE]"
              }`}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="relative w-full ">
              <textarea
                id="email"
                placeholder="Ваш вопрос"
                className={`w-full h-[116px] border-b text-[#7A7687] text-[14px] outline-none resize-none leading-tight ${
                  errors.question
                    ? "border-red-500 border"
                    : "border-b-[#E5E2EE]"
                }`}
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
              ></textarea>
            </div>
            <p
              className={`absolute bottom-[95px] left-[210px] text-[#7A7687] text-center text-[14px] ${
                errors.question ? "text-red-500" : "border-b-[#E5E2EE] hidden"
              }`}
            >
              Все поля должны быть заполнены!
            </p>
            <div className="flex mt-[40px] items-center justify-between pr-[20px]">
              <button
                onClick={handleOpenModal}
                className="w-[134px] h-[41px] rounded-[50px] bg-[#088269] text-[#F8F7F3] text-[16px] font-semibold hover:scale-105 duration-200 hover:bg-[#07745E]"
              >
                Отправить
              </button>
              <p className="text-[#7A7687] text-[12px] leading-[16.40px]">
                Нажимая «Отправить», я соглашаюсь c обработкой персональных
                <br />
                данных на условиях
                <span className="text-[#088269] hover:underline hover:cursor-pointer">
                  Политики конфиденциальности.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="w-[500px] h-[303px] rounded-[10px] bg-white px-[25px]">
            <div className="flex mt-[20px] items-center justify-between">
              <p className="text-[#202020] text-[18px] font-semibold">
                Запрос отправлен
              </p>
              <IoClose
                onClick={handleOKButtonClick}
                className="text-[22px] hover:cursor-pointer hover:scale-125 hover:text-red-500 hover:rotate-90 duration-300"
              />
            </div>
            <p className="text-[#7A7687] text-[16px] mt-[10px] font-medium opacity-80">
              Наши менеджеры скоро с Вами свяжутся.
            </p>
            <img
              src={True}
              alt="rasm"
              className="w-[63px] h-[63px] m-auto my-[35px]"
            />
            <button
              onClick={handleOKButtonClick}
              className="w-full h-[41px] rounded-[50px] bg-[#088269] text-[#F8F7F3] text-[16px] font-semibold hover:scale-105 duration-200 hover:bg-[#07745E]"
            >
              OK
            </button>
            <p className="text-[#7A7687] text-center text-[12px] mt-[10px] font-medium opacity-80">
              Проверьте свою электронную почту через 1 день
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Kontakt_hero;
