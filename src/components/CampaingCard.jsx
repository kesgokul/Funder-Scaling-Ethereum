import Image from "next/image";
import CardBg from "../../public/images/card-bg.png";
import ProfilePic from "./ProfilePic";

import { Space_Grotesk, Poppins } from "next/font/google";
const spaceGrotest = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

// ============================= Componenents =====================================
const DetailsBtn = () => {
  return (
    <button className=" w-2/5 py-2 text-sm text-indigo-900 rounded-md bg-gradient-to-tr  from-indigo-400 to-pink-300">
      Details
    </button>
  );
};

const ContributeBtn = () => {
  return (
    <button className=" w-2/5 py-2 text-sm text-green-900 rounded-md bg-gradient-to-tr  from-green-400 to-yellow-200">
      Contribute
    </button>
  );
};

// ================================================================================

export default function CampaignCard({ title, desc }) {
  return (
    <main className=" w-80 h-96 border-2 border-gray-600 rounded-md relative isolate">
      <figure className="w-full h-full absolute inset-0 z-0">
        <Image
          src="/images/card-bg.png"
          fill
          style={{ objectFit: "cover", opacity: 0.3 }}
        />
      </figure>
      <section className="h-full p-2 z-10 relative flex flex-col">
        <div>
          <h2 className={`${spaceGrotest.className} text-yellow-400 text-3xl`}>
            {title}
          </h2>
          <p className={`${poppins.classNameß} text-xs text-orange-desc`}>
            {desc.slice(0, 50) + "..."}
          </p>
        </div>
        <div className="mt-auto border-t-2 border-t-white">
          <div className="w-full px-4 mt-3 flex justify-between">
            <DetailsBtn />
            <ContributeBtn />
          </div>
        </div>
      </section>
    </main>
  );
}
