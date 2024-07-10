import React, { useEffect } from "react";
import Vakansiya from "../components/Vakansiya";
import Dostavka_loc from "../components/Dostavka_loc";
import Mail from "../components/Mail";

const Vakansii = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <>
      <div className="w-[1310px] m-auto">
        <Vakansiya />
      </div>
      <Dostavka_loc />
      <Mail />
    </>
  );
};

export default Vakansii;
