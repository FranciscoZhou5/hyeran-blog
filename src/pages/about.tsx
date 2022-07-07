import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";

import { BsPlayFill, BsPauseFill } from "react-icons/bs";

const About: NextPage = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const playerRef = useRef<HTMLAudioElement>(null);

  function togglePlayer() {
    if (isPlaying) {
      setIsPlaying(false);
      playerRef.current?.pause();
    } else {
      setIsPlaying(true);
      playerRef.current?.play();
    }
  }

  return (
    <div className="w-screen h-screen flex justify-center">
      <Head>
        <title> Sobre o Hyeran Blog </title>
      </Head>

      <main className="text-center">
        <h1> Olá, Mundo! </h1>

        <div className="mt-4 w-[300px] lg:w-[700px]">
          <p>
            Oi, esse site foi criado por
            <Link passHref href="https://www.instagram.com/zhoufran5gg/">
              <a target="_blank" className="duration-200 mx-1 text-white">
                @Francisco5g
              </a>
            </Link>
            e é baseado na nossas vivências nas aulas, as nossas pérolas, as nossas melhores brincadeiras(incluindo este
            domínio).
          </p>
        </div>

        {/* <div className="mt-56 flex flex-col items-center">
          <div className="relative h-56 w-56 lg:w-60 lg:h-5w-60">
            <Image src="/thumbnail.webp" objectFit="cover" layout="fill" alt="Music" />
          </div>

          <div className="mt-4">
            <h4> Dandelions - Ruth B. </h4>
          </div>

          <div>
            <input type="range" max={100} value="0" className="w-full" />
          </div>

          <div className="mt-4 h-12 flex justify-center items-center">
            <button onClick={togglePlayer} className="bg-white rounded-full flex justify-center items-center w-12 h-12">
              {isPlaying ? (
                <BsPauseFill size={32} color="#000" />
              ) : (
                <BsPlayFill size={32} color="#000" style={{ marginLeft: 3 }} />
              )}
            </button>
          </div>

          <audio src="/Ruth B. - Dandelions.mp3" ref={playerRef}></audio>
        </div> */}
      </main>
    </div>
  );
};

export default About;
