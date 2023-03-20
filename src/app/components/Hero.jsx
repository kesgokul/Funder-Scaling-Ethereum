import Image from "next/image";
import featureImage from "../../../public/images/hero-feature.png";
import { Righteous } from "next/font/google";
const righteous = Righteous({ subsets: ["latin"], weight: ["400"] });

export default function Hero() {
  return (
    <main className="bg-transparent  w-11/12 max-w-6xl mt-30 mx-auto flex justify-between items-center z-10">
      <section className="flex flex-col w-2/5">
        <h1
          className={`${righteous.className} text-6xl font-bold text-white uppercase`}
        >
          Lorem ipsum dolor sit amet.
        </h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum,
          incidunt.
        </p>
      </section>
      <section className="w-1/2 h-100 border-2 border-orange-400">
        <figure className="w-full h-full relative">
          <Image src={featureImage} fill style={{ objectFit: "contain" }} />
        </figure>
      </section>
    </main>
  );
}
