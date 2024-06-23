"use client";

import React, { ChangeEventHandler, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../../public/Logo.svg";
import { Navbar } from "../navbar";
import { KorzinkaIcon, LogOut, Search, CatalogIcon } from "@/assets/icons";
import { ButtonN } from "../btn";
import { usePathname } from "next/navigation";
import { Input, Modal } from "antd";
import axios from "axios";
import { URL } from "@/service/request";

const Header = () => {
  const [loginModal, setLoginModal] = useState<boolean>(false);
  const [isModalContent, setModalContent] =
    useState<string>("forgotVerifyLogin");
  const pathName = usePathname();

  const NavbarList = [
    { id: 1, title: "Bosh sahifa", path: "/", isActive: pathName === "/" },
    {
      id: 2,
      title: "Do'kon",
      path: "/components/Shop",
      isActive: pathName === "/components/Shop",
    },
    {
      id: 3,
      title: "O'tkazish",
      path: "/components/Plantcare",
      isActive: pathName === "/components/Plantcare",
    },
    {
      id: 4,
      title: "Bloglar",
      path: "/components/Blogs",
      isActive: pathName === "/components/Blogs",
    },
  ];

  const [showSearchInput, setShowSearchInput] = useState<boolean>(false);
  const [openModal, setOpenModal] = useState<boolean>(false);

  const handleSearchChangeInput: ChangeEventHandler<HTMLInputElement> = (e) => {
    if (e.target.value === "") {
      setTimeout(() => {
        setShowSearchInput(false);
      }, 2000);
    }
  };

  const closeModal = (e: React.MouseEvent) => {
    if ((e.target as HTMLDivElement).id === "modal-wrapper") {
      setOpenModal(false);
    }
  };

  const [loginEmail, setLoginEmail] = useState<string>("");
  const [LoginPassword, setLoginPass] = useState<string>("");
  const [registerPass, setRegisterPass] = useState<string>("");
  const [registerPass2, setReigisterPass2] = useState<string>("");
  const [RegisterEmail, setRegisterEmail] = useState<string>("");
  const [registerName, setReigisterName] = useState<string>("");
  const [forgotLoginEmail, setForgotLoginEmail] = useState<string>("");
  const [forgotEmailCode, setForgotEmailCode] = useState<string>("");

  const loginModalClick = () => {
    const data = {
      usernameoremali: loginEmail,
      password: LoginPassword,
    };

    axios
      .post(`${URL}/login`, data)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.error("Kirishda xatolik:", err);
      });
  };

  const registerModalClick = () => {};

  const forgotBtnClick = () => {};

  const forgotVerifyBtnClick = () => {};

  return (
    <div>
      <div className="container">
        <div className="flex items-center justify-between mt-[26px] border-b-[1px] border-[#a2d1ab59]">
          <div>
            <Link href={"/"}>
              <Image
                className="hidden sm:flex"
                src={Logo}
                alt="Logo"
                width={150}
                height={34.3}
                priority={true}
              />
            </Link>
          </div>
          <div>
            <Navbar />
          </div>
          <div className="flex gap-[30px] pb-[8px]">
            <button
              className="hidden sm:flex mt-[8px]"
              onClick={() => setShowSearchInput(true)}
            >
              {!showSearchInput && <Search />}
            </button>
            <input
              onChange={handleSearchChangeInput}
              className={`${
                showSearchInput
                  ? "w-[313px] h-[45px] leading-[16px] pl-[41px]"
                  : "w-[0px]"
              } searchInput rounded-[10px] bg-[#F8F8F8] duration-300 outline-none text-[14px] focus:shadow`}
              type="search"
              placeholder="O'zingizning o'tlarini qidiring"
              autoComplete="off"
              aria-label="O'zingizning o'tlarini qidiring"
              name="plant search"
            />
            <div className="flex sm:hidden">
              <input
                onChange={handleSearchChangeInput}
                className="w-[313px] h-[45px] leading-[16px] pl-[41px] searchInput rounded-[10px] bg-[#F8F8F8] duration-300 outline-none text-[14px] focus:shadow"
                type="search"
                placeholder="O'zingizning o'tlarini qidiring"
                autoComplete="off"
                aria-label="O'zingizning o'tlarini qidiring"
                name="plant search"
              />
            </div>
            <button className="hidden sm:flex mt-[6px]">
              <KorzinkaIcon />
            </button>
            <div className="ml-[5px] md:flex hidden">
              <ButtonN
                Click={() => setLoginModal(true)}
                Width={100}
                title="Login"
                iconPosition="prev"
                icon={<LogOut />}
              />
            </div>
            <div className="flex md:hidden">
              <button
                onClick={() => setOpenModal(true)}
                className="flex justify-center items-center w-[45px] h-[45px] rounded-[14px] bg-[#46A358]"
              >
                <CatalogIcon />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex md:hidden">
        <div
          onClick={closeModal}
          id="modal-wrapper"
          className={`${
            openModal ? "left-0" : "left-[-100%]"
          } modal fixed top-0 z-[2] duration-500 backdrop-blur-md h-[100vh] w-full`}
        >
          <div
            className={`${
              openModal ? "right-0" : "right-[-200%]"
            } ModalB w-[70%] h-[100vh] duration-500 absolute shadow-[-2px_0px_21px_-2px_rgba(0,0,0,0.75)]`}
          >
            <div className="flex justify-end">
              <button
                onClick={() => setOpenModal(false)}
                className="w-[40px] h-[40px] rounded-[50%]"
              >
                <img
                  className="w-full"
                  src="https://www.freeiconspng.com/thumbs/close-icon/close-icon-47.png"
                  alt="close"
                />
              </button>
            </div>

            <div className="pt-[40px]">
              {NavbarList.map((item) => (
                <li
                  onClick={() => setOpenModal(false)}
                  key={item.id}
                  className={`font-normal ${
                    item.isActive
                      ? "font-extrabold text-[33px] text-[#29b946] border-[#46A358] border-s-[6px] duration-300"
                      : "font-bold text-[#ffffff] text-[30px]"
                  } leading-[50px] pl-[20px] pt-[20px] pb-[10px]`}
                >
                  <Link href={item.path}>{item.title}</Link>
                </li>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Modal
        visible={loginModal}
        onCancel={() => setLoginModal(false)}
        footer={null}
      >
        <div className="w-[500px]">
          <ul className="pt-[10px] flex justify-center items-center text-[20px] font-medium gap-[27px]">
            <li
              onClick={() => setModalContent("Login")}
              className={`duration-300 cursor-pointer ${
                isModalContent === "Login" ? "text-[#46A358]" : "text-[#3D3D3D]"
              }`}
            >
              Kirish
            </li>
            <li className="w-[2px] h-[16px] bg-black"></li>
            <li
              onClick={() => setModalContent("Register")}
              className={`duration-300 cursor-pointer ${
                isModalContent === "Register"
                  ? "text-[#46A358]"
                  : "text-[#3D3D3D]"
              }`}
            >
              Ro'yxatdan o'tish
            </li>
          </ul>

          {isModalContent === "Login" && (
            <div className="flex flex-col gap-4 p-[15px]">
              <p className="text-[13px] text-[#3D3D3D] font-normal text-center mt-[23px]">
                Kirish uchun foydalanuvchi nomi va parolingizni kiriting.
              </p>
              <div className="w-full flex justify-center items-center">
                <input
                  value={loginEmail}
                  onChange={(e) => setLoginEmail(e.target.value)}
                  className="border outline-[#46A358] border-[#EAEAEA] pl-[14px] text-[14px] text-[#3D3D3D] font-normal w-[300px] h-[40px] rounded-[5px]"
                  type="email"
                  placeholder="almamun_uxui@outlook.com"
                />
              </div>
              <div className="w-full flex justify-center items-center">
                <input
                  value={LoginPassword}
                  onChange={(e) => setLoginPass(e.target.value)}
                  className="border outline-[#46A358] border-[#EAEAEA] pl-[14px] text-[14px] text-[#3D3D3D] font-normal w-[300px] h-[40px] rounded-[5px]"
                  type="password"
                  placeholder="***********"
                />
              </div>
              <div className="items-end justify-center flex">
                <p
                  onClick={() => setModalContent("forgotEmail")}
                  className="w-[300px] text-[14px] cursor-pointer text-[#46A358] font-normal text-end"
                >
                  Parolni unutdingizmi?
                </p>
              </div>
              <div className="flex justify-center items-center mt-[22px]">
                <ButtonN Click={loginModalClick} Width={300} title="Login" />
              </div>
            </div>
          )}
          {isModalContent === "Register" && (
            <div className="flex flex-col gap-4 p-[15px]">
              <p className="text-[13px] text-[#3D3D3D] font-normal text-center mt-[23px]">
                Ro'yxatdan o'tish uchun elektron pochta va parolingizni
                kiriting.
              </p>
              <div className="w-full flex justify-center items-center">
                <input
                  value={registerName}
                  onChange={(e) => setReigisterName(e.target.value)}
                  className="border outline-[#46A358] border-[#EAEAEA] pl-[14px] text-[14px] text-[#3D3D3D] font-normal w-[300px] h-[40px] rounded-[5px]"
                  type="text"
                  placeholder="Foydalanuvchi nomi"
                />
              </div>
              <div className="w-full flex justify-center items-center">
                <input
                  value={RegisterEmail}
                  onChange={(e) => setRegisterEmail(e.target.value)}
                  className="border outline-[#46A358] border-[#EAEAEA] pl-[14px] text-[14px] text-[#3D3D3D] font-normal w-[300px] h-[40px] rounded-[5px]"
                  type="email"
                  placeholder="Elektron pochta manzilingizni kiriting"
                />
              </div>
              <div className="w-full flex justify-center items-center">
                <input
                  value={registerPass}
                  onChange={(e) => setRegisterPass(e.target.value)}
                  className="border outline-[#46A358] border-[#EAEAEA] pl-[14px] text-[14px] text-[#3D3D3D] font-normal w-[300px] h-[40px] rounded-[5px]"
                  type="password"
                  placeholder="Parol"
                />
              </div>
              <div className="w-full flex justify-center items-center">
                <input
                  value={registerPass2}
                  onChange={(e) => setReigisterPass2(e.target.value)}
                  className="border outline-[#46A358] border-[#EAEAEA] pl-[14px] text-[14px] text-[#3D3D3D] font-normal w-[300px] h-[40px] rounded-[5px]"
                  type="password"
                  placeholder="Parolni tasdiqlang"
                />
              </div>
              <div className="flex justify-center items-center mt-[22px]">
                <ButtonN
                  Click={registerModalClick}
                  Width={300}
                  title="Ro'yxatdan o'tish"
                />
              </div>
            </div>
          )}
          {isModalContent === "forgotEmail" && (
            <div className="flex flex-col items-center space-y-5 mt-[30px]">
              <Input
                value={forgotLoginEmail}
                onChange={(e) => setForgotLoginEmail(e.target.value)}
                placeholder="E-pochta manzilingizni kiriting"
                size="large"
              />
              <ButtonN
                Click={() => setModalContent("forgotVerifyLogin")}
                title="Kodni yuborish"
                Width={320}
              />
            </div>
          )}
          {isModalContent === "forgotVerifyLogin" && (
            <div className="flex flex-col items-center space-y-5 mt-[30px]">
              <div className="w-full flex justify-center items-center">
                <Input
                  value={forgotEmailCode}
                  onChange={(e) => setForgotEmailCode(e.target.value)}
                  maxLength={6}
                  size="large"
                />
              </div>
              <ButtonN
                Click={forgotVerifyBtnClick}
                title="Kodni tasdiqlang"
                Width={320}
              />
            </div>
          )}
        </div>
      </Modal>
    </div>
  );
};

export default Header;
