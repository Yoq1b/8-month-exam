import React, { useState, createContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Katalog from "./pages/Katalog";
import Stranitsa from "./pages/Stranitsa";
import Okompanii from "./pages/Okompanii";
import Korzina from "./pages/Korzina";
import Like from "./pages/Like";
import Dostavka from "./pages/Dostavka";
import Uslugi from "./pages/Uslugi";
import Statya from "./pages/Statya";
import Oplata from "./pages/Oplata";
import Garantii from "./pages/Garantii";
import Otzivi from "./pages/Otzivi";
import Footer from "./components/Footer";
import Blog from "./pages/Blog";
import Aksii from "./pages/Aksii";
import Podklyuch from "./pages/Podklyuch";
import Kontakti from "./pages/Kontakti";
import FAQ from "./pages/FAQ";
import Vakansii from "./pages/Vakansii";
import Sertifikat from "./pages/Sertifikat";
import Reanimatsiya from "./pages/Reanimatsiya";
import Proizvoditeli from "./pages/Proizvoditeli";
import Sravnit from "./pages/Sravnit";
import Login from "./pages/Login";
import Login_modal from "./components/Login_modal";

export const AboutContext = createContext();
export const ShopContext = createContext();
export const ProductContext = createContext();
export const LikeContext = createContext();
export const SvarnitContext = createContext();
export const LoginContext = createContext();

const App = () => {
  const [about, setAbout] = useState([]);
  const [shop, setShop] = useState([]);
  const [product, setProduct] = useState([]);
  const [likedd, setLikedd] = useState([]);
  const [svar, setSvar] = useState([]);
  const [userInfo, setUserInfo] = useState({});

  return (
    <ShopContext.Provider value={{ shop, setShop }}>
      <AboutContext.Provider value={{ about, setAbout }}>
        <ProductContext.Provider value={{ product, setProduct }}>
          <LikeContext.Provider value={{ likedd, setLikedd }}>
            <SvarnitContext.Provider value={{ svar, setSvar }}>
              <LoginContext.Provider value={{ userInfo, setUserInfo }}>
                <div className="w-[100%] m-auto border">
                  <BrowserRouter>
                    <div className="w-[100%] m-auto mt-[210px]">
                      <Navbar />
                      <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/basket" element={<Korzina />} />
                        <Route path="/katalog" element={<Katalog />} />
                        <Route path="/stranitsa" element={<Stranitsa />} />
                        <Route path="/okompanii" element={<Okompanii />} />
                        <Route path="/dostavka" element={<Dostavka />} />
                        <Route path="/uslugi" element={<Uslugi />} />
                        <Route path="/statya" element={<Statya />} />
                        <Route path="/oplata" element={<Oplata />} />
                        <Route path="/garantii" element={<Garantii />} />
                        <Route path="/otzivi" element={<Otzivi />} />
                        <Route path="/blog" element={<Blog />} />
                        <Route path="/aksii" element={<Aksii />} />
                        <Route path="/podklyuch" element={<Podklyuch />} />
                        <Route path="/kontakti" element={<Kontakti />} />
                        <Route path="/faq" element={<FAQ />} />
                        <Route path="/vakansii" element={<Vakansii />} />
                        <Route
                          path="/proizvoditeli"
                          element={<Proizvoditeli />}
                        />
                        <Route
                          path="/reanimatsiya"
                          element={<Reanimatsiya />}
                        />
                        <Route path="/sertifikat" element={<Sertifikat />} />
                        <Route path="/like" element={<Like />} />
                        <Route path="/sravnit" element={<Sravnit />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/login-modal" element={<Login_modal />} />
                      </Routes>
                    </div>
                    <Footer />
                  </BrowserRouter>
                </div>
              </LoginContext.Provider>
            </SvarnitContext.Provider>
          </LikeContext.Provider>
        </ProductContext.Provider>
      </AboutContext.Provider>
    </ShopContext.Provider>
  );
};

export default App;
