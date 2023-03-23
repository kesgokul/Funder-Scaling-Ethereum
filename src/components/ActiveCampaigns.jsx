import CampaignCard from "./CampaingCard";

import { Righteous } from "next/font/google";
const righteous = Righteous({ subsets: ["latin"], weight: ["400"] });

const Container = ({ children }) => {
  return (
    <section className="w-full overflow-x-scroll border-2 border-orange-500">
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
        <CampaignCard />
      </Container>
    </main>
  );
}
