import Seo from "../components/Seo";
import { useState } from "react";

export default function Forum() {
  const [activeTab, setActiveTab] = useState("Questions");

  const questions = [
    {
      category: "Hair Fall",
      title: "Can Ayurveda help with stress and mental health issues?",
      desc: "Explores the potential benefits of traditional Ayurvedic practices in managing stress and improving mental well-being.",
      stats: "23 Likes • 10 Replies • 3 Saves",
      time: "5 days ago",
    },
    {
      category: "Digestion",
      title: "Is Triphala safe for long-term use?",
      desc: "Understanding Triphala’s long-term effects and balancing dosha for optimized gut health.",
      stats: "18 Likes • 6 Replies • 1 Save",
      time: "1 week ago",
    },
  ];

  const thoughts = [
    {
      title: "The importance of sattvic diet",
      desc: "A sattvic diet promotes clarity, balance, and longevity — the foundation of Ayurvedic lifestyle.",
      time: "2 days ago",
    },
    {
      title: "Pranayama for emotional stability",
      desc: "Breathing practices can help reduce anxiety, control emotions, and boost immunity.",
      time: "4 days ago",
    },
  ];

  return (
    <>
      <Seo
        title="Forum"
        description="Engage with Ayurvedic community through Questions and Thoughts. Share knowledge and learn from experts."
        keywords="forum, Ayurveda questions, doctor discussions"
      />

      <section className="min-h-screen bg-[#F8F0D8] pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <h1 className="text-4xl font-semibold text-[#2F5E3A] text-center">
            Forum for Meaningful Connections
          </h1>
          <p className="text-lg text-[#5C5C5C] text-center mt-2 max-w-2xl mx-auto">
            A space where doctors share Ayurvedic knowledge, answer questions, and inspire healing thoughts.
          </p>

          {/* Tabs */}
          <div className="mt-14 flex flex-wrap justify-center gap-3">
            {["Questions", "Thoughts"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 rounded-full border text-sm transition-all ${
                  activeTab === tab
                    ? "bg-[#2F6C34] text-white border-[#2F6C34] shadow-md"
                    : "bg-white text-[#2F6C34] border-[#D2C9B1]"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="mt-14 space-y-6">
            {activeTab === "Questions" &&
              questions.map((q, i) => (
                <div
                  key={i}
                  className="rounded-3xl bg-white border border-[#D9CFB3] shadow-sm px-6 py-6"
                >
                  <div className="flex justify-between items-center text-xs text-[#777]">
                    <span>{q.category}</span>
                    <span>{q.time}</span>
                  </div>

                  <p className="mt-2 text-lg font-semibold text-[#2F5E3A]">
                    {q.title}
                  </p>
                  <p className="text-sm text-[#5C5C5C] mt-2 leading-relaxed max-w-3xl">
                    {q.desc}
                  </p>

                  <p className="mt-4 text-xs text-[#7C735E]">{q.stats}</p>
                </div>
              ))}

            {activeTab === "Thoughts" &&
              thoughts.map((t, i) => (
                <div
                  key={i}
                  className="rounded-3xl bg-white border border-[#D9CFB3] shadow-sm px-6 py-6"
                >
                  <div className="flex justify-between items-center text-xs text-[#777]">
                    <span>Thought</span>
                    <span>{t.time}</span>
                  </div>

                  <p className="mt-2 text-lg font-semibold text-[#2F5E3A]">
                    {t.title}
                  </p>
                  <p className="text-sm text-[#5C5C5C] mt-2 leading-relaxed max-w-3xl">
                    {t.desc}
                  </p>
                </div>
              ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <button className="px-8 py-3 text-lg font-semibold bg-[#2F6C34] text-white rounded-lg shadow hover:bg-[#255427] transition">
              Join Now
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
