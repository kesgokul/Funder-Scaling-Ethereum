import Image from "next/image";
import Shadow from "@/components/Shadow";
import Hero from "@/components/Hero";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="min-h-screen pt-40 bg-waves bg-cover bg-opacity-30 bg-green-900 bg-blend-darken ">
      <Hero />
    </main>
  );
}
