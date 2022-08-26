import Image from "next/image";
import Link from "next/link";
import { RefObject } from "react";
import { Post } from "../../types/Post";

interface Props {
  posts: Post[];
  titleRef: RefObject<HTMLHeadingElement>;
}

function convertDate(date: string) {
  return new Date(date).toLocaleDateString("pt-BR", { dateStyle: "medium" });
}

export default function Posts({ posts, titleRef }: Props) {
  return (
    <section className="w-full px-4 md:px-0 xl:w-[700px]">
      <div className="text-left flex flex-col items-center">
        <div className="xl:w-[490px] text-center md:text-left">
          <h1 ref={titleRef}> Posts </h1>
          <p> Clique em um post abaixo! </p>
        </div>

        <div className="md:w-[650px] xl:w-[700px] pt-4 flex flex-col md:flex-row justify-between">
          {posts.map((post) => (
            <Link key={post.data.key} passHref href={`/app/blog/posts/${post.data.key}`}>
              <a className="group hover:cursor-pointer w-[300px] mb-10 xl:w-96 bg-white rounded-md">
                <div className="w-[300px] h-56 xl:w-96 relative rounded-md">
                  <Image
                    className="rounded-t-md group-hover:scale-110 duration-200"
                    src={post.data.thumb}
                    objectFit="cover"
                    layout="fill"
                    alt={post.data.key}
                    priority
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-black group-hover:-translate-y-1 duration-200">{post.data.title}</h3>

                  <p className="font-[15px] font-bold">
                    <span className="bg-clip-text bg-home-gradient group-hover:text-transparent duration-200">
                      {post.data.author}
                    </span>
                    &ensp;
                    <span className="group-hover:text-black duration-200">{convertDate(post.data.date)}</span>
                  </p>
                </div>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
