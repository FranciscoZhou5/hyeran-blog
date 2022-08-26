import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import getPosts from "../../../../lib/getPosts";

import MarkdownRenderer from "../../../../components/MarkdownRenderer";
import { Post } from "../../../../types/Post";

interface Props {
  post: Post;
}

const Post: NextPage<Props, {}> = (props) => {
  const [post, setPost] = useState<Post>({} as Post);

  useEffect(() => {
    setPost(props.post);
  }, []);

  return (
    <div>
      <Head>
        <title> {post?.data?.title} </title>
      </Head>

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

export const getStaticProps: GetStaticProps<{}, { key: string }> = async ({ params }) => {
  const posts = getPosts();

  if (!params?.key) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post: posts.filter((item) => item.data.key === params.key)[0],
    },
    revalidate: 10,
  };
};

export default Post;
