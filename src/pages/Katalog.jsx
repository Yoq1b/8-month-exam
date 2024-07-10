import React, { useEffect } from "react";
import Katalogdiv from "../components/Katalogdiv";
import Kabinet from "../components/Kabinet";
import Pochemu from "../components/Pochemu";
import Brend from "../components/Brend";
import Novosti from "../components/Novosti";
import Vopros from "../components/Vopros";
import Location from "../components/Location";
import Mail from "../components/Mail";
import Products from "../components/Products";

const Katalog = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <>
      <div className="w-[1440px] m-auto">
        <Katalogdiv />
        <Kabinet />
        <Pochemu />
        <Products />
        <Brend />
        <Novosti />
        <Vopros />
        <Location />
        <Mail />
      </div>
    </>
  );
};

export default Katalog;
