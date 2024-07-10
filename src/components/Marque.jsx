import React from "react";
import "../css/styles.css";
import Marquee from "react-fast-marquee";
import img169 from "/assets/img169.png";
import img196 from "/assets/img196.png";
import img146 from "/assets/img146.png";
import img173 from "/assets/img173.png";
import img197 from "/assets/img197.png";
const Marque = () => {
  return (
    <>
      <Marquee direction="left" behavior="alternate" speed="150">
        <div className="flex items-center gap-[10px]">
          <div className="w-[320px] h-[280px] ml-[10px] border border-[#d1d1d2] bg-[#f2f0f7] rounded-[10px]">
            <div className="w-full h-[196px] flex items-center justify-center rounded-tl-[10px] rounded-tr-[10px] bg-white">
              <img className="w-[169px] h-[104px]" src={img169} alt="rasm" />
            </div>
            <hr className="w-full border border-[#d1d1d2]" />
            <p className="text-[#202020] text-[16px] font-medium ml-[25px] mt-[20px]">
              НМИЦ онкологии им. Н.Н.
            </p>
          </div>
          <div className="w-[320px] h-[280px] border border-[#d1d1d2] bg-[#f2f0f7] rounded-[10px]">
            <div className="w-full h-[196px] flex items-center justify-center rounded-tl-[10px] rounded-tr-[10px] bg-white">
              <img className="w-[196px] h-[80px]" src={img196} alt="rasm" />
            </div>
            <hr className="w-full border border-[#d1d1d2]" />
            <p className="text-[#202020] text-[16px] font-medium ml-[25px] mt-[20px]">
              НМИЦ онкологии им. Н.Н. <br /> Блохина
            </p>
          </div>
          <div className="w-[320px] h-[280px] border border-[#d1d1d2] bg-[#f2f0f7] rounded-[10px]">
            <div className="w-full h-[196px] flex items-center justify-center rounded-tl-[10px] rounded-tr-[10px] bg-white">
              <img className="w-[146px] h-[146px]" src={img146} alt="rasm" />
            </div>
            <hr className="w-full border border-[#d1d1d2]" />
            <p className="text-[#202020] text-[16px] font-medium ml-[25px] mt-[20px]">
              НМИЦ онкологии им. Н.Н. <br /> Блохина
            </p>
          </div>
          <div className="w-[320px] h-[280px] border border-[#d1d1d2] bg-[#f2f0f7] rounded-[10px]">
            <div className="w-full h-[196px] flex items-center justify-center rounded-tl-[10px] rounded-tr-[10px] bg-white">
              <img className="w-[173px] h-[106px]" src={img173} alt="rasm" />
            </div>
            <hr className="w-full border border-[#d1d1d2]" />
            <p className="text-[#202020] text-[16px] font-medium ml-[25px] mt-[20px]">
              НМИЦ онкологии им. Н.Н. <br /> Блохина
            </p>
          </div>
          <div className="w-[320px] h-[280px] border border-[#d1d1d2] bg-[#f2f0f7] rounded-[10px]">
            <div className="w-full h-[196px] flex items-center justify-center rounded-tl-[10px] rounded-tr-[10px] bg-white">
              <img className="w-[197px] h-[60px]" src={img197} alt="rasm" />
            </div>
            <hr className="w-full border border-[#d1d1d2]" />
            <p className="text-[#202020] text-[16px] font-medium ml-[25px] mt-[20px]">
              НМИЦ онкологии им. Н.Н. <br /> Блохина
            </p>
          </div>
        </div>
      </Marquee>
    </>
  );
};

export default Marque;
