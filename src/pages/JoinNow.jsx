import Seo from "../components/Seo";

const steps = [
  {
    title: "Step 1: Get your referral code",
    desc: "Contact us to receive your unique referral code.",
  },
  {
    title: "Step 2: Register on Amrutam",
    desc: "Sign up on the Amrutam Doctors app or website to join our specialist network.",
  },
  {
    title: "Step 3: Complete KYC",
    desc: "Fill in your details and upload the required documents for verification.",
  },
  {
    title: "Step 4: Start consulting",
    desc: "Once verified, begin offering consultations and helping patients.",
  },
];

export default function JoinNow() {
  return (
    <>
      <Seo
        title="Join Now"
        description="Register yourself as an Amrutam Doctor and join our circle of care with a simple 4-step onboarding."
        keywords="Join Amrutam, doctor registration, onboarding"
      />

      <section className="min-h-screen bg-[#F8F0D8] pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Page heading */}
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-semibold text-[#2F5E3A]">
              Join Our Circle of Care
            </h1>
            <p className="mt-2 text-[15px] text-[#5C5C5C]">
              Becoming a part of Amrutam is simple
            </p>
          </div>

          <div className="grid md:grid-cols-[1.15fr,1.1fr] gap-10 items-start">
            {/* LEFT: STEP CARDS */}
            <div className="space-y-4">
              {steps.map((step) => (
                <div
                  key={step.title}
                  className="rounded-2xl border border-[#D1C7AA] bg-[#FFF7E4] px-5 py-4 shadow-[0_8px_16px_rgba(0,0,0,0.03)]"
                >
                  <p className="text-sm font-semibold text-[#2F5E3A]">
                    {step.title}
                  </p>
                  <p className="mt-1 text-[13px] text-[#5C5C5C]">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* RIGHT: SCREEN MOCK + FORM CARD */}
            <div className="relative h-[360px] md:h-[420px]">
              {/* soft blob background */}
              <div className="absolute inset-x-4 top-8 h-56 md:h-64 bg-[#F6DEAB] rounded-[42px]" />

              {/* browser frame placeholder */}
              <div className="absolute inset-x-6 top-10 rounded-[32px] bg-white border border-[#D9CFB3] shadow-[0_18px_40px_rgba(0,0,0,0.08)] overflow-hidden">
                {/* fake browser top bar */}
                <div className="flex items-center justify-between px-4 py-2 bg-[#F2E7CF] border-b border-[#E2D6BB]">
                  <div className="flex gap-1">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#F5655B]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#F6C453]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#4CAF50]" />
                  </div>
                  <p className="text-[11px] text-[#7B725F]">
                    amrutam.app / doctor-onboarding
                  </p>
                  <div className="w-4" />
                </div>

                {/* inside browser: placeholder hero image */}
                <div className="h-40 md:h-44 bg-[#D8C9AA]" />
              </div>

              {/* FOREGROUND FORM CARD (modal) */}
              <div className="absolute left-8 right-4 md:left-16 md:right-10 bottom-0 translate-y-6 md:translate-y-8">
                <div className="rounded-2xl md:rounded-3xl bg-[#FFFDF6] border border-[#D9CFB3] shadow-[0_18px_40px_rgba(0,0,0,0.16)] px-6 py-5 md:px-7 md:py-6">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-lg md:text-xl font-semibold text-[#2F5E3A]">
                      Become An Amrutam Doctor
                    </h2>
                    <button
                      type="button"
                      className="w-6 h-6 flex items-center justify-center rounded-full bg-[#F0E5CB] text-sm text-[#5C5C5C]"
                    >
                      ✕
                    </button>
                  </div>

                  <form className="grid grid-cols-1 md:grid-cols-2 gap-4 text-[13px]">
                    <div className="space-y-1">
                      <label className="text-[#5C5C5C]">Your Name</label>
                      <input
                        type="text"
                        placeholder="Vikas Kumar"
                        className="w-full rounded-md border border-[#D7CBAF] bg-[#FFF9EA] px-3 py-2 outline-none text-[13px]"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[#5C5C5C]">
                        Your Contact Number
                      </label>
                      <input
                        type="text"
                        placeholder="8743414476"
                        className="w-full rounded-md border border-[#D7CBAF] bg-[#FFF9EA] px-3 py-2 outline-none text-[13px]"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[#5C5C5C]">Your Email</label>
                      <input
                        type="email"
                        placeholder="vikass@gmail.com"
                        className="w-full rounded-md border border-[#D7CBAF] bg-[#FFF9EA] px-3 py-2 outline-none text-[13px]"
                      />
                    </div>
                    <div className="space-y-1 md:col-span-2">
                      <label className="text-[#5C5C5C]">
                        Message (Optional)
                      </label>
                      <textarea
                        rows={3}
                        placeholder="I want to On-board as a Doctor"
                        className="w-full rounded-md border border-[#D7CBAF] bg-[#FFF9EA] px-3 py-2 outline-none resize-none text-[13px]"
                      />
                    </div>
                  </form>

                  <div className="mt-4 flex justify-end">
                    <button
                      type="button"
                      className="px-6 py-2.5 rounded-md bg-[#2F5E3A] text-white text-sm font-semibold shadow hover:bg-[#264B30]"
                    >
                      Send Message
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
