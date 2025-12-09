import Seo from "../components/Seo";
import { useState } from "react"; 
import doctorrightimg from "../assets/doctorrightimg.png";
import drmariumroy from "../assets/drmariumroy.jpg"; 
import drprerna from "../assets/drprerna.jpg";
import whatotherdoctorsaresaying from "../assets/whatotherdoctorsaresaying.jpg";
import featured from "../assets/featured.png"; 

const homeFaqData = [
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
];

export default function Home() {
  const [activeFaqIndex, setActiveFaqIndex] = useState(0);

  return (
    <>
      <Seo
        title="Home"
        description="Join Amrutam – Grow your Ayurvedic practice with online consultations, smart wallet, and patient management tools built for doctors."
        keywords="Amrutam doctors, Ayurveda, online consultation, doctor onboarding"
      />

      <div className="bg-[#fff3d9] pt-[112px] md:pt-[120px]">
        <main className="max-w-6xl mx-auto px-4">
          {/* ============== HERO ============== */}
          <section className="grid md:grid-cols-2 gap-10 py-12 md:py-16">
            <div className="flex flex-col justify-center">
              <p className="text-sm text-[#7c6a54] mb-2">
                Namaste, Welcome to Amrutam
              </p>
              <h1 className="text-3xl md:text-5xl font-semibold text-[#1f4123] leading-tight">
                Join Amrutam –{" "}
                <span className="text-[#2f6c34]">Grow Your Practice</span>
              </h1>
              <p className="mt-4 text-[15px] leading-relaxed text-[#5e5344] max-w-md">
                Connect with more patients, set your own schedule, and grow
                your Ayurvedic practice effortlessly.
              </p>
              <button className="mt-6 inline-flex items-center justify-center px-8 py-3 rounded-lg bg-[#2f6c34] text-white text-sm font-semibold shadow-sm hover:bg-[#255427] transition">
                Join Now
              </button>

              <div className="mt-8 flex gap-10 text-sm text-[#413b31]">
                <div>
                  <p className="text-xl font-semibold">500+</p>
                  <p className="text-xs text-[#7a6c59] mt-1">
                    Average Active Users
                  </p>
                </div>
                <div>
                  <p className="text-xl font-semibold">40+</p>
                  <p className="text-xs text-[#7a6c59] mt-1">
                    Average daily free calls
                  </p>
                </div>
              </div>
            </div>

            {/* hero right */}
            <div className="relative flex justify-center">
              {/* background blob */}
              <div className="absolute inset-x-0 top-10 h-64 md:h-72 rounded-[40px] bg-gradient-to-br from-[#f9e1a8] to-[#f4d998]" />
              {/* doctors image */}
              <img
                src={doctorrightimg}
                alt="Doctors"
                className="relative z-10 max-w-sm w-full rounded-[40px] object-cover"
              />
              {/* round icons
              <div className="absolute -right-2 top-10 w-14 h-14 rounded-full bg-[#f6d777] flex items-center justify-center">
                <i className="fa-solid fa-om text-[#2f6c34] text-2xl" />
              </div>
              <div className="absolute -bottom-4 right-10 w-14 h-14 rounded-full bg-[#f6d777] flex items-center justify-center">
                <i className="fa-solid fa-calendar text-[#2f6c34] text-2xl" />
              </div>
              <div className="absolute left-0 bottom-16 w-14 h-14 rounded-full bg-[#f6d777] flex items-center justify-center">
                <i className="fa-solid fa-mortar-pestle text-[#2f6c34] text-2xl" />
              </div> */}
            </div>
          </section>
          <hr className="border-[#f0e0c3]" />

          {/* ============== FEATURED (Logo Strip) ============== */}
          <section className="py-10">
            <h2 className="text-xl md:text-2xl font-semibold text-center text-[#215427]">
              Featured
            </h2>
            <p className="mt-2 text-xs md:text-sm text-center text-[#7c6a54]">
              Recognized and celebrated by leading publications – Amrutam in
              the spotlight!
            </p>
            {/* Using the provided featured.png image */}
            <div className="mt-6 flex justify-center items-center">
              <img
                src={featured}
                alt="Featured Logos"
                className="max-w-4xl h-auto opacity-70"
              />
            </div>
          </section>
          <hr className="border-[#f0e0c3]" />

          {/* ============== WHY DOCTORS CHOOSE US ============== */}
          <section className="py-12 md:py-16">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-semibold text-[#215427]">
                Why Doctors Choose Us?
              </h2>
              <p className="mt-2 text-sm text-[#7c6a54]">
                Unlock the Benefits of Smarter Healthcare Management and Patient
                Care
              </p>
            </div>

            {/* Feature 1: Instant FREE 5-Mins Call */}
            <div className="grid md:grid-cols-[1.4fr,1fr] gap-10 items-center mb-16">
              <div className="relative h-64 md:h-72">
                {/* background shape */}
                <div className="absolute left-0 right-10 top-16 h-40 bg-[#f9e5b8] rounded-[48px]" />
                {/* call UI cards */}
                <div className="absolute left-10 top-8 bg-white rounded-2xl shadow-md px-5 py-3 text-xs text-[#3c352a] flex items-center gap-3 w-64">
                  <img
                    src={drprerna}
                    alt="Dr. Prerna Narang"
                    className="w-10 h-10 rounded-xl object-cover"
                  />
                  <div>
                    <p className="font-semibold text-[13px]">
                      Dr. Prerna Narang
                    </p>
                    <p className="text-[11px] text-[#7c6a54]">
                      Gynecology + 2 others
                    </p>
                    <p className="text-[11px] text-[#7c6a54]">
                      7 years of Experience
                    </p>
                  </div>
                </div>

                <div className="absolute left-4 bottom-4 bg-white rounded-2xl shadow-md px-5 py-4 text-[11px] text-[#3c352a] w-64">
                  <p className="font-medium mb-1">Connecting…</p>
                  <p className="text-[#7c6a54]">
                    You’ll receive a call shortly. This call will be recorded
                    for you to review later.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#215427] mb-3">
                  Instant <span className="font-bold">FREE 5-Mins Call</span>
                </h3>
                <p className="text-sm leading-relaxed text-[#5e5344]">
                  We understand the importance of building trust with your
                  patients. That’s why Amrutam offers a{" "}
                  <span className="font-semibold">free 5–minute call</span>,
                  helping you connect instantly and foster lasting patient
                  relationships with ease.
                </p>
              </div>
            </div>

            {/* Feature 2: Forum for Meaningful Connections */}
            <div className="grid md:grid-cols-[1fr,1.3fr] gap-10 items-center mb-16">
              <div>
                <h3 className="text-xl font-semibold text-[#215427] mb-3">
                  Forum for Meaningful Connections
                </h3>
                <p className="text-sm leading-relaxed text-[#5e5344]">
                  We value your journey in Ayurveda. The Amrutam Forum helps you
                  engage with patients, answer questions, and share deeper
                  Ayurvedic wisdom through{" "}
                  <span className="font-semibold">Questions</span> and{" "}
                  <span className="font-semibold">Thoughts</span> sections.
                </p>
              </div>

              {/* forum cards */}
              <div className="relative h-72 md:h-80">
                <div className="absolute inset-x-6 top-10 h-40 bg-[#f9e5b8] rounded-[48px]" />
                {/* Simplified forum card stack */}
                <div className="absolute left-0 bottom-6 w-40 h-64 rounded-[32px] bg-white shadow-md" />
                <div className="absolute right-0 bottom-2 w-[260px] rounded-2xl bg-white shadow-md p-4 text-[11px] text-[#3c352a]">
                  <p className="text-xs font-semibold text-[#215427] mb-1">
                    Questions
                  </p>
                  <p className="font-medium mb-1">
                    Can Ayurveda help with stress and mental health issues?
                  </p>
                  <p className="text-[#7c6a54] mb-2 line-clamp-3">
                    Explores the potential benefits of traditional Ayurvedic
                    practices in managing stress and improving mental well-being.
                  </p>
                  <p className="text-[10px] text-[#9a8c77]">
                    23 Likes • 10 Replies • 3 Saves
                  </p>
                </div>
              </div>
            </div>

            {/* Feature 3: Choose Your Session Mode + Feature 4: Smart Wallet */}
            <div className="grid md:grid-cols-2 gap-14 mb-16">
              {/* session mode */}
              <div className="grid gap-6 items-center">
                <div className="relative h-64">
                  <div className="absolute inset-x-2 top-14 h-40 bg-[#f9e5b8] rounded-[48px]" />
                  <div className="absolute left-4 top-16 w-[260px] rounded-2xl bg-white shadow-md p-4 text-[11px]">
                    <p className="text-xs text-[#7c6a54] mb-3">
                      Select your mode of session
                    </p>
                    <div className="flex gap-2 text-xs">
                      <button className="flex-1 py-2 rounded-full border border-[#dad0b8] bg-white">
                        Free Call
                      </button>
                      <button className="flex-1 py-2 rounded-full border border-[#2f6c34] bg-[#e0f0e2] text-[#215427] font-semibold">
                        Video
                      </button>
                      <button className="flex-1 py-2 rounded-full border border-[#dad0b8] bg-white">
                        Chat
                      </button>
                    </div>
                  </div>
                  <div className="absolute left-8 bottom-2 bg-white w-[260px] rounded-2xl shadow-md p-4 text-[11px]">
                    <p className="text-xs font-semibold mb-1">
                      Hi, Dr. Prerna, here are my details:
                    </p>
                    <p>Name: Geetanjali Shah</p>
                    <p>Concern: Immunity</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-[#215427] mb-3">
                    Choose Your Session Mode
                  </h3>
                  <p className="text-sm leading-relaxed text-[#5e5344]">
                    Amrutam offers you to connect with patients via Instant
                    Chat, Instant Call, or Schedule Video Call. Each option
                    offers flexibility and personalized care to suit individual
                    needs.
                  </p>
                </div>
              </div>

              {/* smart wallet */}
              <div className="grid gap-6 items-center">
                <div>
                  <h3 className="text-xl font-semibold text-[#215427] mb-3">
                    Smart Wallet
                  </h3>
                  <p className="text-sm leading-relaxed text-[#5e5344]">
                    With Amrutam Wallet, you can easily withdraw payments and
                    receive a one-time password on your registered mobile number
                    during withdrawals, ensuring secure transactions.
                  </p>
                </div>

                <div className="relative h-64">
                  <div className="absolute inset-x-4 top-14 h-40 bg-[#f9e5b8] rounded-[48px]" />
                  <div className="absolute left-6 bottom-4 w-[260px] rounded-2xl bg-white shadow-md p-4 text-[11px]">
                    <p className="text-xs text-[#7c6a54] mb-2">
                      Amrutam Account
                    </p>
                    <p className="text-lg font-semibold text-[#215427] mb-3">
                      ₹12,000.00
                    </p>
                    <button className="px-4 py-2 rounded-full bg-[#2f6c34] text-white text-[11px] font-semibold hover:bg-[#255427] transition">
                      Request Withdrawal
                    </button>
                  </div>
                  <div className="absolute right-2 top-24 w-[260px] rounded-2xl bg-white shadow-md p-4 text-[11px]">
                    <p className="text-xs font-semibold mb-1">
                      Recent Withdrawals
                    </p>
                    <p className="text-[11px] text-[#7c6a54]">
                      28th July 2024 • Money Withdrawal
                    </p>
                    <p className="mt-1 text-sm font-semibold text-[#215427]">
                      ₹44,000.00
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature 5: Flexible Work Timing */}
            <div className="grid md:grid-cols-[1.4fr,1fr] gap-10 items-center">
              <div className="relative h-64 md:h-72">
                <div className="absolute inset-x-8 top-14 h-44 bg-[#f9e5b8] rounded-[48px]" />
                <div className="absolute left-8 top-18 w-[260px] rounded-2xl bg-white shadow-md p-4 text-[11px]">
                  <p className="text-xs font-semibold mb-1">Average Ratings</p>
                  <p className="text-sm text-[#7c6a54]">4.8 • 218 Ratings</p>
                </div>
                <div className="absolute left-10 bottom-4 w-[280px] rounded-2xl bg-white shadow-md p-4 text-[11px]">
                  <p className="text-xs font-semibold mb-1">
                    Dr. Prerna Narang
                  </p>
                  <p className="text-[11px] text-[#7c6a54]">
                    Male–Female Infertility • 7 years of Experience
                  </p>
                  <div className="mt-3 flex gap-2 text-[10px]">
                    <button className="flex-1 py-2 rounded-full border border-[#dad0b8] hover:bg-[#f6f6f6] transition">
                      Chat
                    </button>
                    <button className="flex-1 py-2 rounded-full border border-[#dad0b8] hover:bg-[#f6f6f6] transition">
                      Video
                    </button>
                    <button className="flex-1 py-2 rounded-full border border-[#dad0b8] hover:bg-[#f6f6f6] transition">
                      Instant Call
                    </button>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#215427] mb-3">
                  Flexible Work Timing
                </h3>
                <p className="text-sm leading-relaxed text-[#5e5344]">
                  With the availability toggle in the doctor’s app, you control
                  when patients can book consultations, ensuring a balanced and
                  stress-free practice.
                </p>
              </div>
            </div>
          </section>
          <hr className="border-[#f0e0c3]" />

          {/* ============== JOIN OUR CIRCLE OF CARE ============== */}
          <section className="py-12 md:py-16">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-semibold text-[#215427]">
                Join Our Circle of Care
              </h2>
              <p className="mt-2 text-sm text-[#7c6a54]">
                Becoming a part of Amrutam is simple
              </p>
            </div>

            <div className="grid md:grid-cols-[1.2fr,1fr] gap-10 items-start">
              {/* LEFT: STEP CARDS */}
              <div className="space-y-4">
                {[
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
                ].map((step) => (
                  <div
                    key={step.title}
                    // Using styles similar to JoinNow.jsx for polish
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

              {/* RIGHT: Mockup/Form - using simpler classes here */}
              <div className="relative h-[360px] md:h-[420px]">
                {/* soft blob background */}
                <div className="absolute inset-x-4 top-8 h-56 md:h-64 bg-[#F6DEAB] rounded-[42px]" />
                <div className="absolute inset-x-8 top-12 rounded-[32px] bg-white border border-[#D9CFB3] shadow-[0_18px_40px_rgba(0,0,0,0.08)] overflow-hidden">
                  <div className="w-full h-40 rounded-t-2xl bg-[#D8C9AA]" />
                </div>
                {/* FOREGROUND FORM CARD (modal) - simplified for home preview */}
                <div className="absolute left-8 right-4 md:left-10 md:right-10 bottom-0 translate-y-6 md:translate-y-8">
                  <div className="rounded-2xl md:rounded-3xl bg-[#FFFDF6] border border-[#D9CFB3] shadow-[0_18px_40px_rgba(0,0,0,0.16)] px-6 py-5 md:px-7 md:py-6">
                    <h2 className="text-lg md:text-xl font-semibold text-[#2F5E3A] mb-4">
                      Become An Amrutam Doctor
                    </h2>
                    <div className="flex justify-end">
                      <button
                        type="button"
                        className="px-6 py-2.5 rounded-md bg-[#2F5E3A] text-white text-sm font-semibold shadow hover:bg-[#264B30] transition"
                      >
                        Send Message
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sub-section: Tabs + Phones */}
            <div className="flex flex-col items-center gap-8 mt-12">
              <div className="flex flex-wrap justify-center gap-3 text-sm">
                {["Consultations", "Payment withdrawal", "Schedule"].map(
                  (tab, i) => (
                    <button
                      key={tab}
                      className={`px-6 py-2 rounded-full border text-sm transition ${
                        i === 0
                          ? "bg-[#2f6c34] text-white border-[#2f6c34]"
                          : "bg-transparent text-[#215427] border-[#d2c9b1] hover:bg-[#e0f0e2]"
                      }`}
                    >
                      {tab}
                    </button>
                  )
                )}
              </div>

              <div className="grid md:grid-cols-3 gap-8 items-center">
                {["Value Your Practice", "Today’s Healing Journey", "Consultation Details"].map(
                  (heading) => (
                    <div key={heading} className="text-center space-y-3">
                      <h3 className="text-sm font-semibold text-[#215427]">
                        {heading}
                      </h3>
                      {/* Placeholder box updated with cleaner class names */}
                      <div className="mx-auto w-40 h-80 rounded-[32px] bg-[#e1dfd4] shadow-md" />
                    </div>
                  )
                )}
              </div>

              <button className="mt-4 mb-2 inline-flex items-center justify-center px-10 py-3 rounded-lg bg-[#2f6c34] text-white text-sm font-semibold shadow-sm hover:bg-[#255427] transition">
                Join Now
              </button>
            </div>
          </section>
          <hr className="border-[#f0e0c3]" />

          {/* ============== TESTIMONIALS + FAQ SHORT ============== */}
          <section className="py-12 md:py-16">
            <div className="text-center mb-8">
              <img
                src={whatotherdoctorsaresaying}
                alt="What other Ayurvedic Doctors are Saying"
                className="mx-auto mb-4 w-64 h-auto"
              />
              <h2 className="text-2xl md:text-3xl font-semibold text-[#215427]">
                What other Ayurvedic Doctors are Saying
              </h2>
              <p className="mt-2 text-sm text-[#7c6a54]">
                Trusted by experts – Hear what Ayurvedic doctors say about
                Amrutam!
              </p>
            </div>

            {/* Testimonial Cards - using the structure from Testimonials.jsx with mock data */}
            <div className="grid md:grid-cols-3 gap-6 mb-16 max-w-5xl mx-auto">
              {[
                { name: "Dr. Pooja Deshmukh, BAMS", image: drprerna, text: "“Amrutam’s formulations stay true to ancient Ayurvedic wisdom. Their herbal blends are thoughtfully crafted, and I recommend them to my patients seeking natural healing.”" },
                { name: "Dr. Rajesh Iyer, Ayurvedic Practitioner", image: drmariumroy, text: "“Amrutam beautifully bridges the gap between traditional Ayurveda and modern wellness. Their high–quality ingredients and ethical practices make them a trustworthy choice.”" },
                { name: "Dr. Ananya Sharma, BAMS", image: whatotherdoctorsaresaying, text: "“As an Ayurvedic doctor, I appreciate Amrutam’s commitment to purity and efficacy. Their herbal blends ensure maximum benefits for mind and body.”" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-[#F9E7B1] p-6 rounded-xl shadow-md text-left" // Style from Testimonials.jsx
                >
                  {/* Avatar + Name */}
                  <div className="flex items-center gap-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="font-semibold text-[#2F2F2F] text-sm">
                        {item.name}
                      </h3>
                    </div>
                  </div>
                  
                  {/* Review */}
                  <p className="mt-4 text-[#5C5C5C] leading-relaxed text-[13px]">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>

            {/* FAQ strip - now using accordion logic */}
            <div className="bg-[#fff3d9] rounded-3xl border border-[#e2d5bc] px-6 py-8">
              <h2 className="text-2xl md:text-3xl font-semibold text-[#215427] text-center mb-2">
                Frequently Asked Questions
              </h2>
              <p className="text-sm text-[#7c6a54] text-center mb-8">
                Find quick answers to common questions to help you navigate the
                app and its features easily.
              </p>

              <div className="space-y-3 text-sm text-[#3c352a] max-w-4xl mx-auto">
                {homeFaqData.map((item, index) => (
                  <div key={index} className="border-b border-[#e2d5bc] pb-3">
                    <button
                      className="w-full flex justify-between items-center py-2"
                      onClick={() =>
                        setActiveFaqIndex(activeFaqIndex === index ? null : index)
                      }
                    >
                      <span className="font-medium text-[15px] text-[#2F2F2F] text-left">
                        {item.question}
                      </span>
                      <span className="text-xl text-[#7c6a54] ml-4">
                        {activeFaqIndex === index ? "−" : "+"}
                      </span>
                    </button>

                    {activeFaqIndex === index && (
                      <p className="mt-1 text-xs text-[#5e5344] leading-relaxed pr-8 pb-1">
                        {item.answer}
                      </p>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-8 flex justify-center">
                <button className="px-8 py-3 rounded-lg bg-[#2f6c34] text-white text-sm font-semibold shadow-sm hover:bg-[#255427] transition">
                  See More
                </button>
              </div>
            </div>
          </section>
          <hr className="border-[#f0e0c3]" />

          {/* ============== DOWNLOAD APP CTA ============== */}
          <section className="py-12 md:py-16">
            <div className="rounded-3xl bg-[#f8e0a8] px-6 py-10 grid md:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-semibold text-[#215427] mb-3">
                  Get Started Today – <br /> Download the App Now!
                </h2>
                <p className="text-sm text-[#5e5344] mb-5">
                  Simplify consultations, manage patients, and grow your
                  practice—all in one place.
                </p>

                {/* Bullet points updated to be list items instead of small boxes */}
                <ul className="space-y-3 text-sm text-[#5e5344] mb-6">
                  {[
                    "Build Trust and Community with Forum",
                    "Earn More with Pay Per Conversation",
                    "Attract Patients with 5–Minute Free Call",
                    "Instant Access to Your Earnings with Wallet",
                  ].map((txt) => (
                    <li key={txt} className="flex items-center gap-3 font-medium text-[#2f6c34]">
                      <span className="text-lg">✓</span>
                      <p className="text-sm text-[#4a4238]">{txt}</p>
                    </li>
                  ))}
                </ul>

                {/* Store buttons placeholder (assumes images are in /public/images) */}
                <div className="flex gap-4">
                  <div className="w-36 h-12 rounded-lg bg-black text-white text-[11px] flex items-center justify-center cursor-pointer">
                    Google Play
                  </div>
                  <div className="w-36 h-12 rounded-lg bg-black text-white text-[11px] flex items-center justify-center cursor-pointer">
                    App Store
                  </div>
                </div>
              </div>

              <div className="flex justify-center">
                <div className="w-52 h-96 rounded-[40px] bg-[#e1dfd4] shadow-xl" />
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}