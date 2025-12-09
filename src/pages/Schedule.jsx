import Seo from "../components/Seo";
import { useState } from "react";

export default function Schedule() {
  const [available, setAvailable] = useState(true);
  const [selectedDate, setSelectedDate] = useState(28);

  const dates = Array.from({ length: 31 }, (_, i) => i + 1);

  const slots = [
    "09:00 AM",
    "10:30 AM",
    "12:00 PM",
    "03:00 PM",
    "05:30 PM",
    "07:00 PM",
  ];

  return (
    <>
      <Seo
        title="Schedule"
        description="View and manage consultation timings, availability, and appointment schedule."
        keywords="doctor schedule, Amrutam availability, booking slots"
      />

      <section className="min-h-screen bg-[#F8F0D8] pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <h1 className="text-4xl font-semibold text-[#2F5E3A] text-center">
            Schedule
          </h1>
          <p className="text-lg text-[#5C5C5C] text-center mt-2 max-w-xl mx-auto">
            Manage your appointment availability and set your consultation timings with ease.
          </p>

          {/* Availability Toggle */}
          <div className="mt-10 flex justify-center">
            <div
              className="flex items-center gap-3 bg-[#FFF7E4] border border-[#D9CFB3] px-6 py-3 rounded-full shadow-sm cursor-pointer"
              onClick={() => setAvailable(!available)}
            >
              <span
                className={`w-4 h-4 rounded-full ${
                  available ? "bg-[#2F6C34]" : "bg-gray-400"
                }`}
              />
              <p className="text-[#2F5E3A] font-semibold text-sm">
                You are {available ? "available" : "not available"}
              </p>
            </div>
          </div>

          {/* Calendar Card */}
          <div className="mt-14 bg-[#FFF9E2] border border-[#D9CFB3] rounded-3xl shadow-[0_18px_40px_rgba(0,0,0,0.12)] px-8 py-10">
            <h2 className="text-xl font-semibold text-[#2F5E3A] mb-6">
              Choose your Date
            </h2>

            {/* Calendar grid */}
            <div className="grid grid-cols-7 gap-4 text-center">
              {dates.map((date) => (
                <button
                  key={date}
                  onClick={() => setSelectedDate(date)}
                  className={`py-3 rounded-xl border text-sm transition-all ${
                    selectedDate === date
                      ? "bg-[#2F6C34] text-white border-[#2F6C34] shadow-md"
                      : "bg-white border-[#D9CFB3] text-[#2F5E3A]"
                  }`}
                >
                  {date}
                </button>
              ))}
            </div>

            {/* Selected Date Box */}
            <div className="mt-12 bg-white border border-[#D9CFB3] rounded-xl px-6 py-4 shadow-sm max-w-md">
              <p className="text-sm text-[#5C5C5C]">
                Selected Date
              </p>
              <p className="text-2xl font-semibold text-[#2F5E3A] mt-1">
                {selectedDate} July 2024
              </p>
            </div>
          </div>

          {/* Time slots */}
          <div className="mt-14 max-w-4xl mx-auto">
            <h2 className="text-xl font-semibold text-[#2F5E3A]">
              Available Timings
            </h2>
            <p className="text-sm text-[#5C5C5C] mt-1">
              Select time slots for your consultations
            </p>

            <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-4">
              {slots.map((time) => (
                <button
                  key={time}
                  className="py-3 rounded-xl bg-white border border-[#D9CFB3] text-[#2F5E3A] font-semibold shadow-sm hover:bg-[#F6EECF] transition"
                >
                  {time}
                </button>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-14">
            <button className="px-8 py-3 text-lg font-semibold bg-[#2F6C34] text-white rounded-lg shadow hover:bg-[#255427] transition">
              Join Now
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
