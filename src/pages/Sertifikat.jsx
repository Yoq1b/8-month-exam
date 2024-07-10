import React, { useEffect } from "react";
import Sertifikat_hero from "../components/Sertifikat_hero";
import Products from "../components/Products";
import Konsultatsiya_loc from "../components/Konsultatsiya_loc";

const Sertifikat = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <>
      <div className="w-[1310px] m-auto">
        <Sertifikat_hero />
      </div>
      <Products />
      <div className="mb-[150px]">
        <Konsultatsiya_loc />
      </div>
    </>
  );
};

export default Sertifikat;
