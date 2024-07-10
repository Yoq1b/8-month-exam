import React, { useEffect } from "react";
import Pochemu from "../components/Pochemu";
import Mail from "../components/Mail";
import Location from "../components/Location";
import Marquee from "../components/Marquee";
import Brend from "../components/Brend";
import Novosti from "../components/Novosti";
import Kabinet from "../components/Kabinet";
import Informatsiya from "../components/Informatsiya";
import Carousel from "../components/Carousel";
import Kategorii from "../components/Kategorii";
import Products from "../components/Products";

const Home = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <>
      <div className="">
        <Carousel />
        <Kategorii />
        <Kabinet />
        <Pochemu />
        <Products />
        <Marquee />
        <Brend />
        <Informatsiya />
        <Novosti />
        <Location />
        <Mail />
      </div>
    </>
  );
};

export default Home;
