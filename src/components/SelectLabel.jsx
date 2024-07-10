import React, { useState } from "react";
import { TbTriangleInvertedFilled } from "react-icons/tb";
import { NavLink } from "react-router-dom";

const SelectLabel = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("Все категории");

  const categories = [
    { name: "Реанимация", path: "/reanimatsiya" },
    { name: "Хирургия", path: "/khirurgiya" },
    { name: "Офтальмология", path: "/oftalmologiya" },
    { name: "Лабораторная диагностика", path: "/laboratornaya-diagnostika" },
    { name: "Акушерство", path: "/akusherstvo" },
    { name: "Гинекология", path: "/ginekologiya" },
    { name: "Гистология", path: "/gistologiya" },
    { name: "Косметология", path: "/kosmetologiya" },
    { name: "Оториноларингология", path: "/otorinolaringologiya" },
    { name: "Рентгенология и томография", path: "/rentgenologiya-i-tomografiya" },
    { name: "Стерилизация", path: "/sterilizatsiya" },
    { name: "Физиотерапия и реабилитация", path: "/fizioterapiya-i-reabilitatsiya" },
    { name: "Функциональная диагностика", path: "/funktsionalnaya-diagnostika" },
    { name: "Эндоскопия", path: "/endoskopiya" },
    { name: "Новинки", path: "/novinki" },
    { name: "Распродажи", path: "/rasprodazhi" },
    { name: "Кабинеты под ключ", path: "/podklyuch" }
  ];

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (category) => {
    setSelectedCategory(category.name);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          onClick={handleToggle}
          className="flex items-center w-[146px] h-[37px] justify-between rounded-full shadow-sm px-[15px] py-2 bg-[#EFEFEF] text-[14px] font-medium text-[#7A7687] hover:bg-gray-200 focus:outline-none"
        >
          <span className="flex items-center overflow-x-hidden w-[100px] whitespace-nowrap text-ellipsis">
            {selectedCategory}
          </span>
          <TbTriangleInvertedFilled
            className={`text-[#7A7687] text-[9px] transition-transform duration-600 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </button>
      </div>

      {isOpen && (
        <div className="origin-top-right z-50 absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {categories.map((category) => (
              <NavLink
                key={category.name}
                to={category.path}
                onClick={() => handleSelect(category)}
                className="block px-4 py-[6px] text-[14px] text-gray-700 hover:bg-gray-100 w-full text-left"
              >
                {category.name}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SelectLabel;
