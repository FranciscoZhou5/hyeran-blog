import Link from "next/link";

export default function AppFooter() {
  return (
    <footer className="mt-40 md:mt-64 mb-8 flex flex-col items-center">
      <div>
        <span> Criado por </span>
        <Link passHref href="https://www.instagram.com/zhoufran5gg/">
          <a target="_blank" className="duration-200 hover:text-white">
            Francisco5g
          </a>
        </Link>
      </div>
    </footer>
  );
}
