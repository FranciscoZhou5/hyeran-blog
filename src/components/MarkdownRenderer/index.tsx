import Image from "next/image";
import ReactMarkdown from "react-markdown";
import { SpecialComponents } from "react-markdown/lib/ast-to-react";
import { NormalComponents } from "react-markdown/lib/complex-types";

interface Props {
  content: string;
}

const rendererComponents: Partial<Omit<NormalComponents, keyof SpecialComponents> & SpecialComponents> = {
  p: (props) => {
    //@ts-ignore
    if (props.node.children[0].tagName === "img") {
      const imgProps = props.node.children[0];
      //@ts-ignore
      const { src, alt } = imgProps.properties as { src: string; alt: string };

      return (
        <div className="relative w-screen sm:w-[442px] md:w-[468px] md:h-72 h-56 xl:w-[768px] xl:h-96">
          <Image src={src} objectFit="cover" layout="fill" alt={alt} />
        </div>
      );
    }

    return <p className="text-white px-3 text-justify py-4 indent-4 md:w-[540px] xl:w-[768px]"> {props.children} </p>;
  },
};

export default function MarkdownRenderer({ content }: Props) {
  return (
    <>
      <ReactMarkdown components={rendererComponents} children={content} />
    </>
  );
}
