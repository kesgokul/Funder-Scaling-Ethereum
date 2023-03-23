import Image from "next/image";
import Shadow from "@/components/Shadow";
import Hero from "@/components/Hero";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="w-screen min-h-screen ">
      <div className="absolute top-0 left-4 z-0">
        <Shadow w="400" h="400" />
      </div>
      <div className="hidden lg:block lg:absolute lg:bottom-0 lg:right-48">
        <Shadow w="400" h="400" />
      </div>
      <Hero />
    </main>
  );
}
