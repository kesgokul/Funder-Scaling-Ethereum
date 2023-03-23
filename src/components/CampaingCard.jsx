"use client";
import Image from "next/image";
import CardBg from "../../public/images/card-bg.png";
import ProfilePic from "./ProfilePic";
import ProgressBar from "@ramonak/react-progress-bar";

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

const TargetStaus = ({ completed }) => {
  return (
    <article className="mt-8 px-2 py-4 border-2 border-gray-300 rounded-md">
      <p className="text-xs pb-2 text-gray-300">
        <span className="text-md text-white">{`${completed.toFixed(1)}%`}</span>{" "}
        towards the target has been acheived
      </p>
      <ProgressBar
        completed={completed}
        bgColor="#EC6CB9"
        height="10px"
        baseBgColor="#313439"
        labelSize="8px"
        isLabelVisible={false}
      />
    </article>
  );
};

// ================================================================================

export default function CampaignCard({ title, desc, target, collectedAmount }) {
  return (
    <main className=" w-80 h-96 border-2 border-gray-600 rounded-md relative isolate">
      <figure className="w-full h-full absolute inset-0 z-0">
        <Image
          src="/images/card-bg.png"
          fill
          style={{ objectFit: "cover", opacity: 0.3 }}
        />
      </figure>
      <section className="h-full p-3 z-10 relative flex flex-col">
        <div>
          <h2 className={`${spaceGrotest.className} text-yellow-400 text-2xl`}>
            {title}
          </h2>
          <p className={`${poppins.classNameß} text-xs text-orange-desc`}>
            {desc.slice(0, 50) + "..."}
          </p>
        </div>
        <div className="mt-auto border-t-2 border-t-gray-300">
          <div className="w-full px-4 mt-8 flex justify-between">
            <DetailsBtn />
            <ContributeBtn />
          </div>
          <TargetStaus completed={(collectedAmount / target) * 100} />
        </div>
      </section>
    </main>
  );
}
