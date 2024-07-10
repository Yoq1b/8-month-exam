import React, { useState } from "react";

const Productselect = () => {
  const [activeTab, setActiveTab] = useState("specs");

  return (
    <div className="w-full mt-[60px]">
      <div className="flex items-center gap-[20px] border-b-[0.5px]">
        <p
          className={`text-[16px] font-semibold cursor-pointer pb-3 ${
            activeTab === "description"
              ? "text-[#202020] border-b-[2px] border-b-[#07745E]"
              : "text-[#7A7687]"
          }`}
          onClick={() => setActiveTab("description")}
        >
          Описание оборудования
        </p>
        <p
          className={`text-[16px] font-semibold cursor-pointer pb-3 ${
            activeTab === "specs"
              ? "text-[#202020] border-b-[2px] border-b-[#07745E]"
              : "text-[#7A7687]"
          }`}
          onClick={() => setActiveTab("specs")}
        >
          Характеристики и документы
        </p>
        <p
          className={`text-[16px] font-semibold cursor-pointer pb-3 ${
            activeTab === "services"
              ? "text-[#202020] border-b-[2px] border-b-[#07745E]"
              : "text-[#7A7687]"
          }`}
          onClick={() => setActiveTab("services")}
        >
          Услуги и сервис
        </p>
        <p
          className={`text-[16px] font-semibold cursor-pointer pb-3 ${
            activeTab === "wholesale"
              ? "text-[#202020] border-b-[2px] border-b-[#07745E]"
              : "text-[#7A7687]"
          }`}
          onClick={() => setActiveTab("wholesale")}
        >
          Оптовым покупателям
        </p>
        <p
          className={`text-[16px] font-semibold cursor-pointer pb-3 ${
            activeTab === "reviews"
              ? "text-[#202020] border-b-[2px] border-b-[#07745E]"
              : "text-[#7A7687]"
          }`}
          onClick={() => setActiveTab("reviews")}
        >
          Отзывы 4
        </p>
      </div>

      <div className="bg-white pt-[20px] pl-[24px] rounded shadow">
        {activeTab === "description" && (
          <div className="h-[214px] ">
            <div className="flex items-start gap-[230px]">
              <div>
                <p className="text-[#202020] font-semibold text-[18px] mb-[20px]">
                  Описание оборудования
                </p>
                <p className="text-[#7A7687] text-[12px] font-normal leading-[27px]">
                  Вес оборудования . . . . . . . . . .
                  <span className="text-[#202020] font-medium"> 90 кг </span>
                  <br />
                  Детектор . . . . . . . . . . . . . . . . . . .
                  <span className="text-[#202020] font-medium">
                    CsI - на основе аморфного кремния
                  </span>
                  <br />
                  Время сканирования . . . . . . . .
                  <span className="text-[#202020] font-medium">
                    PAN стандарт - 12 сек
                  </span>
                  <br />
                  Размер фокусного пятна . . . .
                  <span className="text-[#202020] font-medium"> 0.6</span>
                  <br />
                  Динамический диапазон . . . .
                  <span className="text-[#202020] font-medium">
                    {" "}
                    16 бит (65 536 градации серого)
                  </span>
                  <br />
                  <br />
                </p>
              </div>
            </div>
          </div>
        )}

        {activeTab === "specs" && (
          <div className="h-[214px] ">
            <div className="flex items-start gap-[230px]">
              <div>
                <p className="text-[#202020] font-semibold text-[18px] mb-[20px]">
                  Технические характеристики
                </p>
                <p className="text-[#7A7687] text-[12px] font-normal leading-[27px]">
                  Вес оборудования . . . . . . . . . .
                  <span className="text-[#202020] font-medium"> 90 кг </span>
                  <br />
                  Детектор . . . . . . . . . . . . . . . . . . .
                  <span className="text-[#202020] font-medium">
                    CsI - на основе аморфного кремния
                  </span>
                  <br />
                  Время сканирования . . . . . . . .
                  <span className="text-[#202020] font-medium">
                    PAN стандарт - 12 сек
                  </span>
                  <br />
                  Размер фокусного пятна . . . .
                  <span className="text-[#202020] font-medium"> 0.6</span>
                  <br />
                  Динамический диапазон . . . .
                  <span className="text-[#202020] font-medium">
                    {" "}
                    16 бит (65 536 градации серого)
                  </span>
                  <br />
                  <br />
                </p>
              </div>
              <div>
                <p className="text-white font-semibold text-[18px] mb-[20px]">
                  Технические характеристики
                </p>
                <p className="text-[#7A7687] text-[12px] font-normal leading-[27px]">
                  Рабочее напряжение . . . . . . .
                  <span className="text-[#202020] font-medium"> 90 кг </span>
                  <br />
                  Максимальный ток . . . . . . . . . .
                  <span className="text-[#202020] font-medium">
                    CsI - на основе аморфного кремния
                  </span>
                  <br />
                  Гарантия . . . . . . . . . . . . . . . . . . .
                  <span className="text-[#202020] font-medium">
                    {" "}
                    PAN стандарт - 12 сек
                  </span>
                </p>
              </div>
            </div>
          </div>
        )}

        {activeTab === "services" && (
          <div className="h-[214px]">
            <p className="text-[#3D3D3D] font-bold text-[14px]">
              Услуги и сервис:
            </p>
            <p className="text-[#727272] text-[14px] mb-[30px] font-normal">
              Подробное описание услуг и сервисов, которые предоставляет
              компания. <br />
              <br />
            </p>
            <p className="text-[#727272] text-[14px] mb-[30px] font-normal">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi
              mollitia reprehenderit <br /> doloribus ipsa quos aut incidunt
              molestiae possimus ea! Temporibus pariatur repellendus corporis
              officiis illum totam reiciendis quisquam. <br /> Numquam,
              voluptatum!
            </p>
          </div>
        )}

        {activeTab === "wholesale" && (
          <div className="h-[214px]">
            <p className="text-[#3D3D3D] font-bold text-[14px]">
              Оптовым покупателям:
            </p>
            <p className="text-[#727272] text-[14px] font-normal">
              Информация для оптовых покупателей, условия и преимущества. <br />
              <br />
            </p>
            <p className="text-[#3D3D3D] font-bold mb-[20px] text-[14px]">
              Lorem ipsum, dolor sit amet consectetur adipisicing.
            </p>
            <p className="text-[#3D3D3D] font-bold text-[14px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Veritatis, inventore. Labore, a, ut ea ipsam eos <br />
              esse impedit deleniti optio minima alias tenetur amet nostrum
              vitae laboriosam laborum modi laudantium <br /> ad ex eius
              repellendus, repudiandae possimus dolores ullam? Sequi, pariatur?
            </p>
          </div>
        )}

        {activeTab === "reviews" && (
          <div className="h-[214px]">
            <p className="text-[#3D3D3D] font-bold text-[14px] mb-[10px]">Отзывы:</p>
            <p className="text-[#727272] text-[14px] font-normal">
              Мнения и отзывы покупателей о продукте. <br />
              <br />
            </p>
            <p className="text-[#727272] text-[14px] font-normal">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus
              eligendi culpa architecto. <br />
              <br />
            </p>
            <p className="text-[#727272] text-[14px] font-normal">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
              officiis voluptatum? Perspiciatis laudantium explicabo quo? <br />
              <br />
            </p>
            <p className="text-[#727272] text-[14px] font-normal">
              Мнения и отзывы покупателей о продукте sit amet consectetur
              adipisicing . <br />
              <br />
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Productselect;
