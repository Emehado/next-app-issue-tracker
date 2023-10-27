import Image from "next/image";
import Link from "next/link";

interface User {
  id: number;
  name: string;
}

export default async function Home() {
  return (
    <main>
      <h1>Hello world</h1>
    </main>
  );
}
