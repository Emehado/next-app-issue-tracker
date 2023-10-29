import Image from "next/image";
import Link from "next/link";

interface User {
  id: number;
  name: string;
}

export default async function Home() {
  return (
    <main className="container">
      <Link href="/issues">
        <button className="btn btn-ghost">All Issues</button>
      </Link>
    </main>
  );
}
