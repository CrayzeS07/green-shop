import React from "react";
import { ButtonN } from "../btn";
import Logo from "../../../public/Logo.svg";
import Image from "next/image";
import Facebook from "../../../public/footer_img/Facebook.svg";
import Instagram from "../../../public/footer_img/Instagram.svg";
import Linkedin from "../../../public/footer_img/Linkedin.svg";
import Twitter from "../../../public/footer_img/Twitter.svg";
import Union from "../../../public/footer_img/Union.svg";
import payy from "../../../public/Pay.jpg";
interface GardenCareType {
  id: number;
  img: string;
  title: string;
  dacument: string;
}

const Footer = () => {
  const GardenCare: any = [
    {
      id: 1,
      img: "https://imgs-green-shop.vercel.app/imgs/img%20(2).svg",
      title: "Garden Care",
      dacument:
        "We are an online plant shop offering a wide range of cheap and trendy plants.",
    },
    {
      id: 1,
      img: "https://imgs-green-shop.vercel.app/imgs/img%20(1).svg",
      title: "Plant Renovation",
      dacument:
        "We are an online plant shop offering a wide range of cheap and trendy plants.",
    },
    {
      id: 1,
      img: "https://imgs-green-shop.vercel.app/imgs/img%20(3).svg",
      title: "Watering Graden",
      dacument:
        "We are an online plant shop offering a wide range of cheap and trendy plants.",
    },
  ];

  return (
    <div>
      <div className="container">
        <div className="flex justify-between flex-wrap mess bg-[#FBFBFB] h-[250px]">
          {GardenCare.map((item: GardenCareType) => (
            <div key={item.id}>
              <img src={item.img} alt="img" />
              <h3 className="text-[17px] font-bold mt-[15px] text-[#3D3D3D]">
                {item.title}
              </h3>
              <p className="w-[204px] text-[14px] text-[#727272] font-normal mt-[9px]">
                {item.dacument}
              </p>
            </div>
          ))}
          <div>
            <p className="text-[18px] font-bold text-[#3D3D3D] mt-[5px]">
              Would you like to join newsletters?
            </p>
            <div className="flex mt-[18px]">
              <input
                className=" bg-[#ffffff] rounded-bl-6 w-[ 269px] h-[40px] outline-none pl-[11px] "
                type="text"
                placeholder="enter your email address..."
              />
              <ButtonN Width={85} title="Join" />
            </div>
            <p className="text-[13px] text-[#727272] font-normal leading-[22px] w-[354px] mt-[17px]">
              We usually post offers and challenges in newsletter. We’re your
              online houseplant destination. We offer a wide range of
              houseplants and accessories shipped directly from our (green)
              house to yours!
            </p>
          </div>
        </div>
        <div className="call flex justify-between flex-wrap w-full bg-[#46A3581A]">
          <div className="pt-[5px]">
            <Image src={Logo} alt="Logo" />
          </div>
          <div className="flex gap-[9px] items-center">
            <img
              className="w-[20px]"
              src="https://imgs-green-shop.vercel.app/imgs/Location.svg"
              alt="img"
            />
            <p className="w-[176px] text-[14px] font-normal text-[#3D3D3D]">
              70 West Buckingham Ave. Farmingdale, NY 11735
            </p>
          </div>
          <div className="flex gap-[9px] items-center">
            <img
              className="w-[20px]"
              src="https://imgs-green-shop.vercel.app/imgs/Message.svg"
              alt="img"
            />
            <p className="w-[176px] text-[14px] font-normal text-[#3D3D3D]">
              contact@greenshop.com
            </p>
          </div>
          <div className="flex gap-[9px] items-center">
            <img
              className="w-[20px]"
              src="https://imgs-green-shop.vercel.app/imgs/Calling.svg"
              alt="img"
            />
            <p className="w-[176px] text-[14px] font-normal text-[#3D3D3D]">
              +88 01911 717 490
            </p>
          </div>
        </div>
        <div className="flex justify-between flex-wrap w-full h-[236px] bg-[#FBFBFB] footerEnd">
          <div>
            <h3 className="text-[18px] text-[#3D3D3D] font-bold mt-[32px]">
              My Account
            </h3>
            <p className="text-[14px] text-[#3D3D3D] font-normal leading-[30px]">
              My Account
            </p>
            <p className="text-[14px] text-[#3D3D3D] font-normal leading-[30px]">
              Our stores
            </p>
            <p className="text-[14px] text-[#3D3D3D] font-normal leading-[30px]">
              Contact us
            </p>
            <p className="text-[14px] text-[#3D3D3D] font-normal leading-[30px]">
              Career
            </p>
            <p className="text-[14px] text-[#3D3D3D] font-normal leading-[30px]">
              Specials
            </p>
          </div>
          <div>
            <h3 className="text-[18px] text-[#3D3D3D] font-bold mt-[32px]">
              Help & Guide
            </h3>
            <p className="text-[14px] text-[#3D3D3D] font-normal leading-[30px]">
              Help Center
            </p>
            <p className="text-[14px] text-[#3D3D3D] font-normal leading-[30px]">
              How to Buy
            </p>
            <p className="text-[14px] text-[#3D3D3D] font-normal leading-[30px]">
              Shipping & Delivery
            </p>
            <p className="text-[14px] text-[#3D3D3D] font-normal leading-[30px]">
              Product Policy
            </p>
            <p className="text-[14px] text-[#3D3D3D] font-normal leading-[30px]">
              How to Return
            </p>
          </div>
          <div>
            <h3 className="text-[18px] text-[#3D3D3D] font-bold mt-[32px]">
              Categories
            </h3>
            <p className="text-[14px] text-[#3D3D3D] font-normal leading-[30px]">
              House Plants
            </p>
            <p className="text-[14px] text-[#3D3D3D] font-normal leading-[30px]">
              Potter Plants
            </p>
            <p className="text-[14px] text-[#3D3D3D] font-normal leading-[30px]">
              Seeds
            </p>
            <p className="text-[14px] text-[#3D3D3D] font-normal leading-[30px]">
              Small Plants
            </p>
            <p className="text-[14px] text-[#3D3D3D] font-normal leading-[30px]">
              Accessories
            </p>
          </div>
          <div className="mt-[33px]">
            <h3 className="text-[18px] text-[#3D3D3D] font-bold">
              Social Media
            </h3>
            <div className="flex justify-between gap-[10px] mt-[20px]">
              <div className="flex justify-center items-center w-[30px] h-[30px] border border-[#46A35833] rounded-[4px] ">
                <Image src={Facebook} alt="img" />
              </div>
              <div className="flex justify-center items-center w-[30px] h-[30px] border border-[#46A35833] rounded-[4px] ">
                <Image src={Instagram} alt="img" />
              </div>
              <div className="flex justify-center items-center w-[30px] h-[30px] border border-[#46A35833] rounded-[4px] ">
                <Image src={Linkedin} alt="img" />
              </div>
              <div className="flex justify-center items-center w-[30px] h-[30px] border border-[#46A35833] rounded-[4px] ">
                <Image src={Twitter} alt="img" />
              </div>
              <div className="flex justify-center items-center w-[30px] h-[30px] border border-[#46A35833] rounded-[4px] ">
                <Image src={Union} alt="img" />
              </div>
            </div>
            <div className="mt-[33px]">
              <h3 className="text-[18px] text-[#3D3D3D] font-bold">
                We accept
              </h3>
              <Image className="mt-[5px]" src={payy} alt="imga" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
