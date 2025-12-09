// src/pages/Home.jsx
import Seo from "../components/Seo";
import doctorrightimg from "../assets/doctorrightimg.png";
// import drmariumroy from "../assets/drmariumroy.jpg";
import drprerna from "../assets/drprerna.jpg";
import whatotherdoctorsaresaying from "../assets/whatotherdoctorsaresaying.jpg";

export default function Home() {
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
              <button className="mt-6 inline-flex items-center justify-center px-8 py-3 rounded-lg bg-[#2f6c34] text-white text-sm font-semibold shadow-sm hover:bg-[#255427]">
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
              {/* round icons */}
              <div className="absolute -right-2 top-10 w-14 h-14 rounded-full bg-[#f6d777] flex items-center justify-center">
                {/* yoga icon placeholder */}
                <div className="w-7 h-7 rounded-full bg-[#2f6c34]" />
              </div>
              <div className="absolute -bottom-4 right-10 w-14 h-14 rounded-full bg-[#f6d777] flex items-center justify-center">
                <div className="w-7 h-7 rounded-full bg-[#2f6c34]" />
              </div>
            </div>
          </section>

          {/* ============== FEATURED ============== */}
          <section className="py-10 border-t border-[#f0e0c3]">
            <h2 className="text-xl md:text-2xl font-semibold text-center text-[#215427]">
              Featured
            </h2>
            <p className="mt-2 text-xs md:text-sm text-center text-[#7c6a54]">
              Recognized and celebrated by leading publications – Amrutam in
              the spotlight!
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-6 md:gap-10">
              {[
                "THE TIMES OF INDIA",
                "YOURSTORY",
                "TRAVELER",
                "Livingetc",
                "GQ",
                "VOGUE",
                "Forbes 30",
              ].map((name) => (
                <div
                  key={name}
                  className="h-8 flex items-center justify-center px-4 text-[10px] md:text-xs text-[#5a5246]"
                >
                  {name}
                </div>
              ))}
            </div>
          </section>

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

            {/* Instant FREE 5-Mins Call */}
            <div className="grid md:grid-cols-[1.4fr,1fr] gap-10 items-center mb-16">
              <div className="relative h-64 md:h-72">
                <div className="absolute left-4 top-10 w-16 h-16 rounded-full bg-[#f6d777] flex items-center justify-center">
                  <div className="w-7 h-7 rounded-full bg-[#2f6c34]" />
                </div>
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

            {/* Forum for Meaningful Connections */}
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
                <div className="absolute right-6 top-6 w-16 h-16 rounded-full bg-[#f6d777] flex items-center justify-center">
                  <div className="w-7 h-7 rounded-full bg-[#2f6c34]" />
                </div>
                <div className="absolute inset-x-6 top-10 h-40 bg-[#f9e5b8] rounded-[48px]" />
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

            {/* Choose Your Session Mode + Smart Wallet */}
            <div className="grid md:grid-cols-2 gap-14 mb-16">
              {/* session mode */}
              <div className="grid md:grid-cols-[1.1fr,1fr] gap-6 items-center">
                <div className="relative h-64">
                  <div className="absolute left-4 top-8 w-16 h-16 rounded-full bg-[#f6d777] flex items-center justify-center">
                    <div className="w-7 h-7 rounded-full bg-[#2f6c34]" />
                  </div>
                  <div className="absolute inset-x-2 top-14 h-40 bg-[#f9e5b8] rounded-[48px]" />
                  <div className="absolute left-4 top-16 w-[260px] rounded-2xl bg-white shadow-md p-4 text-[11px]">
                    <p className="text-xs text-[#7c6a54] mb-3">
                      Select your mode of session
                    </p>
                    <div className="flex gap-2 text-xs">
                      <button className="flex-1 py-2 rounded-full border border-[#dad0b8] bg-white">
                        Free Call <span className="text-[10px]">₹15/Min</span>
                      </button>
                      <button className="flex-1 py-2 rounded-full border border-[#2f6c34] bg-[#e0f0e2] text-[#215427] font-semibold">
                        Video <span className="text-[10px]">₹15/Min</span>
                      </button>
                      <button className="flex-1 py-2 rounded-full border border-[#dad0b8] bg-white">
                        Chat <span className="text-[10px]">₹15/Text</span>
                      </button>
                    </div>
                  </div>
                  <div className="absolute left-8 bottom-2 bg-white w-[260px] rounded-2xl shadow-md p-4 text-[11px]">
                    <p className="text-xs font-semibold mb-1">
                      Hi, Dr. Prerna, here are my details:
                    </p>
                    <p>Name: Geetanjali Shah</p>
                    <p>Age: 34</p>
                    <p>Gender: Female</p>
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
              <div className="grid md:grid-cols-[1fr,1.1fr] gap-6 items-center">
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
                  <div className="absolute right-6 top-8 w-16 h-16 rounded-full bg-[#f6d777] flex items-center justify-center">
                    <div className="w-7 h-7 rounded-full bg-[#2f6c34]" />
                  </div>
                  <div className="absolute inset-x-4 top-14 h-40 bg-[#f9e5b8] rounded-[48px]" />
                  <div className="absolute left-6 bottom-4 w-[260px] rounded-2xl bg-white shadow-md p-4 text-[11px]">
                    <p className="text-xs text-[#7c6a54] mb-2">
                      Amrutam Account
                    </p>
                    <p className="text-lg font-semibold text-[#215427] mb-3">
                      ₹12,000.00
                    </p>
                    <button className="px-4 py-2 rounded-full bg-[#2f6c34] text-white text-[11px] font-semibold">
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

            {/* Flexible Work Timing */}
            <div className="grid md:grid-cols-[1.4fr,1fr] gap-10 items-center">
              <div className="relative h-64 md:h-72">
                <div className="absolute left-4 top-8 w-16 h-16 rounded-full bg-[#f6d777] flex items-center justify-center">
                  <div className="w-7 h-7 rounded-full bg-[#2f6c34]" />
                </div>
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
                    <button className="flex-1 py-2 rounded-full border border-[#dad0b8]">
                      Chat Consultation
                    </button>
                    <button className="flex-1 py-2 rounded-full border border-[#dad0b8]">
                      Video Consultation
                    </button>
                    <button className="flex-1 py-2 rounded-full border border-[#dad0b8]">
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

          {/* ============== JOIN OUR CIRCLE OF CARE ============== */}
          <section className="py-12 md:py-16 border-t border-[#f0e0c3]">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-semibold text-[#215427]">
                Join Our Circle of Care
              </h2>
              <p className="mt-2 text-sm text-[#7c6a54]">
                Becoming a part of Amrutam is simple
              </p>
            </div>

            <div className="grid md:grid-cols-[1.2fr,1fr] gap-10 mb-10">
              <div className="space-y-4 text-sm">
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
                    className="rounded-2xl border border-[#d1c9ae] bg-[#fff7e3] px-4 py-3"
                  >
                    <p className="font-semibold text-[#215427]">
                      {step.title}
                    </p>
                    <p className="mt-1 text-[#5e5344]">{step.desc}</p>
                  </div>
                ))}
              </div>

              <div className="relative h-72">
                <div className="absolute inset-x-4 top-10 h-44 bg-[#f9e5b8] rounded-[48px]" />
                <div className="absolute inset-x-8 top-12 rounded-[32px] bg-white shadow-md p-4">
                  <div className="w-full h-40 rounded-2xl bg-[#d4cbb0] mb-4" />
                  <div className="grid grid-cols-2 gap-4 text-[11px]">
                    <div>
                      <p className="font-semibold mb-1">Your Name</p>
                      <p>Vikas Kumar</p>
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Your Contact Number</p>
                      <p>8743414476</p>
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Your Email</p>
                      <p>vikass@gmail.com</p>
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Message (Optional)</p>
                      <p>I want to On-board as a Doctor</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* tabs + phones */}
            <div className="flex flex-col items-center gap-8">
              <div className="flex flex-wrap justify-center gap-3 text-sm">
                {["Consultations", "Payment withdrawal", "Schedule"].map(
                  (tab, i) => (
                    <button
                      key={tab}
                      className={`px-6 py-2 rounded-full border text-sm ${
                        i === 0
                          ? "bg-[#2f6c34] text-white border-[#2f6c34]"
                          : "bg-transparent text-[#215427] border-[#d2c9b1]"
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
                      <div className="mx-auto w-40 h-80 rounded-[32px] bg-[#e1dfd4] shadow-md" />
                    </div>
                  )
                )}
              </div>

              <button className="mt-4 mb-2 inline-flex items-center justify-center px-10 py-3 rounded-lg bg-[#2f6c34] text-white text-sm font-semibold shadow-sm hover:bg-[#255427]">
                Join Now
              </button>
            </div>
          </section>

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

            <div className="grid md:grid-cols-3 gap-6 mb-16">
              {[
                "Dr. Pooja Deshmukh, BAMS",
                "Dr. Rajesh Iyer, Ayurvedic Practitioner",
                "Dr. Ananya Sharma, BAMS",
              ].map((name) => (
                <div
                  key={name}
                  className="rounded-2xl bg-[#ffe5aa] px-5 py-5 text-sm text-[#3c352a]"
                >
                  <p className="font-semibold mb-2">{name}</p>
                  <p className="text-xs leading-relaxed">
                    “Amrutam’s formulations stay true to ancient Ayurvedic
                    wisdom. Their herbal blends are thoughtfully crafted, and I
                    recommend them to my patients seeking natural healing.”
                  </p>
                </div>
              ))}
            </div>

            {/* FAQ strip */}
            <div className="bg-[#fff3d9] rounded-3xl border border-[#e2d5bc] px-6 py-8">
              <h2 className="text-2xl md:text-3xl font-semibold text-[#215427] text-center mb-2">
                Frequently Asked Questions
              </h2>
              <p className="text-sm text-[#7c6a54] text-center mb-6">
                Find quick answers to common questions to help you navigate the
                app and its features easily.
              </p>

              <div className="space-y-5 text-sm text-[#3c352a]">
                {[
                  "What is Amrutam?",
                  "How does Amrutam help me grow as a practitioner?",
                  "How do I become a part of Amrutam Doctor?",
                  "What is Amrutam Global as a platform?",
                  "What documents do I need to provide?",
                  "Is there a fee to join Amrutam?",
                ].map((q, i) => (
                  <div
                    key={q}
                    className="border-b border-[#e2d5bc] pb-3 flex items-center justify-between"
                  >
                    <div>
                      <p className="font-medium text-[15px]">{q}</p>
                      {i === 0 && (
                        <p className="mt-1 text-xs text-[#7c6a54] max-w-3xl">
                          Amrutam is a trusted platform connecting Ayurvedic
                          experts with people seeking holistic healthcare
                          solutions. Join our growing community of doctors to
                          share your expertise, grow your practice, and make a
                          lasting impact.
                        </p>
                      )}
                    </div>
                    <span className="text-xl text-[#7c6a54]">
                      {i === 0 ? "–" : "+"}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex justify-center">
                <button className="px-8 py-3 rounded-lg bg-[#2f6c34] text-white text-sm font-semibold">
                  See More
                </button>
              </div>
            </div>
          </section>

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

                <div className="grid grid-cols-2 gap-3 text-xs mb-6">
                  {[
                    "Build Trust and Community with Forum",
                    "Earn More with Pay Per Conversation",
                    "Attract Patients with 5–Minute Free Call",
                    "Instant Access to Your Earnings with Wallet",
                  ].map((txt) => (
                    <div
                      key={txt}
                      className="flex items-center gap-2 rounded-full border border-[#d5c7a7] bg-[#fbeac1] px-3 py-2"
                    >
                      <span className="w-6 h-6 rounded-full bg-[#2f6c34]" />
                      <p className="text-[11px] text-[#4a4238]">{txt}</p>
                    </div>
                  ))}
                </div>

                <div className="flex gap-3">
                  <div className="w-32 h-10 rounded-lg bg-black text-white text-[11px] flex items-center justify-center">
                    Google Play
                  </div>
                  <div className="w-32 h-10 rounded-lg bg-black text-white text-[11px] flex items-center justify-center">
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
