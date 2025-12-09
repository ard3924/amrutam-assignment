import { useState } from "react";
import Seo from "../components/Seo";

const faqData = [
  
  {
    question: "What is Amrutam?",
    answer:
      "Amrutam is a trusted platform connecting Ayurvedic experts with people seeking holistic healthcare solutions. Join our growing community of doctors to share your expertise, grow your practice, and make a lasting impact.",
  },
  {
    question: "How does Amrutam help me grow as a practitioner?",
    answer:
      "Amrutam enables doctors to expand their reach through online consultations, smart wallet, flexible scheduling options, and engagement tools like forum and feedback.",
  },
  {
    question: "How do I become a part of Amrutam Doctor?",
    answer:
      "Simply complete the onboarding steps — referral code, registration, KYC verification, and start consulting patients.",
  },
  {
    question: "What is Amrutam Global as a platform?",
    answer:
      "It is a network designed to bring modern accessibility to Ayurvedic experts through technology, helping professionals connect globally.",
  },
  {
    question: "What documents do I need to provide?",
    answer:
      "Doctors need to submit identity proof, qualification certificates, and licensing documents during KYC verification.",
  },
  {
    question: "Is there a fee to join Amrutam?",
    answer:
      "No, onboarding on Amrutam is free for verified and qualified Ayurvedic practitioners.",
  },
];

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <Seo
        title="FAQ"
        description="Find quick answers to common questions to help you navigate the Amrutam Doctors platform easily."
        keywords="FAQ, Doctor Portal, Amrutam help"
      />

      <section
        className="min-h-screen px-6 py-20 bg-[#F8F0D8] text-center"
      >
        {/* Heading */}
        <h1 className="text-4xl font-semibold text-[#2F5E3A]">
          Frequently Asked Questions
        </h1>
        <p className="mt-3 text-[#5C5C5C] max-w-2xl mx-auto text-lg">
          Find quick answers to common questions to help you navigate the app and its features easily.
        </p>

        {/* FAQ Accordion */}
        <div className="mt-14 max-w-3xl mx-auto text-left">
          {faqData.map((item, index) => (
            <div key={index} className="border-b border-[#D9D9D9] py-5">
              <button
                className="w-full flex justify-between items-center"
                onClick={() =>
                  setActiveIndex(activeIndex === index ? null : index)
                }
              >
                <span className="text-[#2F2F2F] font-medium text-lg">
                  {item.question}
                </span>
                <span className="text-2xl text-[#2F5E3A] transition-transform duration-300">
                  {activeIndex === index ? "−" : "+"}
                </span>
              </button>

              {activeIndex === index && (
                <p className="mt-3 text-[#5C5C5C] leading-relaxed">
                  {item.answer}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* CTA - Updated button style */}
        <button className="mt-12 bg-[#2F6C34] text-white text-lg px-8 py-3 rounded-lg shadow hover:bg-[#255427] transition">
          See More
        </button>
      </section>
    </>
  );
}