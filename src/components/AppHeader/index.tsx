import Link from "next/link";

import LogoIcon from "../Icons/Logo";
import { BsChevronDown } from "react-icons/bs";
import { useHeaderContext } from "../../context/HeaderContext";

export default function AppHeader() {
  const { openDropdownMenu, setOpenDropdownMenu } = useHeaderContext();

  return (
    <div>
      <header className="px-8 mb-8 md:px-48 lg:px-60 xl:px-72 2xl:px-96 py-6 h-20 flex flex-row items-center justify-between">
        <Link href="/">
          <div className="flex flow-row items-center w-24 h-8 cursor-pointer ">
            <LogoIcon />
            <span className="ml-2 hover:text-white duration-200"> Hyeran </span>
          </div>
        </Link>

        <nav className="space-x-8 hidden md:flex">
          <Link passHref href="/about">
            <a className="text-gray duration-200 hover:text-white"> Sobre </a>
          </Link>
          <Link passHref href="https://github.com/Francisco5g/hyeran-b2">
            <a className="text-gray duration-200 hover:text-white" target="_blank">
              Github
            </a>
          </Link>
        </nav>

        <div className="w-24 h-8 flex justify-center items-center md:invisible">
          <button onClick={() => setOpenDropdownMenu(!openDropdownMenu)}>
            <BsChevronDown className={`duration-200 ${openDropdownMenu && "rotate-180"}`} size={24} />
          </button>
        </div>
      </header>

      <div className={`h-40 w-64 z-10 flex flex-col justify-center px-10 ${!openDropdownMenu && "hidden"}`}>
        <div>
          <Link href="/" passHref>
            <a className="text-[16px] text-white underline"> Principal </a>
          </Link>
        </div>
        <div>
          <Link href="/about" passHref>
            <a className="text-[16px] text-white underline"> Sobre </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
