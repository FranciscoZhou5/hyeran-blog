import Link from "next/link";
import LogoIcon from "../Icons/Logo";
import { BsChevronDown } from "react-icons/bs";
import { useRouter } from "next/router";
import { useState } from "react";

export default function AppHeader() {
  const [openDropdownMenu, setOpenDropdownMenu] = useState(false);
  const router = useRouter();

  const links = [
    {
      title: "Home",
      href: "/app/blog",
      newTab: false,
    },
    {
      title: "Sobre",
      href: "/app/about",
      newTab: false,
    },
    {
      title: "Github",
      href: "https://github.com/Francisco5g/hyeran-b2",
      newTab: true,
    },
  ];

  return (
    <>
      <header className="px-8 md:mb-8 md:px-48 lg:px-60 xl:px-72 2xl:px-96 py-6 h-20 flex flex-row items-center justify-between">
        <Link href="/app/blog" passHref>
          <a>
            <div className="flex flow-row items-center w-28 h-8 cursor-pointer ">
              {/* <LogoIcon /> */}
              <span className="ml-2 hover:text-white duration-200"> Hyeran Blog </span>
            </div>
          </a>
        </Link>

        <nav className="space-x-8 hidden md:flex">
          {links.map((link) => (
            <Link passHref href={link.href} key={link.title}>
              <a
                className={`${router.asPath === link.href ? "text-white" : "text-gray"} duration-200 hover:text-white`}
                target={link.newTab ? "_blank" : ""}
              >
                {link.title}
              </a>
            </Link>
          ))}
        </nav>

        <div className="w-24 h-8 flex justify-center items-center md:invisible">
          <button onClick={() => setOpenDropdownMenu(!openDropdownMenu)}>
            <BsChevronDown className={`duration-200 ${openDropdownMenu && "rotate-180"}`} size={24} />
          </button>
        </div>
      </header>

      <nav className={`h-40 z-10 flex flex-col justify-center px-10 text-center ${!openDropdownMenu && "hidden"}`}>
        {links.map((link) => (
          <div key={link.title} className="my-1">
            <Link href={link.href} passHref>
              <a className="text-[16px] text-white underline"> {link.title} </a>
            </Link>
          </div>
        ))}
      </nav>
    </>
  );
}
