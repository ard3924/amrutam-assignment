import Seo from "../components/Seo";
import { useState } from "react";

export default function Consultations() {
  const [activeTab, setActiveTab] = useState("Consultations");

  const tabs = [
    "Consultations",
    "Payment withdrawal",
    "Schedule",
  ];

  const cardData = [
    {
      title: "Value Your Practice",
      image: iphone1,
    },
    {
      title: "Today’s Healing Journey",
      image: iphone2,
    },
    {
      title: "Consultation Details",
      image: iphone3,
    },
  ];

  return (
    <>
      <Seo
        title="Consultations"
        description="View consultations, earnings, schedules and insights to grow your Ayurvedic practice."
        keywords="consultations, Amrutam doctor app"
      />

      <section className="min-h-screen bg-[#F8F0D8] pt-32 pb-20 px-4 text-center">
        {/* Heading */}
        <h1 className="text-4xl font-semibold text-[#2F5E3A]">
          Consultations
        </h1>
        <p className="mt-3 text-[#5C5C5C] max-w-2xl mx-auto text-lg">
          Manage your online consultations and explore your value journey as an Ayurvedic doctor.
        </p>

        {/* Tabs */}
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-full border text-sm transition-all ${
                activeTab === tab
                  ? "bg-[#2F6C34] text-white border-[#2F6C34] shadow-md"
                  : "bg-transparent text-[#2F5E3A] border-[#D2C9B1]"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Phones */}
        <div className="mt-14 grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {cardData.map((card) => (
            <div key={card.title} className="text-center space-y-4">
              <h3 className="text-lg font-semibold text-[#2F5E3A]">
                {card.title}
              </h3>

              {/* phone container */}
              <div className="w-40 md:w-48 h-80 md:h-[380px] mx-auto rounded-[32px] bg-white border border-[#CABF9E] shadow-[0_18px_30px_rgba(0,0,0,0.18)] overflow-hidden">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <button className="mt-14 px-8 py-3 rounded-lg bg-[#2F6C34] text-white text-lg font-semibold shadow hover:bg-[#255427] transition">
          Join Now
        </button>
      </section>
    </>
  );
}
