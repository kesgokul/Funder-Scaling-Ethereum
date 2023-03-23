import Image from "next/image";
import CardBg from "../../public/images/card-bg.png";
export default function CampaignCard() {
  return (
    <main className=" w-80 h-96 border-2 border-gray-600 rounded-md grid">
      <figure className="w-full h-full relative row-start-1 row-end-3 col-start-1 col-end-3">
        <Image
          src="/images/card-bg.png"
          fill
          style={{ objectFit: "cover", opacity: 0.3 }}
        />
      </figure>
      <section className="p-2 row-start-1 row-end-3 col-start-1 col-end-3">
        <h2 className=" text-yellow-400 text-xl ">Campaign Title</h2>
      </section>
    </main>
  );
}
