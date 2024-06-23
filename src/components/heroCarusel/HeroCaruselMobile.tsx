"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./carusel.css";
import Image from "next/image";
import { Pagination, Autoplay } from "swiper/modules";

function HeroCaruselMobile() {
  interface CaruselType {
    id: number;
    text: string;
    title: any;
    description: string;
  }

  const HeroData: CaruselType[] = [
    {
      id: 1,
      text: "WELCOME TO GREENSHOP",
      title: (
        <h2 className="mb-[3px] font-black text-[24px] leading-[29px] text-[#3D3D3D]">
          Let’s Make a Better <span className="text-[#46A358]">Planet</span>
        </h2>
      ),
      description: "We are an online plant shop offering a wide range ",
    },
    {
      id: 2,
      text: "WELCOME TO GREENSHOP",
      title: (
        <h2 className="mb-[3px] font-black text-[24px] leading-[29px] text-[#3D3D3D]">
          Let’s Make a Better <span className="text-[#46A358]">Planet</span>
        </h2>
      ),
      description: "We are an online plant shop offering a wide range ",
    },
    {
      id: 3,
      text: "WELCOME TO GREENSHOP",
      title: (
        <h2 className="mb-[3px] font-black text-[24px] leading-[29px] text-[#3D3D3D]">
          Let’s Make a Better <span className="text-[#46A358]">Planet</span>
        </h2>
      ),
      description: "We are an online plant shop offering a wide range ",
    },
  ];
  return (
    <Swiper
      pagination={{
        dynamicBullets: true,
      }}
      autoplay={{
        delay: 3500,
        disableOnInteraction: false,
      }}
      modules={[Pagination, Autoplay]}
      className="mySwiper"
    >
      {HeroData.map((item: CaruselType) => (
        <SwiperSlide
          key={item.id}
          className="hero-mobile pt-[30px] flex justify-start items-center pb-[35px] bg-[#333]"
        >
          <div className="w-[206px] text-left mx-auto ml-[40px]">
            <p className="mb-[7px] text-[11px] font-medium leading-[16px]">
              {item.text}
            </p>
            {item.title}
            <p className="mb-[10px] font-normal text-[12px] leading-[18px]">
              {item.description}
            </p>
            <button className=" text-[12px] font-bold text-[#46A358]">
              SHOP NOW
            </button>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
export default HeroCaruselMobile;
