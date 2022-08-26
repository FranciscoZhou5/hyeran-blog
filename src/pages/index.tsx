import type { GetServerSideProps, NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div>
      <div></div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return {
    props: {},
    redirect: {
      destination: "/app/blog",
      permanent: true,
    },
  };
};

export default Home;
