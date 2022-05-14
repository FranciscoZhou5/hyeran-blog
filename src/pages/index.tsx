import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

import getPosts from "../lib/getPosts";
import { Post } from "../definitions/Post";
import { convertDateToReadableFormat } from "../lib/convertDateToReadableFormat";

interface Props {
  posts: Post[];
}

const Home: NextPage<Props, {}> = (props) => {
  const [posts, setPosts] = useState<Post[]>([]);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setPosts(props.posts);
  }, [props.posts]);

  function scrollToPosts() {
    ref?.current?.scrollIntoView({ behavior: "smooth", block: "center" });
  }

  return (
    <div className="w-screen flex justify-center flex-col">
      <Head>
        <title> Hyeran blog </title>
      </Head>

      <main className="px-3 text-center w-full md:px-48 lg:px-60 xl:px-72 2xl:px-48 flex flex-col items-center">
        <div className="mb-20 xl:mb-32 2xl:mb-60 xl:w-[490px]">
          <h1 className="mb-6 md:mb-8 xl:mb-12"> Hyeran Blog </h1>

          <div className="bg-home-gradient py-10 px-16 sm:py-14 rounded-md mb-4 md:mb-8 md:py-24 md:px-32 xl:mb-12">
            <h1> Blog da EM1A </h1>
          </div>

          <p className="mb-4 md:mb-6 xl:mb-16">
            Uma coleção grandiosas de pérolas capturadas em nossas salas de aulas.
          </p>

          <button onClick={scrollToPosts} className="bg-white text-black font-bold rounded-md h-12 w-48">
            Ver posts
          </button>
        </div>

        <div className="w-full px-4 md:px-0 xl:w-[700px]">
          <div className="text-left flex flex-col items-center">
            <div className="xl:w-[490px] text-center md:text-left">
              <h1 className="" ref={ref}>
                Posts
              </h1>
              <p> Clique em um post abaixo! </p>
            </div>

            <div className="md:w-[650px] xl:w-[700px] pt-4 flex flex-col md:flex-row justify-between">
              {posts.map((post) => (
                <Link key={post.data.key} passHref href={`/posts/${post.data.key}`}>
                  <a className="group hover:cursor-pointer w-[300px] mb-10 xl:w-96 bg-white rounded-md">
                    <div className="w-[300px] h-56 xl:w-96 relative rounded-md">
                      <Image
                        className="rounded-t-md group-hover:scale-110 duration-200"
                        src={post.data.thumb}
                        objectFit="cover"
                        layout="fill"
                        alt={post.data.key}
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-black group-hover:-translate-y-1 duration-200">{post.data.title}</h3>

                      <p className="font-[16px] font-bold">
                        <span className="bg-clip-text bg-home-gradient group-hover:text-transparent duration-200">
                          {post.data.author}
                        </span>
                        &ensp;
                        <span className="group-hover:text-black duration-200">
                          {convertDateToReadableFormat(post.data.date)}
                        </span>
                      </p>
                    </div>
                  </a>
                </Link>
              ))}
            </div>
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
