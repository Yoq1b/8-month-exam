import React, { useEffect } from "react";
import GarantiHero from "../components/GarantiHero";
import Uslug from "../components/Uslug";
import Vnimanie from "../components/Vnimanie";
import Location from "../components/Location";
import Konsultatsiya_loc from "../components/Konsultatsiya_loc";

const Garantii = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <>
      <div className="w-[1440px] m-auto">
        <div className="w-[1310px] m-auto">
          <GarantiHero />
          <Uslug />
          <Vnimanie />
          <div className="mb-[150px]">
            <Konsultatsiya_loc />
          </div>
        </div>
      </div>
    </>
  );
};

export default Garantii;
