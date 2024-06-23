"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavbarType {
  id: number;
  title: string;
  path: string;
  isActive: boolean;
}

export const Navbar = () => {
  const pathName = usePathname();

  const NavbarList = [
    {
      id: 1,
      title: "Home",
      path: "/",
      isActive: pathName == "/" ? true : false,
    },
    {
      id: 2,
      title: "Shop",
      path: "/components/Shop",
      isActive: pathName == "/components/Shop" ? true : false,
    },
    {
      id: 3,
      title: "Plant Care",
      path: "/components/Plantcare",
      isActive: pathName == "/components/Plantcare" ? true : false,
    },
    {
      id: 4,
      title: "Blogs",
      path: "/components/Blogs",
      isActive: pathName == "/components/Blogs" ? true : false,
    },
  ];
  return (
    <nav>
      <ul className=" hidden md:flex items-center space-x-[20px] lg:space-x-[50px]">
        {NavbarList.map((item: NavbarType) => (
          <li
            key={item.id}
            className={`font-normal ${
              item.isActive ? "font-bold border-b-[3px] " : "font-normal"
            } text-[14px] leading-[20.11px] text-[#3D3D3D]  pb-[30px] border-[#46A358] lg:text-[16px]`}
          >
            <Link href={item.path}>{item.title}</Link>  
          </li>
        ))}
      </ul>
    </nav>
  );
};
