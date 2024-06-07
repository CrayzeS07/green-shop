"use client";
import React, { ChangeEvent, ChangeEventHandler, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../../public/Logo.svg";
import { Navbar } from "../navbar";
import { KorzinkaIcon, LogOut, Search, CatalogIcon } from "@/assets/icons";
import { ButtonN } from "../btn";

const Header = () => {
  const [showSearchInput, setShowSearchInput] = useState<boolean>(false);
  const handleSearchChaneInput: ChangeEventHandler<HTMLInputElement> = (e) => {
    if (e.target.value == "") {
      setTimeout(() => {
        setShowSearchInput(false);
      }, 2000);
    }
  };
  return (
    <div>
      <div className="container">
        <div className="flex items-center justify-between mt-[26px] border-b-[1px] border-[#a2d1ab59]">
          <div>
            <Link className="pb-[17px]" href={"/"}>
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
              onChange={handleSearchChaneInput}
              className={` ${
                showSearchInput
                  ? "w-[313px] h-[45px] leading-[16px] pl-[41px]"
                  : "w-[0px]"
              } searchInput  rounded-[10px] bg-[#F8F8F8] duration-300 outline-none text-[14px] focus:shadow`}
              type="search"
              placeholder="Find your plants"
              autoComplete="off"
              aria-label="Find your plants"
              name="plant search"
            />
            <div className=" flex sm:hidden">
              <input
                onChange={handleSearchChaneInput}
                className="w-[313px] h-[45px] leading-[16px] pl-[41px] searchInput  rounded-[10px] bg-[#F8F8F8] duration-300 outline-none text-[14px] focus:shadow"
                type="search"
                placeholder="Find your plants"
                autoComplete="off"
                aria-label="Find your plants"
                name="plant search"
              />
            </div>
            <button className="hidden sm:flex mt-[6px]">
              <KorzinkaIcon />
            </button>
            <div className="ml-[5px] md:flex hidden">
              <ButtonN
                Width={100}
                title="Login"
                iconPosition="prev"
                icon={<LogOut />}
              />
            </div>
            <div className="flex md:hidden">
              <button className="flex justify-center items-center w-[45px] h-[45px] rounded-[14px] bg-[#46A358]">
                <CatalogIcon />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
