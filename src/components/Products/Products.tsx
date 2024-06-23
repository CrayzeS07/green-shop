import React from "react";
import { Imgpro } from "../SrarickImg";
import Link from "next/link";

interface GetProduct {
  id: string;
  title: string;
  price: string;
  image: string;
}
 
export const ProductN: React.FC<GetProduct> = ({ id, image, title, price }) => {
  return (
    <div className="ProductB w-[258px]">
      <div className="pt-[31px] pb-[19px]">
        <Imgpro src={image} alt="img Pro" width={250} height={250} />
        <div className="flex justify-between mt-[36px]">
          <Link href={`/${"id"}`}>
            <h2 className=" font-normal text-[#3D3D3D] leading-[16px]">
              {title}
            </h2>
            <span className="text-[18px] mt-[6px] text-[#46A358] font-bold ">
              {price}
            </span>
          </Link>
          <div className="KorzinkaBTN mt-[5px] w-[40px] h-[40px] hover:bg-[#a3a3a357] duration-300 rounded-[12px] cursor-pointer flex justify-center">
            <img
              className="w-[25px] h-[25px] mt-[6px]"
              src="https://imgs-green-shop.vercel.app/imgs/korzinka.svg"
              alt="imgs"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductN;
