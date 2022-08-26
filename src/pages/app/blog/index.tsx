import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

import getPosts from "../../../lib/getPosts";
import { Post } from "../../../types/Post";
import Posts from "../../../components/Home/Posts";

interface Props {
  posts: Post[];
}

const Home: NextPage<Props, {}> = (props) => {
  const [posts, setPosts] = useState<Post[]>([]);
  const postsTitleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setPosts(props.posts);
  }, [props.posts]);

  function scrollToPosts() {
    postsTitleRef?.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <div className="w-screen flex justify-center flex-col">
      <Head>
        <title> Hyeran blog </title>
      </Head>

      <main className="px-3 text-center w-full flex flex-col items-center">
        <div className="mb-20 xl:mb-32 2xl:mb-60 xl:w-[490px]">
          <h1 className="mb-6 md:mb-8 xl:mb-12"> Hyeran Blog </h1>

          <div className="bg-home-gradient py-10 px-16 sm:py-14 rounded-md mb-4 md:mb-8 md:py-24 md:px-32 xl:mb-12">
            <h1> Blog da EM1A </h1>
          </div>

          <p className="mb-4 md:mb-6 xl:mb-16">
            Uma coleção grandiosas de pérolas capturadas em nossas salas de aulas.
          </p>

          <button
            onClick={scrollToPosts}
            className="bg-white text-black font-bold rounded-md h-12 w-48 hover:opacity-75 duration-200"
          >
            Ver posts
          </button>
        </div>

        <Posts posts={posts} titleRef={postsTitleRef} />

        <section className="w-full mt-8 md:mt-32 px-4 md:px-0 xl:w-[700px]">
          <div className="text-left flex flex-col items-center justify-center">
            <div className="xl:w-[490px] text-center md:text-left">
              <h1>Galeria</h1>
              <p> As melhores fotos da nossa turma! </p>
            </div>
            <div className="py-10 flex">
              <Link passHref href="/app/gallery">
                <a className="bg-home-gradient text-white font-bold rounded-md h-12 w-48 hover:opacity-75 duration-200 flex justify-center items-center cursor-pointer">
                  Acessar
                </a>
              </Link>
            </div>
          </div>
        </section>
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
