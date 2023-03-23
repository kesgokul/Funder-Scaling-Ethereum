import Image from "next/image";
import featureImage from "../../public/images/hero-feature.png";
import { motion } from "framer-motion";
import { Righteous, Montserrat } from "next/font/google";
const righteous = Righteous({ subsets: ["latin"], weight: ["400"] });
const mont = Montserrat({ subsets: ["latin"], weight: ["400", "600"] });

export default function Hero() {
  return (
    <main className=" bg-transparent  w-11/12 max-w-6xl mx-auto flex justify-between items-center z-10">
      <section className="flex flex-col w-2/5 gap-4">
        <h1
          initial={{ opacity: 0 }}
          animate={{
            y: [-10, 0],
            opacity: 1,
          }}
          className={`${righteous.className} text-6xl font-bold text-white uppercase`}
        >
          Lorem ipsum dolor sit amet.
        </h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum,
          incidunt.
        </p>
        <button
          className={`${mont.className} px-8 py-4 w-1/2 bg-button-blue rounded-md text-black font-bold`}
        >
          Proceed
        </button>
      </section>
      <section className="w-1/2 h-100 ">
        <figure className="w-full h-full relative">
          <Image
            src={featureImage}
            fill
            style={{ objectFit: "contain" }}
            alt="cryto token and NFTs"
          />
        </figure>
      </section>
    </main>
  );
}
