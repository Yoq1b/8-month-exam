import React, { useState, useContext } from "react";
import { IoSearchOutline } from "react-icons/io5";
import SelectLabel from "./SelectLabel";
import { Data } from "../db/data";
import { ShopContext } from "../App";
import { NavLink } from "react-router-dom";

const SearchInput = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { shop, setShop } = useContext(ShopContext);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredData = Data.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const closeModal = () => {
    setSearchTerm(""); // Reset search term to close the dropdown
  };

  return (
    <div>
      <div className="ml-[50px] flex items-center h-[39px] bg-[linear-gradient(to_right,_#F8F7F3_50%,_#D5D1E1_50%)] border border-[#D5D1E1] rounded-[50px]">
        <SelectLabel className="relative z-50 " />
        <div className="relative h-full w-[420px]">
          <input
            type="text"
            placeholder="Поиск"
            value={searchTerm}
            onChange={handleSearchChange}
            className="h-full outline-none text-[#7A7687] w-[420px] rounded-[50px] pl-[15px] bg-[#F8F7F3]"
          />
          {searchTerm && (
            <div className="absolute top-[40px] w-[420px] bg-white rounded-[10px] shadow-lg max-h-[200px] overflow-y-auto">
              {filteredData.map((item) => (
                <NavLink to="/stranitsa" key={item.id}>
                  <div
                    onClick={() => {
                      setShop([item.id]);
                      closeModal();
                    }}
                    className="flex items-center rounded-[10px] justify-start gap-[30px] p-2 hover:bg-[#F8F7F3] cursor-pointer"
                  >
                    <img
                      src={item.image}
                      alt=""
                      className="w-[40px] h-[40px] rounded-full"
                    />
                    <p className="text-start font-normal">{item.name}</p>
                  </div>
                </NavLink>
              ))}
              {filteredData.length === 0 && (
                <div className="p-2 text-[#7A7687]">Результатов не найдено</div>
              )}
            </div>
          )}
        </div>
        <button className="group w-[43px] h-full flex items-center justify-center bg-[#D5D1E1] rounded-tr-[50px] rounded-br-[50px]">
          <IoSearchOutline className="text-[#7A7687] text-[22px] group-hover:scale-110 hover:rotate-90 duration-300" />
        </button>
      </div>
    </div>
  );
};

export default SearchInput;
