import React, { useState } from "react";
import { IoIosArrowForward, IoIosArrowUp } from "react-icons/io";
import { IoChevronBackOutline, IoSearchOutline } from "react-icons/io5";
import Checkbox from "./Checkbox";
import "../css/styles.css";
import { BsThreeDots } from "react-icons/bs";
import { GrFormNext } from "react-icons/gr";

const Proizvoditel = () => {
  const [sale, setSale] = useState(1);
  const [sale1, setSale1] = useState(1);

  const handlePrevious = () => {
    if (sale1 > 1) {
      setSale1(sale1 - 1);
      setSale(sale1 - 1);
    }
  };

  const handleNext = () => {
    if (sale1 < 3) {
      setSale1(sale1 + 1);
      setSale(sale1 + 1);
    }
  };
  return (
    <>
      <div className="w-[1310px] m-auto">
        <div className="flex items-start justify-between">
          <div>
            <div className="w-[320px] border rounded-[10px] px-[20px]">
              <div className="group flex items-center  hover:cursor-pointer justify-between">
                <p className="text-[#202020] text-[16px] font-medium my-[15px] leading-[22.4px]">
                  Направления
                </p>
                <IoIosArrowForward className="rotate-90" />
              </div>
            </div>
            <div className="w-[320px] h-[370px]  rounded-[10px] mt-[5px] pl-[20px] pr-[14px] border border-[#E5E2EE]">
              <div className="group flex items-center  justify-between">
                <p className="text-[#202020] text-[16px] font-medium my-[15px] leading-[22.4px]">
                  Страны
                </p>
                <IoIosArrowUp />
              </div>
              <hr className="mb-[8px]" />
              <div className="flex items-center justify-between pr-[14px] bg-white w-[291px] h-[39px] rounded-[50px] border border-[#E5E2EE]">
                <input
                  type="text"
                  placeholder="Поиск по стране"
                  className="outline-none pl-[21px] w-[250px] rounded-[50px] text-[#7A7687] text-[14px]"
                />
                <IoSearchOutline className="text-[#7A7687] hover:scale-110 duration-200 text-[17px] hover:cursor-pointer" />
              </div>
              <div className="scrollable-div overflow-y-scroll h-[244px] mt-[15px]">
                <div className="group flex items-center gap-[15px] mt-[15px] mb-[12px] hover:cursor-pointer ">
                  <Checkbox id="checkbox-1" />
                  <p className="text-[#202020]  text-[14px] font-normal leading-[19px]">
                    Австралия
                  </p>
                </div>
                <div className="group flex items-center gap-[15px] mb-[12px] hover:cursor-pointer ">
                  <Checkbox id="checkbox-2" />
                  <p className="text-[#202020]  text-[14px] font-normal leading-[19px]">
                    Австрия
                  </p>
                </div>
                <div className="group flex items-center gap-[15px] mb-[12px] hover:cursor-pointer ">
                  <Checkbox id="checkbox-3" />
                  <p className="text-[#202020]  text-[14px] font-normal leading-[19px]">
                    Беларусь
                  </p>
                </div>
                <div className="group flex items-center gap-[15px] mb-[12px] hover:cursor-pointer ">
                  <Checkbox id="checkbox-4" />
                  <p className="text-[#202020]  text-[14px] font-normal leading-[19px]">
                    Бельгия
                  </p>
                </div>
                <div className="group flex items-center gap-[15px] mb-[12px] hover:cursor-pointer ">
                  <Checkbox id="checkbox-5" />
                  <p className="text-[#202020]  text-[14px] font-normal leading-[19px]">
                    Великобритания
                  </p>
                </div>
                <div className="group flex items-center gap-[15px] mb-[12px] hover:cursor-pointer ">
                  <Checkbox id="checkbox-6" />
                  <p className="text-[#202020]  text-[14px] font-normal leading-[19px]">
                    Германия
                  </p>
                </div>
                <div className="group flex items-center gap-[15px] mb-[12px] hover:cursor-pointer ">
                  <Checkbox id="checkbox-7" />
                  <p className="text-[#202020]  text-[14px] font-normal leading-[19px]">
                    Испания
                  </p>
                </div>
                <div className="group flex items-center gap-[15px] mb-[12px] hover:cursor-pointer ">
                  <Checkbox id="checkbox-8" />
                  <p className="text-[#202020] text-[14px] font-normal leading-[19px]">
                    Индия
                  </p>
                </div>
                <div className="group flex items-center gap-[15px] mb-[12px] hover:cursor-pointer ">
                  <Checkbox id="checkbox-9" />
                  <p className="text-[#202020] text-[14px] font-normal leading-[19px]">
                    Индонезия
                  </p>
                </div>
                <div className="group flex items-center gap-[15px] mb-[12px] hover:cursor-pointer ">
                  <Checkbox id="checkbox-10" />
                  <p className="text-[#202020] text-[14px] font-normal leading-[19px]">
                    Япония
                  </p>
                </div>
                <div className="group flex items-center gap-[15px] mb-[12px] hover:cursor-pointer ">
                  <Checkbox id="checkbox-11" />
                  <p className="text-[#202020] text-[14px] font-normal leading-[19px]">
                    Ямайка
                  </p>
                </div>
                <div className="group flex items-center gap-[15px] mb-[12px] hover:cursor-pointer ">
                  <Checkbox id="checkbox-12" />
                  <p className="text-[#202020] text-[14px] font-normal leading-[19px]">
                    Кения
                  </p>
                </div>
                <div className="group flex items-center gap-[15px] mb-[12px] hover:cursor-pointer ">
                  <Checkbox id="checkbox-13" />
                  <p className="text-[#202020] text-[14px] font-normal leading-[19px]">
                    Казахстан
                  </p>
                </div>
                <div className="group flex items-center gap-[15px] mb-[12px] hover:cursor-pointer ">
                  <Checkbox id="checkbox-14" />
                  <p className="text-[#202020] text-[14px] font-normal leading-[19px]">
                    Латвия
                  </p>
                </div>
                <div className="group flex items-center gap-[15px] mb-[12px] hover:cursor-pointer ">
                  <Checkbox id="checkbox-15" />
                  <p className="text-[#202020] text-[14px] font-normal leading-[19px]">
                    Литва
                  </p>
                </div>
                <div className="group flex items-center gap-[15px] mb-[12px] hover:cursor-pointer ">
                  <Checkbox id="checkbox-16" />
                  <p className="text-[#202020] text-[14px] font-normal leading-[19px]">
                    Малайзия
                  </p>
                </div>
                <div className="group flex items-center gap-[15px] mb-[12px] hover:cursor-pointer ">
                  <Checkbox id="checkbox-17" />
                  <p className="text-[#202020] text-[14px] font-normal leading-[19px]">
                    Мексика
                  </p>
                </div>
              </div>
            </div>
            <div className="w-[320px] mt-[10px] flex items-center justify-between">
              <button className="w-[120px] h-[41px] rounded-[50px] text-[#202020] border border-[#D5D1E1] hover:border-[#088269] text-[16px] font-semibold hover:scale-105 duration-200 hover:text-[#f8f7f3] hover:bg-[#088269]">
                Сбросить
              </button>
              <button className="w-[190px] h-[41px] rounded-[50px] bg-[#088269] text-[#F8F7F3] border border-[#D5D1E1] hover:border-[#088269] text-[16px] font-semibold hover:scale-105 duration-200 hover:text-[#f8f7f3] hover:bg-[#088269]">
                Показать
              </button>
            </div>
          </div>
          <div className="flex w-[980px] flex-wrap items-center justify-between">
            <div className="w-[320px] h-[280px] mb-[10px]  border border-[#d1d1d2] bg-[#f2f0f7] rounded-[10px]">
              <div className="w-full h-[196px] flex items-center justify-center rounded-tl-[10px] rounded-tr-[10px] bg-white">
                <img
                  className="w-[217px] h-[102px]"
                  src="https://s3-alpha-sig.figma.com/img/40a3/9e49/81e4863f171c830a16afa5bd4155182f?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TMLaOUPB-i9OSh-kyWhyt77fVMZmHmPC8hX2QT5SIpEJI4vCnMm7DihZ3TgAtv-odVftQCLvTuc2o78vAfzpMevCWxhKtpSipFpXao2EhniUbufu02vb7KEU64Bjfi1~3HtjREO0Jhwmqk3xB2YwY4bX56vI3CQmMmR2J5zENImJbZAsy-uwtGwoXjr1HyGIT9NAItAIC250KM3McjsIbC6whaqbOg4gd9fqQSFCo-IdV7bX0fyYdRD-8MxN6UddHxusc1YUJB2mD-FQdQ6rpaoaOPhAHS4IGUVu2NVGcNUO~Fu2nSKN6XR2EeBkeCK0yoV8UZn-GAQsm3liemQ6iw__"
                  alt="rasm"
                />
              </div>
              <hr className="w-full border border-[#d1d1d2]" />
              <p className="text-[#202020] text-[16px] font-medium ml-[25px] mt-[20px]">
                НМИЦ онкологии им. Н.Н. <br /> Блохина
              </p>
            </div>
            <div className="w-[320px] h-[280px] mb-[10px]  border border-[#d1d1d2] bg-[#f2f0f7] rounded-[10px]">
              <div className="w-full h-[196px] flex items-center justify-center rounded-tl-[10px] rounded-tr-[10px] bg-white">
                <img
                  className="w-[217px] h-[102px]"
                  src="https://s3-alpha-sig.figma.com/img/40a3/9e49/81e4863f171c830a16afa5bd4155182f?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TMLaOUPB-i9OSh-kyWhyt77fVMZmHmPC8hX2QT5SIpEJI4vCnMm7DihZ3TgAtv-odVftQCLvTuc2o78vAfzpMevCWxhKtpSipFpXao2EhniUbufu02vb7KEU64Bjfi1~3HtjREO0Jhwmqk3xB2YwY4bX56vI3CQmMmR2J5zENImJbZAsy-uwtGwoXjr1HyGIT9NAItAIC250KM3McjsIbC6whaqbOg4gd9fqQSFCo-IdV7bX0fyYdRD-8MxN6UddHxusc1YUJB2mD-FQdQ6rpaoaOPhAHS4IGUVu2NVGcNUO~Fu2nSKN6XR2EeBkeCK0yoV8UZn-GAQsm3liemQ6iw__"
                  alt="rasm"
                />
              </div>
              <hr className="w-full border border-[#d1d1d2]" />
              <p className="text-[#202020] text-[16px] font-medium ml-[25px] mt-[20px]">
                НМИЦ онкологии им. Н.Н. <br /> Блохина
              </p>
            </div>
            <div className="w-[320px] h-[280px] mb-[10px]  border border-[#d1d1d2] bg-[#f2f0f7] rounded-[10px]">
              <div className="w-full h-[196px] flex items-center justify-center rounded-tl-[10px] rounded-tr-[10px] bg-white">
                <img
                  className="w-[217px] h-[102px]"
                  src="https://s3-alpha-sig.figma.com/img/40a3/9e49/81e4863f171c830a16afa5bd4155182f?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TMLaOUPB-i9OSh-kyWhyt77fVMZmHmPC8hX2QT5SIpEJI4vCnMm7DihZ3TgAtv-odVftQCLvTuc2o78vAfzpMevCWxhKtpSipFpXao2EhniUbufu02vb7KEU64Bjfi1~3HtjREO0Jhwmqk3xB2YwY4bX56vI3CQmMmR2J5zENImJbZAsy-uwtGwoXjr1HyGIT9NAItAIC250KM3McjsIbC6whaqbOg4gd9fqQSFCo-IdV7bX0fyYdRD-8MxN6UddHxusc1YUJB2mD-FQdQ6rpaoaOPhAHS4IGUVu2NVGcNUO~Fu2nSKN6XR2EeBkeCK0yoV8UZn-GAQsm3liemQ6iw__"
                  alt="rasm"
                />
              </div>
              <hr className="w-full border border-[#d1d1d2]" />
              <p className="text-[#202020] text-[16px] font-medium ml-[25px] mt-[20px]">
                НМИЦ онкологии им. Н.Н. <br /> Блохина
              </p>
            </div>
            <div className="w-[320px] h-[280px] mb-[10px]  border border-[#d1d1d2] bg-[#f2f0f7] rounded-[10px]">
              <div className="w-full h-[196px] flex items-center justify-center rounded-tl-[10px] rounded-tr-[10px] bg-white">
                <img
                  className="w-[217px] h-[102px]"
                  src="https://s3-alpha-sig.figma.com/img/40a3/9e49/81e4863f171c830a16afa5bd4155182f?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TMLaOUPB-i9OSh-kyWhyt77fVMZmHmPC8hX2QT5SIpEJI4vCnMm7DihZ3TgAtv-odVftQCLvTuc2o78vAfzpMevCWxhKtpSipFpXao2EhniUbufu02vb7KEU64Bjfi1~3HtjREO0Jhwmqk3xB2YwY4bX56vI3CQmMmR2J5zENImJbZAsy-uwtGwoXjr1HyGIT9NAItAIC250KM3McjsIbC6whaqbOg4gd9fqQSFCo-IdV7bX0fyYdRD-8MxN6UddHxusc1YUJB2mD-FQdQ6rpaoaOPhAHS4IGUVu2NVGcNUO~Fu2nSKN6XR2EeBkeCK0yoV8UZn-GAQsm3liemQ6iw__"
                  alt="rasm"
                />
              </div>
              <hr className="w-full border border-[#d1d1d2]" />
              <p className="text-[#202020] text-[16px] font-medium ml-[25px] mt-[20px]">
                НМИЦ онкологии им. Н.Н. <br /> Блохина
              </p>
            </div>
            <div className="w-[320px] h-[280px] mb-[10px]  border border-[#d1d1d2] bg-[#f2f0f7] rounded-[10px]">
              <div className="w-full h-[196px] flex items-center justify-center rounded-tl-[10px] rounded-tr-[10px] bg-white">
                <img
                  className="w-[217px] h-[102px]"
                  src="https://s3-alpha-sig.figma.com/img/40a3/9e49/81e4863f171c830a16afa5bd4155182f?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TMLaOUPB-i9OSh-kyWhyt77fVMZmHmPC8hX2QT5SIpEJI4vCnMm7DihZ3TgAtv-odVftQCLvTuc2o78vAfzpMevCWxhKtpSipFpXao2EhniUbufu02vb7KEU64Bjfi1~3HtjREO0Jhwmqk3xB2YwY4bX56vI3CQmMmR2J5zENImJbZAsy-uwtGwoXjr1HyGIT9NAItAIC250KM3McjsIbC6whaqbOg4gd9fqQSFCo-IdV7bX0fyYdRD-8MxN6UddHxusc1YUJB2mD-FQdQ6rpaoaOPhAHS4IGUVu2NVGcNUO~Fu2nSKN6XR2EeBkeCK0yoV8UZn-GAQsm3liemQ6iw__"
                  alt="rasm"
                />
              </div>
              <hr className="w-full border border-[#d1d1d2]" />
              <p className="text-[#202020] text-[16px] font-medium ml-[25px] mt-[20px]">
                НМИЦ онкологии им. Н.Н. <br /> Блохина
              </p>
            </div>
            <div className="w-[320px] h-[280px] mb-[10px]  border border-[#d1d1d2] bg-[#f2f0f7] rounded-[10px]">
              <div className="w-full h-[196px] flex items-center justify-center rounded-tl-[10px] rounded-tr-[10px] bg-white">
                <img
                  className="w-[217px] h-[102px]"
                  src="https://s3-alpha-sig.figma.com/img/40a3/9e49/81e4863f171c830a16afa5bd4155182f?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TMLaOUPB-i9OSh-kyWhyt77fVMZmHmPC8hX2QT5SIpEJI4vCnMm7DihZ3TgAtv-odVftQCLvTuc2o78vAfzpMevCWxhKtpSipFpXao2EhniUbufu02vb7KEU64Bjfi1~3HtjREO0Jhwmqk3xB2YwY4bX56vI3CQmMmR2J5zENImJbZAsy-uwtGwoXjr1HyGIT9NAItAIC250KM3McjsIbC6whaqbOg4gd9fqQSFCo-IdV7bX0fyYdRD-8MxN6UddHxusc1YUJB2mD-FQdQ6rpaoaOPhAHS4IGUVu2NVGcNUO~Fu2nSKN6XR2EeBkeCK0yoV8UZn-GAQsm3liemQ6iw__"
                  alt="rasm"
                />
              </div>
              <hr className="w-full border border-[#d1d1d2]" />
              <p className="text-[#202020] text-[16px] font-medium ml-[25px] mt-[20px]">
                НМИЦ онкологии им. Н.Н. <br /> Блохина
              </p>
            </div>
            <div className="w-[320px] h-[280px] mb-[10px]  border border-[#d1d1d2] bg-[#f2f0f7] rounded-[10px]">
              <div className="w-full h-[196px] flex items-center justify-center rounded-tl-[10px] rounded-tr-[10px] bg-white">
                <img
                  className="w-[217px] h-[102px]"
                  src="https://s3-alpha-sig.figma.com/img/40a3/9e49/81e4863f171c830a16afa5bd4155182f?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TMLaOUPB-i9OSh-kyWhyt77fVMZmHmPC8hX2QT5SIpEJI4vCnMm7DihZ3TgAtv-odVftQCLvTuc2o78vAfzpMevCWxhKtpSipFpXao2EhniUbufu02vb7KEU64Bjfi1~3HtjREO0Jhwmqk3xB2YwY4bX56vI3CQmMmR2J5zENImJbZAsy-uwtGwoXjr1HyGIT9NAItAIC250KM3McjsIbC6whaqbOg4gd9fqQSFCo-IdV7bX0fyYdRD-8MxN6UddHxusc1YUJB2mD-FQdQ6rpaoaOPhAHS4IGUVu2NVGcNUO~Fu2nSKN6XR2EeBkeCK0yoV8UZn-GAQsm3liemQ6iw__"
                  alt="rasm"
                />
              </div>
              <hr className="w-full border border-[#d1d1d2]" />
              <p className="text-[#202020] text-[16px] font-medium ml-[25px] mt-[20px]">
                НМИЦ онкологии им. Н.Н. <br /> Блохина
              </p>
            </div>
            <div className="w-[320px] h-[280px] mb-[10px]  border border-[#d1d1d2] bg-[#f2f0f7] rounded-[10px]">
              <div className="w-full h-[196px] flex items-center justify-center rounded-tl-[10px] rounded-tr-[10px] bg-white">
                <img
                  className="w-[217px] h-[102px]"
                  src="https://s3-alpha-sig.figma.com/img/40a3/9e49/81e4863f171c830a16afa5bd4155182f?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TMLaOUPB-i9OSh-kyWhyt77fVMZmHmPC8hX2QT5SIpEJI4vCnMm7DihZ3TgAtv-odVftQCLvTuc2o78vAfzpMevCWxhKtpSipFpXao2EhniUbufu02vb7KEU64Bjfi1~3HtjREO0Jhwmqk3xB2YwY4bX56vI3CQmMmR2J5zENImJbZAsy-uwtGwoXjr1HyGIT9NAItAIC250KM3McjsIbC6whaqbOg4gd9fqQSFCo-IdV7bX0fyYdRD-8MxN6UddHxusc1YUJB2mD-FQdQ6rpaoaOPhAHS4IGUVu2NVGcNUO~Fu2nSKN6XR2EeBkeCK0yoV8UZn-GAQsm3liemQ6iw__"
                  alt="rasm"
                />
              </div>
              <hr className="w-full border border-[#d1d1d2]" />
              <p className="text-[#202020] text-[16px] font-medium ml-[25px] mt-[20px]">
                НМИЦ онкологии им. Н.Н. <br /> Блохина
              </p>
            </div>
            <div className="w-[320px] h-[280px] mb-[10px]  border border-[#d1d1d2] bg-[#f2f0f7] rounded-[10px]">
              <div className="w-full h-[196px] flex items-center justify-center rounded-tl-[10px] rounded-tr-[10px] bg-white">
                <img
                  className="w-[217px] h-[102px]"
                  src="https://s3-alpha-sig.figma.com/img/40a3/9e49/81e4863f171c830a16afa5bd4155182f?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TMLaOUPB-i9OSh-kyWhyt77fVMZmHmPC8hX2QT5SIpEJI4vCnMm7DihZ3TgAtv-odVftQCLvTuc2o78vAfzpMevCWxhKtpSipFpXao2EhniUbufu02vb7KEU64Bjfi1~3HtjREO0Jhwmqk3xB2YwY4bX56vI3CQmMmR2J5zENImJbZAsy-uwtGwoXjr1HyGIT9NAItAIC250KM3McjsIbC6whaqbOg4gd9fqQSFCo-IdV7bX0fyYdRD-8MxN6UddHxusc1YUJB2mD-FQdQ6rpaoaOPhAHS4IGUVu2NVGcNUO~Fu2nSKN6XR2EeBkeCK0yoV8UZn-GAQsm3liemQ6iw__"
                  alt="rasm"
                />
              </div>
              <hr className="w-full border border-[#d1d1d2]" />
              <p className="text-[#202020] text-[16px] font-medium ml-[25px] mt-[20px]">
                НМИЦ онкологии им. Н.Н. <br /> Блохина
              </p>
            </div>
            <div className="w-[320px] h-[280px] mb-[10px]  border border-[#d1d1d2] bg-[#f2f0f7] rounded-[10px]">
              <div className="w-full h-[196px] flex items-center justify-center rounded-tl-[10px] rounded-tr-[10px] bg-white">
                <img
                  className="w-[217px] h-[102px]"
                  src="https://s3-alpha-sig.figma.com/img/40a3/9e49/81e4863f171c830a16afa5bd4155182f?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TMLaOUPB-i9OSh-kyWhyt77fVMZmHmPC8hX2QT5SIpEJI4vCnMm7DihZ3TgAtv-odVftQCLvTuc2o78vAfzpMevCWxhKtpSipFpXao2EhniUbufu02vb7KEU64Bjfi1~3HtjREO0Jhwmqk3xB2YwY4bX56vI3CQmMmR2J5zENImJbZAsy-uwtGwoXjr1HyGIT9NAItAIC250KM3McjsIbC6whaqbOg4gd9fqQSFCo-IdV7bX0fyYdRD-8MxN6UddHxusc1YUJB2mD-FQdQ6rpaoaOPhAHS4IGUVu2NVGcNUO~Fu2nSKN6XR2EeBkeCK0yoV8UZn-GAQsm3liemQ6iw__"
                  alt="rasm"
                />
              </div>
              <hr className="w-full border border-[#d1d1d2]" />
              <p className="text-[#202020] text-[16px] font-medium ml-[25px] mt-[20px]">
                НМИЦ онкологии им. Н.Н. <br /> Блохина
              </p>
            </div>
            <div className="w-[320px] h-[280px] mb-[10px]  border border-[#d1d1d2] bg-[#f2f0f7] rounded-[10px]">
              <div className="w-full h-[196px] flex items-center justify-center rounded-tl-[10px] rounded-tr-[10px] bg-white">
                <img
                  className="w-[217px] h-[102px]"
                  src="https://s3-alpha-sig.figma.com/img/40a3/9e49/81e4863f171c830a16afa5bd4155182f?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TMLaOUPB-i9OSh-kyWhyt77fVMZmHmPC8hX2QT5SIpEJI4vCnMm7DihZ3TgAtv-odVftQCLvTuc2o78vAfzpMevCWxhKtpSipFpXao2EhniUbufu02vb7KEU64Bjfi1~3HtjREO0Jhwmqk3xB2YwY4bX56vI3CQmMmR2J5zENImJbZAsy-uwtGwoXjr1HyGIT9NAItAIC250KM3McjsIbC6whaqbOg4gd9fqQSFCo-IdV7bX0fyYdRD-8MxN6UddHxusc1YUJB2mD-FQdQ6rpaoaOPhAHS4IGUVu2NVGcNUO~Fu2nSKN6XR2EeBkeCK0yoV8UZn-GAQsm3liemQ6iw__"
                  alt="rasm"
                />
              </div>
              <hr className="w-full border border-[#d1d1d2]" />
              <p className="text-[#202020] text-[16px] font-medium ml-[25px] mt-[20px]">
                НМИЦ онкологии им. Н.Н. <br /> Блохина
              </p>
            </div>
            <div className="w-[320px] h-[280px] mb-[10px]  border border-[#d1d1d2] bg-[#f2f0f7] rounded-[10px]">
              <div className="w-full h-[196px] flex items-center justify-center rounded-tl-[10px] rounded-tr-[10px] bg-white">
                <img
                  className="w-[217px] h-[102px]"
                  src="https://s3-alpha-sig.figma.com/img/40a3/9e49/81e4863f171c830a16afa5bd4155182f?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TMLaOUPB-i9OSh-kyWhyt77fVMZmHmPC8hX2QT5SIpEJI4vCnMm7DihZ3TgAtv-odVftQCLvTuc2o78vAfzpMevCWxhKtpSipFpXao2EhniUbufu02vb7KEU64Bjfi1~3HtjREO0Jhwmqk3xB2YwY4bX56vI3CQmMmR2J5zENImJbZAsy-uwtGwoXjr1HyGIT9NAItAIC250KM3McjsIbC6whaqbOg4gd9fqQSFCo-IdV7bX0fyYdRD-8MxN6UddHxusc1YUJB2mD-FQdQ6rpaoaOPhAHS4IGUVu2NVGcNUO~Fu2nSKN6XR2EeBkeCK0yoV8UZn-GAQsm3liemQ6iw__"
                  alt="rasm"
                />
              </div>
              <hr className="w-full border border-[#d1d1d2]" />
              <p className="text-[#202020] text-[16px] font-medium ml-[25px] mt-[20px]">
                НМИЦ онкологии им. Н.Н. <br /> Блохина
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center w-full items-center gap-[10px] cursor-pointer">
          <div className="flex items-center gap-[5px]">
            <p
              className={`w-[35px] h-[35px] bg-white flex items-center justify-center border rounded-[8px] hover:bg-[#088269] hover:text-white cursor-pointer ${
                sale1 === 1 ? "opacity-50 bg-white cursor-not-allowed" : ""
              }`}
              onClick={handlePrevious}
            >
              <IoChevronBackOutline />
            </p>

            {[1, 2, 3].map((num) => (
              <p
                key={num}
                onClick={() => {
                  setSale1(num);
                  setSale(num);
                }}
                className={
                  sale1 === num
                    ? "w-[35px] h-[35px] flex items-center font-bold justify-center border rounded-[8px] bg-[#088269] text-white cursor-pointer"
                    : "w-[35px] h-[35px] hover:bg-slate-200 bg-white flex items-center justify-center border border-[#E5E5E5] rounded-[8px] cursor-pointer"
                }
              >
                {num}
              </p>
            ))}
            <p className="w-[35px] h-[35px] flex bg-white items-center justify-center  rounded-[8px] hover:bg-[#088269] hover:text-white cursor-pointer">
              <BsThreeDots />
            </p>
            <p
              className={`w-[35px] h-[35px] flex items-center bg-white justify-center border rounded-[8px] hover:bg-[#088269] hover:text-white cursor-pointer ${
                sale1 === 3 ? "opacity-50 bg-white  cursor-not-allowed" : ""
              }`}
              onClick={handleNext}
            >
              <GrFormNext />
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Proizvoditel;
