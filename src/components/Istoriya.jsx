import React from "react";
import { IoIosArrowUp } from "react-icons/io";
import { RiEditLine } from "react-icons/ri";

const Istoriya = () => {
  return (
    <>
      <div className="w-[1310px] mt-[150px] flex items-start justify-between">
        <p className="text-[#202020] text-[18px] font-semibold">
          История заказов
        </p>
        <div className="w-[980px] bg-white p-[25px] border border-[#E5E2EE] rounded-[10px]">
          <div className="flex mb-[25px] items-center justify-between">
            <div>
              <p className="text-[#202020] text-[18px] font-semibold">
                Заказ № 3456-09 от 12 марта 2023, 2 товара на сумму 900 000 руб.
              </p>
              <div className="flex items-end gap-[10px]">
                <p className="text-[#7A7687] text-[16px] font-medium">
                  Статус:
                </p>
                <div className="w-[81px] h-[25px] flex items-center justify-center rounded-[50px] bg-[#FFE095]">
                  <p className="text-[#855E00] text-[14px] font-semibold">
                    В работе
                  </p>
                </div>
              </div>
            </div>
            <IoIosArrowUp className="text-[#202020] text-[18px] hover:cursor-pointer hover:scale-110 duration-200" />
          </div>
          <hr className="border border-[#E5E2EE] bg-[#E5E2EE]" />
          <div className="w-full mt-[25px] flex items-center justify-between">
            <div className="flex items-center gap-[40px]">
              <img
                src="https://s3-alpha-sig.figma.com/img/98d6/ce68/ca05465aa55ba84ace8005d1e27d304e?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GZo~eFrND4xxUReAurBleO9wSqE4oooXSWD~-gqzkFpR70VBx0xe8CPxERiJb1Xn2wPSbfpJZb-eePLa~Vg93Su6gExAIt9e82kVls4RzwIo6xouTv4BpHPURiEp-lAc4doDApb2I-F0MGfACgXFaWidBJnG7-jFhz0yasGBvFNr73ShcK841KqeCS7uf3C9y~vhjCOwfy3-eS~0oO2Jjtt0FITIBY2OolQb~AjqbEBmLCFS6beahcP~RZiHNzWBjNVI4s1f6nYNlDyww9I3CGavbA0KQJd5UsVLtbrsOVaxNZdJp5eC-h6C9Ts00gsOJr~UzeGCjuhvym0AVxoUCA__"
                alt="rasm"
                className="w-[64px] h-[64px]"
              />
              <p className="text-[#202020] text-[16px] font-medium">
                Анализатор мочи MIND UA-66
              </p>
            </div>
            <div className="flex items-center gap-[80px]">
              <p className="text-[#7A7687] text-[16px] font-medium">1 шт.</p>
              <p className="text-[#202020] text-[16px] font-medium">
                600 000 руб.
              </p>
            </div>
          </div>
          <div className="w-full mt-[25px] flex items-center justify-between">
            <div className="flex items-center gap-[40px]">
              <img
                src="https://s3-alpha-sig.figma.com/img/d2e6/71b1/8132204915c34ae4aa933a3947a30dfe?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=E0EI~UeSNV88n9fmNXVDccUvFX-Vu-SW7hrqwpnS~RSacEGckrYfDrbTyp8mUIri4UCjnUXSBjmpqqK6GDCsh6tfhsE4W9AZwU4X2MkqbPiOpz6F2pFsS60LkDHlpzgQ3l0EynModT4EizS0P3p~VndzDR9Bmd87Xlm0FjnL8Rr45XeUpmpVGgLwygzbwIg2xstnMO5kWePbfj8x2R7tvbx0UpACkobtBF1xCLIggVdHbxI3pYwwWwvp-snI9YK~8IbKxnjqfO3TSqOFgcPE9w1xgzfwxWtrLh7OI8Rviml4UHQ7czhdcTnaFfKLIaVXWXRSN~46HM2RABexQ25xEQ__"
                alt="rasm"
                className="w-[64px] h-[64px]"
              />
              <p className="text-[#202020] text-[16px] font-medium">
                УЗИ аппарат Chison Qbit5 New Matrix
              </p>
            </div>
            <div className="flex items-center gap-[80px]">
              <p className="text-[#7A7687] text-[16px] font-medium">1 шт.</p>
              <p className="text-[#202020] text-[16px] font-medium">
                300 000 руб.
              </p>
            </div>
          </div>
          <div className="w-full mt-[80px] flex items-center justify-end">
            <div className="flex items-center gap-[55px]">
              <p className="text-[#202020] text-[18px] font-medium">
                Товаров на сумму:
              </p>
              <p className="text-[#202020] text-[18px] font-medium">
                900 000 руб.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[1310px] mb-[150px] flex justify-end">
        <div className="w-[980px] bg-white mt-[10px] p-[25px] border border-[#E5E2EE] rounded-[10px]">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[#202020] text-[18px] font-semibold">
                Заказ № 3456-09 от 12 марта 2023, 2 товара на сумму 900 000 руб.
              </p>
              <div className="flex items-end gap-[10px]">
                <p className="text-[#7A7687] text-[16px] font-medium">
                  Статус:
                </p>
                <div className="w-[104px] h-[25px] flex items-center justify-center rounded-[50px] bg-[#E1EFE6]">
                  <p className="text-[#088269] text-[14px] font-semibold">
                    Доставлено
                  </p>
                </div>
              </div>
            </div>
            <IoIosArrowUp className="text-[#202020] rotate-180 text-[18px] hover:cursor-pointer hover:scale-110 duration-200" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Istoriya;
