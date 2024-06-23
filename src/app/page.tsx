"use client";
import HeroCarusel from "@/components/heroCarusel";
import HeroCaruselMobile from "@/components/heroCarusel/HeroCaruselMobile";
import RangSlider from "@/components/RangeSlider/RangSlider";
import { ButtonN } from "@/components/btn";
import { useEffect, useMemo, useState } from "react";
import axios from "axios";
import { URL } from "@/service/request";
import Image from "next/image";
import SuperSale from "../../public/SuperSale1.png";
import ProductN from "@/components/Products/Products";
import { Pagination, Popover } from "antd";

interface GetCategoryType {
  category_id: string;
  category_name: string;
}
interface SizeTypes {
  size_Id: number;
  size_Name: string;
}
interface GetProductType {
  product_id: string;
  product_name: string;
  cost: number;
  image: string;
}
interface PostType {
  id: string;
  img: string;
  min: string;
  title: string;
  dacument: string;
}
interface TagType {
  tag_Id: number;
  tag_name: string;
  path: string | null;
}

function Home() {
  const [categoryData, setCategoryData] = useState<Array<GetCategoryType>>([]);
  const sizeData: SizeTypes[] = [
    {
      size_Id: 1,
      size_Name: "Small",
    },
    {
      size_Id: 2,
      size_Name: "Medium",
    },
    {
      size_Id: 3,
      size_Name: "Large",
    },
  ];
  const [refrash, setRefrash] = useState<boolean>(false);
  const [isLoading, SetIsloading] = useState(false);
  const TagData: TagType[] = [
    {
      tag_Id: 1,
      tag_name: "All Plants",
      path: null,
    },
    {
      tag_Id: 2,
      tag_name: "New Arrivals",
      path: "new-arrival",
    },
    {
      tag_Id: 3,
      tag_name: "Sale",
      path: "sale",
    },
  ];
  const [products, setProducts] = useState<Array<GetProductType>>([]);
  const [categoryId, setCategoryId] = useState<string>("");
  const [tagId, setTagId] = useState<string | null>("");
  const [Page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(10);
  const [sizeId, SetSizId] = useState<string | null>(null);
  const [arrow, setArrow] = useState<string>("Show");
  const [rangValue, setRangValue] = useState<Array<number> | null | string>(
    null
  );

  const mergedArrow = useMemo(() => {
    if (arrow === "Hide") {
      return false;
    }

    if (arrow === "Show") {
      return true;
    }

    return {
      pointAtCenter: true,
    };
  }, [arrow]);

  const fetchProducts = () => {
    SetIsloading(true);
    axios
      .get(`${URL}/products`, {
        params: {
          page: Page,
          limit: 10,
          name: null,
          category: categoryId,
          status: tagId,
          size: sizeId,
          max_price: rangValue ? rangValue[1] : null,
          min_price: rangValue ? rangValue[0] : null,
        },
      })
      .then((res) => {
        SetIsloading(false);
        setLimit(res.data.total_count);
        const productsData = res.data.products.map((item: any) => {
          const data: GetProductType = {
            product_id: item.product_id,
            product_name: item.product_name,
            cost: parseFloat(item.cost),
            image: item.image_url[0],
          };
          return data;
        });
        setProducts(productsData);
      })
      .catch((error) => {
        SetIsloading(false);
        console.error("Error fetching products:", error);
      });
  };

  useEffect(() => {
    axios
      .get(`${URL}/categories?page=1&limit=1000`)
      .then((res) => {
        setCategoryData(res.data.categories);
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
      });
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [categoryId, sizeId, rangValue, Page, limit, tagId]);

  const HandleSort = (name: string) => {
    SetIsloading(true);
    setTimeout(() => {
      if (name === "title") {
        setProducts((prevProducts) =>
          [...prevProducts].sort((a, b) =>
            a.product_name < b.product_name ? -1 : 1
          )
        );
      } else {
        setProducts((prevProducts) =>
          [...prevProducts].sort((a, b) => a.cost - b.cost)
        );
      }
      SetIsloading(false);
    }, 400);
  };

  const PostsData = [
    {
      id: "1",
      img: "https://imgs-green-shop.vercel.app/imgs/01.jpg",
      min: "September 12  I Read in 6 minutes",
      title: "Cactus & Succulent Care Tips",
      dacument:
        "Cacti are succulents are easy care plants for any home or patio. ",
    },
    {
      id: "2",
      img: "https://imgs-green-shop.vercel.app/imgs/02.jpg",
      min: "September 13  I Read in 2 minutes",
      title: "Top 10 Succulents for Your Home",
      dacument: "Best in hanging baskets. Prefers medium to high light.",
    },
    {
      id: "3",
      img: "https://imgs-green-shop.vercel.app/imgs/03.jpg",
      min: "September 15  I Read in 3 minutes",
      title: "Cacti & Succulent Care Tips",
      dacument:
        "Cacti and succulents thrive in containers and because most are..",
    },
    {
      id: "4",
      img: "https://imgs-green-shop.vercel.app/imgs/04.jpg",
      min: "September 15  I Read in 2 minutes",
      title: "Best Houseplants Room by Room",
      dacument: "The benefits of houseplants are endless. In addition to..",
    },
  ];

  return (
    <>
      <section className="pt-[12px] pb-[46px]">
        <div className="container">
          <div className="hidden sm:flex">
            <HeroCarusel />
          </div>
          <div className="flex sm:hidden">
            <HeroCaruselMobile />
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="flex justify-between gap-[50px]">
            <div className="w-[25%] bg-[#FBFBFB] p-[15px]">
              <div>
                <h2 className="text-[18px] font-bold text-[#3D3D3D] leading-[16px]">
                  Categories
                </h2>
                <ul className="pl-[12px] pt-[7px] mb-[36px]">
                  {categoryData &&
                    Array.isArray(categoryData) &&
                    categoryData?.length > 0 &&
                    categoryData?.map((item: GetCategoryType) => (
                      <li
                        onClick={() => {
                          SetIsloading(true);
                          setTimeout(() => {
                            setCategoryId(item.category_name);
                          }, 400);
                        }}
                        className={`${
                          categoryId == item.category_name
                            ? "text-[#46A358] font-bold"
                            : "font-normal"
                        } flex text-[15px] text-[#3D3D3D]  hover:font-bold hover:text-[#46A358] items-center duration-300 leading-[40px] justify-between cursor-pointer`}
                        key={item.category_id}
                      >
                        <span>{item.category_name}</span>
                      </li>
                    ))}
                </ul>
              </div>
              <div>
                <h2 className="text-[18px] font-bold text-[#3D3D3D] mb-[20px] leading-[16px]">
                  Price Range
                </h2>
                <div>
                  <RangSlider setRangValue={setRangValue} />
                  <div className="mt-[16px]">
                    <ButtonN title="Filter" Width={100} />
                  </div>
                </div>
                <div className="mt-[46px]">
                  <h2 className="text-[18px] font-bold text-[#3D3D3D] leading-[16px]">
                    Size
                  </h2>
                  <ul className="pl-[12px] pt-[7px] mb-[36px]">
                    {sizeData.map((item: SizeTypes) => (
                      <li
                        onClick={() => SetSizId(item.size_Name)}
                        className={`${
                          sizeId == item.size_Name
                            ? "text-[#46A358] font-semibold"
                            : "font-normal"
                        } flex text-[15px] text-[#3D3D3D] font-normal hover:font-bold hover:text-[#46A358] items-center duration-300 leading-[40px] justify-between cursor-pointer`}
                        key={item.size_Id}
                      >
                        <span>{item.size_Name}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <Image
                    className="w-[370px]"
                    src={SuperSale}
                    alt="img"
                    width={370}
                    height={470}
                  />
                </div>
              </div>
            </div>
            <div className="w-[75%]">
              <div className="flex items-center justify-between">
                <div>
                  <ul className="flex items-center space-x-[38px]">
                    {TagData.map((item: TagType) => (
                      <li
                        onClick={() => {
                          SetIsloading(true);
                          setTimeout(() => {
                            setTagId(item.path);
                          }),
                            500;
                        }}
                        className={`${
                          tagId == item.tag_name
                            ? "text-[#46A358] font-medium"
                            : "font-normal"
                        } text-[#3D3D3D] text-[15px] cursor-pointer duration-300`}
                        key={item.tag_Id}
                      >
                        {item.tag_name}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex items-center cursor-pointer">
                  <h2 className="text-[15px] text-[#3D3D3D] font-medium">
                    Short by:
                  </h2>
                  <Popover
                    placement="bottom"
                    title={""}
                    content={
                      <ul className=" space-y-2 w-[80px] text-center text-[15px] font-medium">
                        <li
                          onClick={() => HandleSort("title")}
                          className="hover:scale-125 duration-300 hover:font-bold cursor-pointer"
                        >
                          Title sort
                        </li>
                        <li
                          onClick={() => HandleSort("cost")}
                          className="hover:scale-125 duration-300 hover:font-bold cursor-pointer"
                        >
                          Price sort
                        </li>
                      </ul>
                    }
                    arrow={mergedArrow}
                  >
                    <h2 className="text-[15px] text-[#3D3D3D] font-medium">
                      Default sorting
                    </h2>
                  </Popover>
                </div>
              </div>
              <div className="flex mt-[31px] gap-[41px] flex-wrap">
                {isLoading ? (
                  <div className="flex justify-center items-center w-full h-[300px]">
                    <div role="status">
                      <svg
                        aria-hidden="true"
                        className="w-8 h-8 text-gray-200 animate-spin dark:text-[#E5E5E5] fill-[#46A358]"
                        viewBox="0 0 100 101"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                          fill="currentColor"
                        />
                        <path
                          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                          fill="currentFill"
                        />
                      </svg>
                      <span className="sr-only">Loading...</span>
                    </div>
                  </div>
                ) : (
                  products.map((item: GetProductType) => (
                    <ProductN
                      key={item.product_id}
                      id={item.product_id}
                      image={item.image}
                      title={item.product_name}
                      price={`$${item.cost}.00`}
                    />
                  ))
                )}
              </div>
              <div className="flex justify-end mt-[50px]">
                <Pagination
                  onChange={(a) => {
                    SetIsloading(true);
                    setTimeout(() => {
                      setPage(a);
                    }, 500);
                  }}
                  defaultCurrent={Page}
                  total={limit}
                />
              </div>
            </div>
          </div>
          <div className="block justify-between mt-[219px] lg:flex w-full">
            <div className="flex">
              <img
                src="https://imgs-green-shop.vercel.app/imgs/image%2014.jpg"
                alt="img"
              />
              <div>
                <div className=" flex justify-end  text-end mt-[75px]">
                  <h2 className="text-[22px] w-[220px] text-[#3D3D3D] font-extrabold">
                    SUMMER CACTUS & SUCCULENTS
                  </h2>
                </div>
                <p className="text-[14px] text-[#727272] mt-[8px] font-normal text-end">
                  We are an online plant shop offering a wide range of cheap and
                  trendy plants
                </p>
                <div className="flex justify-end mt-[22px]">
                  <ButtonN Width={140} title="Find More" />
                </div>
              </div>
            </div>
            <div className="flex">
              <img
                src="https://imgs-green-shop.vercel.app/imgs/image%2015.jpg"
                alt="img"
              />
              <div>
                <div className=" flex justify-end text-end mt-[75px]">
                  <h2 className="text-[22px] w-[220px] text-[#3D3D3D] font-extrabold">
                    SUMMER CACTUS & MUCH MORE
                  </h2>
                </div>
                <p className="text-[14px] text-[#727272] mt-[8px] font-normal text-end">
                  We are an online plant shop offering a wide range of cheap and
                  trendy plants
                </p>
                <div className="flex justify-end mt-[22px]">
                  <ButtonN Width={140} title="Find More" />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-[138px]">
            <div className="text-center">
              <h1 className="text-[30px] font-bold text-[#3D3D3D]">
                Our Blog Posts
              </h1>
              <p className="text-[14px] text-[#727272] font-normal">
                We are an online plant shop offering a wide range of cheap and
                trendy plants.
              </p>
            </div>
            <div className="flex flex-wrap justify-between pt-[35px]">
              {PostsData.map((item: PostType) => (
                <div key={item.id} className="mb-6">
                  <img
                    className="w-[268px] h-[195.17px]"
                    src={item.img}
                    alt="Postimg"
                  />
                  <p className="text-[14px] text-[#46A358] font-medium mt-[8px]">
                    {item.min}
                  </p>
                  <h3 className="text-[20px] font-bold text-[#3D3D3D] leading-[26px] w-[202px]">
                    {item.title}
                  </h3>
                  <p className="text-[14px] font-normal text-[#727272] leading-[22px] w-[242px]">
                    {item.dacument}
                  </p>
                  <div className="mt-[9px]">
                    <button className="text-[14px] text-[#3D3D3D] font-medium hover:text-[#46A358] duration-300">
                      Read More
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Home;
