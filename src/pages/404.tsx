import Head from "next/head";
import Link from "next/link";

export default function PageNotFound() {
  return (
    <div className="w-full h-96 md:h-[560px] flex justify-center items-center">
      <Head>
        <title> Página não existente! </title>
      </Head>

      <div className="text-center">
        <h1> Página não encontrada! </h1>
        <p>
          Verifique se está acessando a rota correta ou volte para
          <Link passHref href="/">
            <a className="mx-1 hover:text-white duration-200">/Home</a>
          </Link>
        </p>
      </div>
    </div>
  );
}
