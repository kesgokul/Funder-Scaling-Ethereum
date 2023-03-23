import CampaignCard from "./CampaingCard";

import { activeCampaigns } from "@/fakeData";

import { Righteous } from "next/font/google";
const righteous = Righteous({ subsets: ["latin"], weight: ["400"] });

const Container = ({ children }) => {
  return (
    <section className="w-full p-10 overflow-x-scroll flex gap-10 snap-x snap-mandatory ">
      {children}
    </section>
  );
};

export default function ActiveCampaigns() {
  return (
    <main>
      <h1
        className={`${righteous.className} text-3xl text-white tracking-widest`}
      >
        Active Campaigns
      </h1>
      <Container>
        {activeCampaigns.map((campaign, index) => (
          <div className=" shrink-0 snap-start">
            <CampaignCard key={index} {...campaign} />
          </div>
        ))}
      </Container>
    </main>
  );
}
