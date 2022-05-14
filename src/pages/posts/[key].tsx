import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import getPosts from "../../lib/getPosts";

import { BsChevronDown } from "react-icons/bs";
import AppHeader from "../../components/AppHeader";
import MarkdownRenderer from "../../components/MarkdownRenderer";
import { Post } from "../../definitions/Post";
import Link from "next/link";

interface Props {
  posts: Post[];
}

const Post: NextPage<Props, {}> = ({ posts }) => {
  const [post, setPost] = useState<Post>({} as Post);
  const { query } = useRouter();

  useEffect(() => {
    if (posts) {
      setPost(posts.filter((i) => i.data.key === query.key)[0]);
    }
  }, [posts, query.key]);

  return (
    <div>
      <Head>
        <title> {post?.data?.title} </title>
      </Head>

      {/* <div className="absolute top-24 xl:left-[396px]">
        <Link href="/" passHref>
          <a className="hover:text-white duration-200">
            <BsChevronDown size={24} className="rotate-90" />
          </a>
        </Link>
      </div> */}

      <main className="flex justify-center items-center w-screen">
        <div className="text-left w-screen flex justify-center items-center flex-col">
          <h1 className="text-md px-3">{post?.data?.title}</h1>
          <div className="px-2">
            <p className="text-[16px]"> {post?.data?.author} </p>
          </div>

          <div className="pt-8 w-screen flex justify-center items-center flex-col">
            <MarkdownRenderer content={post?.content} />
          </div>
        </div>
      </main>

      <footer></footer>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const allPostsContent = getPosts();

  const paths = allPostsContent.map((post) => ({
    params: {
      key: post.data.key.toString(),
    },
  }));

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  return {
    props: {
      posts: getPosts(),
    },
  };
};

export default Post;
