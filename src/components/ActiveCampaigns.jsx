import CampaignCard from "./CampaingCard";

import { activeCampaigns } from "@/fakeData";

import { Righteous } from "next/font/google";
const righteous = Righteous({ subsets: ["latin"], weight: ["400"] });

const Container = ({ children }) => {
  return (
    <section className="w-full p-4 overflow-x-scroll border-2 border-orange-500 flex gap-10">
      {children}
    </section>
  );
};

export default function ActiveCampaigns() {
  return (
    <main>
      <h1 className={`${righteous.className} text-xl text-white`}>
        Active Campaigns
      </h1>
      <Container>
        {activeCampaigns.map((campaign, index) => (
          <div className=" shrink-0">
            <CampaignCard key={index} {...campaign} />
          </div>
        ))}
      </Container>
    </main>
  );
}
