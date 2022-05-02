import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";

import LogoIcon from "../components/Icons/Logo";
import { BsChevronDown } from "react-icons/bs";
import getPosts from "../lib/getPosts";
import { Post } from "../definitions/Post";

interface Props {
  posts: Post[];
}

const Home: NextPage<Props, {}> = (props) => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [openDropdownMenu, setOpenDropdownMenu] = useState(false);

  useEffect(() => {
    setPosts(props.posts);
  }, [props.posts]);

  return (
    <div className="w-screen flex justify-center flex-col">
      <Head>
        <title> Hyeran blog </title>
      </Head>

      <header className="px-8 md:px-48 lg:px-60 xl:px-72 2xl:px-96 py-6 h-20 flex flex-row items-center justify-between">
        <div className="flex flow-row items-center w-24 h-8">
          <LogoIcon />
          <span className="ml-2"> Hyeran </span>
        </div>

        <nav className="space-x-8 hidden md:flex">
          <Link passHref href="/about">
            <a className="text-gray duration-200 hover:text-white"> Sobre </a>
          </Link>
          <Link passHref href="https://github.com/Francisco5g/hyeran-b2">
            <a className="text-gray duration-200 hover:text-white"> Github </a>
          </Link>
        </nav>

        <div className="w-24 h-8 flex justify-center items-center md:invisible">
          <button onClick={() => setOpenDropdownMenu(!openDropdownMenu)}>
            <BsChevronDown className={`duration-200 ${openDropdownMenu && "rotate-180"}`} size={24} />
          </button>
        </div>
      </header>

      <div className={`h-40 w-64 z-10 ${!openDropdownMenu && "hidden"}`}>
        <Link passHref href="">
          <a href=""> Sobre </a>
        </Link>
      </div>

      <main className="pt-8 px-3 text-center w-full md:px-48 lg:px-60 xl:px-72 2xl:px-48 flex flex-col items-center">
        <div className="mb-12 xl:mb-32 xl:w-[490px]">
          <h1 className="mb-6 md:mb-8 xl:mb-12"> Hyeran Blog </h1>

          <div className="bg-home-gradient py-10 px-16 rounded-md mb-4 md:mb-8 md:py-24 md:px-32 xl:mb-12">
            <h1> Blog da EM1A </h1>
          </div>

          <p className="mb-4 md:mb-6 xl:mb-16"> Uma coleção grandiosas de pérolas capturadas em nossas salas de aulas. </p>

          <button className="bg-white text-black font-bold rounded-md h-12 w-48"> Ver posts </button>
        </div>

        <div> Francisco </div>

        <div className="w-full px-4 md:px-0 xl:w-[490px]">
          <div className="text-left">
            <h1> Posts </h1>
          </div>
        </div>
      </main>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  return {
    props: {
      posts: getPosts(),
    },
  };
};

export default Home;
