import Link from "next/link";
import NewsLetter from "./NewsLetter/page";

export default function Home() {
  return (
    <div className="">
      <Link href='/newsletter'><NewsLetter /></Link>
    </div>
  );
}
