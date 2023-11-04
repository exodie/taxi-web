import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Home",
};

export default function Home() {
  return (
    <main>
      home
      <ol style={{ margin: "auto 35px" }}>
        <li>
          <button>
            <Link href={"/auth"}>Go to authorization page</Link>
          </button>
        </li>
        <li>
          <button>
            <Link href={"/auth/create"}>Go to registration page</Link>
          </button>
        </li>
      </ol>
    </main>
  );
}
