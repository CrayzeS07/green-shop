"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./carusel.css";
import { Pagination, Autoplay } from "swiper/modules";
import { ButtonN } from "../btn";

export default function HeroCarusel() {
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
        <h2 className="mb-[5px] md:text-[50px] md:w-[450px] w-[300px] lg:w-[530px] font-black text-[35px] leading-[50px] lg:leading-[70px] lg:text-[70px] text-[#3D3D3D]">
          Let’s Make a Better <span className="text-[#46A358]">Planet</span>
        </h2>
      ),
      description:
        "We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!",
    },
    {
      id: 2,
      text: "WELCOME TO GREENSHOP",
      title: (
        <h2 className="mb-[5px] md:text-[50px] md:w-[450px] w-[300px] lg:w-[530px] font-black text-[35px] leading-[50px] lg:leading-[70px] lg:text-[70px] text-[#3D3D3D]">
          Let’s Make a Better <span className="text-[#46A358]">Planet</span>
        </h2>
      ),
      description:
        "We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!",
    },
    {
      id: 3,
      text: "WELCOME TO GREENSHOP",
      title: (
        <h2 className="mb-[5px] md:text-[50px] md:w-[450px] w-[300px] lg:w-[530px] font-black text-[35px] leading-[50px] lg:leading-[70px] lg:text-[70px] text-[#3D3D3D]">
          Let’s Make a Better <span className="text-[#46A358]">Planet</span>
        </h2>
      ),
      description:
        "We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!",
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
          className="pt-[68px] flex justify-start items-center pb-[85px] bg-[#333]"
        >
          <div className="w-[530px] text-left mx-auto ml-[40px]">
            <p className="mb-[7px] text-[14px] font-medium leading-[16px]">
              {item.text}
            </p>
            {item.title}
            <p className="w-[280px] md:text-[14px] md:leading-[24px] md:w-[360px] lg:w-[557px] mb-[24px] md:mb-[44px] font-normal text-[10px] leading-[15px]">
              {item.description}
            </p>
            <ButtonN Width={140} title="SHOP NOW" />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
