"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import img1 from "../../../public/imgs1.jpg"
import "swiper/css/pagination";

import "./carusel.css";

import { Pagination } from "swiper/modules";
import { ButtonN } from "../btn";

export default function HeroCarusel() {
  interface caruselType {
    id: number;
    text: string;
    title: string;
    span: string;
    spana: string;
    description: string;
  }
  const HeroData = [
    {
      id: 1,
      text: "WELCOME TO GREENSHOP",
      title: "LET’S MAKE A",
      span: "BETTER",
      spana: "PLANET",
      description:
        "We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!",
    },
    {
      id: 2,
      text: "WELCOME TO GREENSHOP",
      title: "LET’S MAKE A",
      span: "BETTER",
      spana: "PLANET",
      description:
        "We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!",
    },
    {
      id: 3,
      text: "WELCOME TO GREENSHOP",
      title: "LET’S MAKE A",
      span: "BETTER",
      spana: "PLANET",
      description:
        "We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!",
    },
  ];
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {HeroData.map((item: caruselType) => (
          <SwiperSlide>
            <div className="w-[1200px] h-[450px] bg-[#F5F5F580] flex justify-between text-left">
              <div className="mt-[68px] ml-[43px]">
                <p className="text-[14px] text-[#3D3D3D] leading-[16px] font-medium ">
                  {item.text}
                </p>
                <h3 className="text-[70px] text-[#3D3D3D] font-[900] leading-[40px] mt-[20px]">
                  {item.title}
                </h3>
                <span className="text-[70px] text-[#3D3D3D] font-[900]">
                  {item.span}
                </span>
                <span className="text-[70px] text-[#46A358] ml-[20px] font-[900]">
                  {item.spana}
                </span>
                <p className="w-[557px] text-[14px] font-normal text-[#727272]">
                  {item.description}
                </p>
                <div className="mt-[44px]">
                  <ButtonN Width={140} title="SHOP NOW" />
                </div>
              </div>
              <div>
                <Image src={img1} alt="img" width={518} height={518} />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
