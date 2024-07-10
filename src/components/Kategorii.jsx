import React, { useContext } from "react";
import { Data } from "../db/data";
import { ProductContext, ShopContext } from "../App";
import { NavLink } from "react-router-dom";

const Kategorii = () => {
  const { shop, setShop, addToCart } = useContext(ShopContext);

  return (
    <>
      <div className="w-[1440px] m-auto mt-[130px]">
        <div className="w-[1310px] m-auto">
          <div className="flex items-center mb-[40px] justify-between">
            <h3 className="text-[#202020] text-[30px] font-medium leading-[36px]">
              Популярные категории
            </h3>
            <NavLink to="/katalog">
              <button className="w-[160px] h-[41px] rounded-[50px] hover:scale-105 duration-200 bg-[#088269] text-[#F8F7F3] border border-[#D5D1E1] text-[16px] font-semibold hover:text-[#f8f7f3] hover:bg-[#088269]">
                Все категории
              </button>
            </NavLink>
          </div>
          <div className="w-full flex items-center justify-between">
            <div className="w-[49.7%] flex items-center justify-between">
              <div>
                {Data.slice(1, 2).map((item) => {
                  return (
                    <div
                      key={item.id}
                      className="w-[320px] h-[304px] mb-[10px]  rounded-[10px] border  border-[#E5E2EE] bg-[#f5f5f6]"
                    >
                      <div className="w-full h-[220px] bg-white  rounded-tl-[10px] rounded-tr-[10px] flex items-center justify-center">
                        <NavLink to="/stranitsa">
                          <img
                            onClick={() => {
                              setShop([item.id]);
                            }}
                            src={item.image}
                            alt="rasm"
                            className="w-[207px] h-[190px] "
                          />
                        </NavLink>
                      </div>
                      <hr />
                      <p className="text-[#202020] w-[248px] ml-[25px] mt-[15px] font-medium text-[16px] leading-[22.4px]">
                        {item.name}
                      </p>
                    </div>
                  );
                })}
                {Data.slice(3, 4).map((item) => {
                  return (
                    <div
                      key={item.id}
                      className="w-[320px] h-[304px] rounded-[10px] border border-[#E5E2EE] bg-[#f5f5f6]"
                    >
                      <div className="w-full mt-[1px] h-[220px] flex items-center justify-center rounded-tl-[10px] rounded-tr-[10px] bg-white">
                        <NavLink to="/stranitsa">
                          <img
                            onClick={() => {
                              setShop([item.id]);
                            }}
                            src={item.image}
                            alt="rasm"
                            className="w-[156px] h-[175px]  "
                          />
                        </NavLink>
                        <hr />
                      </div>
                      <p className="text-[#202020] w-[248px] ml-[25px] mt-[15px] font-medium text-[16px] leading-[22.4px]">
                        {item.name}
                      </p>
                    </div>
                  );
                })}
              </div>
              <div>
                {Data.slice(4, 5).map((item) => {
                  return (
                    <div
                      key={item.id}
                      className="w-[320px] h-[618px] rounded-[10px] border border-[#E5E2EE] bg-[#f5f5f6]"
                    >
                      <div className="w-full mt-[1px] h-[534px] flex items-center justify-center rounded-tl-[10px] rounded-tr-[10px] bg-white">
                        <NavLink to="/stranitsa">
                          <img
                            onClick={() => {
                              setShop([item.id]);
                            }}
                            src={item.image}
                            alt="rasm"
                            className="w-[124px] h-[408px] scale-125 "
                          />
                        </NavLink>
                      </div>
                      <hr />
                      <p className="text-[#202020] w-[248px] ml-[25px] mt-[15px] font-medium text-[16px] leading-[22.4px]">
                        {item.name}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="w-[49.7%] flex items-center justify-between flex-wrap">
              {Data.slice(5, 6).map((item) => {
                return (
                  <div
                    key={item.id}
                    className="w-[320px] mb-[10px] h-[304px] rounded-[10px] border border-[#E5E2EE] bg-[#f5f5f6]"
                  >
                    <div className="w-full mt-[1px] h-[220px] flex items-center justify-center rounded-tl-[10px] rounded-tr-[10px] bg-white">
                      <NavLink to="/stranitsa">
                        <img
                          onClick={() => {
                            setShop([item.id]);
                          }}
                          src={item.image}
                          alt="rasm"
                          className="w-[170px]  h-[201px]"
                        />
                      </NavLink>
                    </div>
                    <hr />
                    <p className="text-[#202020] w-[248px] ml-[25px] mt-[15px] font-medium text-[16px] leading-[22.4px]">
                      {item.name}
                    </p>
                  </div>
                );
              })}
              {Data.slice(2, 3).map((item) => {
                return (
                  <div
                    key={item.id}
                    className="w-[320px] mb-[10px] h-[304px] rounded-[10px] border border-[#E5E2EE] bg-[#f5f5f6]"
                  >
                    <div className="w-full mt-[1px] h-[220px] flex items-center justify-center rounded-tl-[10px] rounded-tr-[10px] bg-white">
                      <NavLink to="/stranitsa">
                        <img
                          onClick={() => {
                            setShop([item.id]);
                          }}
                          src={item.image}
                          alt="rasm"
                          className="w-[172px] h-[172px]  "
                        />
                      </NavLink>
                    </div>
                    <hr />
                    <p className="text-[#202020] w-[184px] ml-[25px] mt-[15px] font-medium text-[16px] leading-[22.4px]">
                      {item.name}
                    </p>
                  </div>
                );
              })}
              {Data.slice(0, 1).map((item) => {
                return (
                  <div
                    key={item.id}
                    className="w-[320px] h-[304px] rounded-[10px] border border-[#E5E2EE] bg-[#f5f5f6]"
                  >
                    <div className="w-full mt-[1px] h-[220px] flex items-center justify-center rounded-tl-[10px] rounded-tr-[10px] bg-white">
                      <NavLink to="/stranitsa">
                        <img
                          onClick={() => {
                            setShop([item.id]);
                          }}
                          src={item.image}
                          alt="rasm"
                          className="w-[173px] h-[173px]  "
                        />
                      </NavLink>
                    </div>
                    <hr />
                    <p className="text-[#202020] w-[184px] ml-[25px] mt-[15px] font-medium text-[16px] leading-[22.4px]">
                      {item.name}
                    </p>
                  </div>
                );
              })}
              {Data.slice(4, 5).map((item) => {
                return (
                  <div
                    key={item.id}
                    className="w-[320px] h-[304px] rounded-[10px] border border-[#E5E2EE] bg-[#f5f5f6]"
                  >
                    <div className="w-full mt-[1px] h-[220px] flex items-center justify-center rounded-tl-[10px] rounded-tr-[10px] bg-white">
                      <NavLink to="/stranitsa">
                        <img
                          onClick={() => {
                            setShop([item.id]);
                          }}
                          src={item.image}
                          alt="rasm"
                          className="w-[90px] h-[223px]  -rotate-90"
                        />
                      </NavLink>
                    </div>
                    <hr />
                    <p className="text-[#202020] w-[184px] ml-[25px] mt-[15px] font-medium text-[16px] leading-[22.4px]">
                      {item.name}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Kategorii;
