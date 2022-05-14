import { useRouter } from "next/router";

export default function Post() {
  const { query } = useRouter();

  return (
    <div>
      <div> {query.key} </div>
    </div>
  );
}
