import React, { useContext, useEffect, useState } from "react";
import { ImFacebook } from "react-icons/im";
import { AiFillInstagram } from "react-icons/ai";
import { IoIosArrowForward } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { FaOdnoklassniki, FaTwitter, FaVk } from "react-icons/fa";
import { RiEditLine } from "react-icons/ri";
import Dannie from "../components/Dannie";
import Istoriya from "../components/Istoriya";
import { LoginContext } from "../App";
import Login_modal from "../components/Login_modal";
import Telefon_modal from "../components/Telefon_modal";
import Email_modal from "../components/Email_modal";
import { IoExitOutline } from "react-icons/io5";
import Exit_modal from "../components/Exit_modal";
import Name_modal from "../components/Name_modal";

const Login = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const { userInfo } = useContext(LoginContext);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [islogin, setIslogin] = useState(false);
  const [istel, setIstel] = useState(false);
  const [isemail, setIemail] = useState(false);
  const [isexit, setIsexit] = useState(false);
  const [isname, setIsname] = useState(false);

  useEffect(() => {
    const storedUserInfo = localStorage.getItem("userInfo");
    if (storedUserInfo) {
      const { name, surname, phone, email } = JSON.parse(storedUserInfo);
      setName(name);
      setSurname(surname);
      setPhone(phone);
      setEmail(email);
    }
  }, [userInfo]); // userInfo ni kuzatamiz, agar o'zgarsa, ma'lumotlarni yangilaymiz

  const handleLoginEdit = () => {
    setIslogin(true);
  };

  const closeModal = () => {
    setIslogin(false);
  };

  const handleTelEdit = () => {
    setIstel(true);
  };
  const closeTel = () => {
    setIstel(false);
  };

  const handleEmailEdit = () => {
    setIemail(true);
  };

  const closeEmail = () => {
    setIemail(false);
  };
  const handleExitopen = () => {
    setIsexit(true);
  };

  const closeExit = () => {
    setIsexit(false);
  };

  const handleNameEdit = () => {
    setIsname(true);
  };

  const closeName = () => {
    setIsname(false);
  };

  const [showDetails, setShowDetails] = useState(false);
  const [uploadedImage, setUploadedImage] = useState(
    localStorage.getItem("uploadedImage") || null
  );

  useEffect(() => {
    // localStorage dan tasvirlarni olish
    const storedImage = localStorage.getItem("uploadedImage");
    if (storedImage) {
      setUploadedImage(storedImage);
    }
  }, []);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setUploadedImage(reader.result);
      // localStorage ga tasvirni saqlash
      localStorage.setItem("uploadedImage", reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleDeletePhoto = () => {
    setUploadedImage(null); // Rasmni o'chiramiz
    localStorage.removeItem("uploadedImage"); // localStorage dan tasvirni o'chiramiz
  };

  return (
    <>
      <div className="w-[1310px] m-auto">
        <div className="flex my-[20px] items-center gap-[8px]">
          <NavLink to="/">
            <p className="text-[#7A7687] text-[14px] font-normal hover:text-[#202020]">
              Главная
            </p>
          </NavLink>
          <IoIosArrowForward className="text-[#7A7687] text-[14px]" />
          <p className="text-[14px] font-normal text-[#202020]">
            Личный кабинет
          </p>
        </div>
        <div className="mt-[85px] flex items-start gap-[120px]">
          <div className="group relative w-[210px] bg-[#E1EFE6] h-[210px] rounded-[50%] flex items-center justify-center">
            {uploadedImage && (
              <div
                className="absolute rounded-[50%] inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${uploadedImage})` }}
              ></div>
            )}
            <p className="text-[80px] capitalize text-[#23473B] font-medium">
              {name?.charAt(0)}
            </p>
            <div
              onClick={toggleDetails}
              className="group rounded-[50%] opacity-0 group-hover:opacity-100 hover:cursor-pointer duration-150 transform scale-0 group-hover:scale-100 absolute left-[42%] bottom-[10px] w-[32px] h-[32px] bg-[#07745E] flex items-center justify-center"
            >
              <RiEditLine className="text-white text-[20px]" />
              <div
                className={`${
                  showDetails ? "block" : "hidden"
                } absolute bottom-[-70px] w-[111px] pt-[10px] h-[62px] bg-transparent border border-[#E5E2EE] rounded-[5px]`}
              >
                <div className="relative border cursor-pointer">
                  <p className="text-[#202020] hover:cursor-pointer capitalize text-[12px] font-normal text-center">
                    Редактировать
                  </p>
                  <input
                    type="file"
                    className="absolute inset-0 w-full h-full opacity-0 hover:cursor-pointer"
                    onChange={handleFileChange}
                  />
                </div>
                <p
                  className="text-[#C13515] hover:cursor-pointer mt-[5px] capitalize text-[12px] font-normal text-center"
                  onClick={handleDeletePhoto}
                >
                  Удалить фото
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div
              onClick={handleExitopen}
              className="group w-[120px] hover:cursor-pointer hover:bg-[#088269] hover:scale-105 duration-300 h-[35px] rounded-[50px] absolute right-[-170px] top-[20px] flex items-center justify-center gap-[10px] border border-[#D5D1E1] text-[#202020] text-[14px] font-semibold "
            >
              <p className="text-[#202020] group-hover:text-white hover:scale-105 duration-300 capitalize text-[16px]  font-medium">
                выйти
              </p>
              <IoExitOutline className="text-[20px] group-hover:text-white hover:scale-105 duration-300" />
            </div>
            <p className="text-[#202020] capitalize mt-[24px] text-[30px] mb-[20px] font-medium">
              {name} {surname}
            </p>
            <div className="flex items-center gap-[15px]">
              <FaVk className="text-[18px] hover:cursor-pointer hover:scale-110 duration-300 hover:text-blue-600" />
              <ImFacebook className="text-[18px] hover:cursor-pointer hover:scale-110 duration-300 hover:text-blue-700" />
              <AiFillInstagram className="text-[20px] hover:cursor-pointer hover:scale-110 duration-300 hover:text-red-500" />
              <FaTwitter className="text-[18px] hover:cursor-pointer hover:scale-110 duration-300 hover:text-blue-600" />
              <FaOdnoklassniki className="text-[18px] hover:cursor-pointer hover:scale-110 duration-300 hover:text-orange-600" />
            </div>
            <div className="flex mt-[40px] items-center gap-[10px]">
              <button
                onClick={handleNameEdit}
                className="w-[307px] h-[41px] rounded-[50px] border border-[#D5D1E1] text-[#202020] text-[14px] font-semibold "
              >
                Изменить персональную информацию
              </button>
              <button className="w-[160px] h-[41px] rounded-[50px] border border-[#D5D1E1] text-[#202020] text-[14px] font-semibold ">
                Изменить пароль
              </button>
            </div>
            <div className="flex mt-[74px] items-center gap-[200px]">
              <div>
                <div className="flex items-start gap-[10px]">
                  <p className="text-[#202020] text-[16px] mb-[6px] font-medium">
                    +998 {phone}
                  </p>
                  <RiEditLine
                    onClick={handleTelEdit}
                    className="text-[#07745E] text-[22px] hover:cursor-pointer hover:scale-110 duration-200"
                  />
                </div>
                <p className="text-[#7A7687] text-[16px] mb-[6px] font-medium">
                  Телефон
                </p>
              </div>
              <div>
                <div className="flex items-start gap-[10px]">
                  <p className="text-[#202020] text-[16px] mb-[6px] font-medium">
                    {email}
                  </p>
                  <RiEditLine
                    onClick={handleEmailEdit}
                    className="text-[#07745E] text-[22px] hover:cursor-pointer hover:scale-110 duration-200"
                  />
                </div>
                <p className="text-[#7A7687] text-[16px] mb-[6px] font-medium">
                  Email
                </p>
              </div>
            </div>
          </div>
        </div>
        <Dannie />
        <Istoriya />
      </div>
      {islogin && <Login_modal handlevoyti={closeModal} />}
      {istel && <Telefon_modal handlevoyti={closeTel} />}
      {isemail && <Email_modal handlevoyti={closeEmail} />}
      {isexit && <Exit_modal handlevoyti={closeExit} />}
      {isname && <Name_modal handlevoyti={closeName} />}
    </>
  );
};

export default Login;
