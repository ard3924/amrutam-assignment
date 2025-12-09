import Seo from "../components/Seo";
import ConnectSection from "../components/ConnectSection";
import Footer from "../components/Footer";
import doctorrightimg from "../assets/doctorrightimg.png";

export default function DownloadApp() {
  return (
    <>
      <Seo
        title="Download App"
        description="Download the Amrutam Doctor App and manage your Ayurvedic consultations, earnings, schedules, and more."
        keywords="download amrutam app, ayurvedic doctor app, consultation app"
      />

      {/* MAIN SECTION */}
      <section className="min-h-screen bg-[#F8F0D8] pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

          {/* LEFT CONTENT */}
          <div>
            <h1 className="text-4xl font-semibold text-[#2F5E3A] leading-tight">
              Get Started Today – <br /> Download the App Now!
            </h1>

            <p className="text-[#5C5C5C] text-lg mt-3 max-w-md">
              Simplify consultations, manage patients, and grow your practice—all in one place.
            </p>

            {/* BULLET POINTS */}
            <ul className="mt-8 space-y-4 font-medium text-[#2F5E3A]">
              {[
                "Build Trust and Community with Forum",
                "Earn More with Pay Per Conversation",
                "Attract Patients with 5-Minute Free Call",
                "Instant Access to Your Earnings with Wallet"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span className="w-5 h-5 flex items-center justify-center bg-[#2F6C34] text-white rounded-full text-sm font-bold">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            {/* STORE BUTTONS */}
            <div className="mt-8 flex gap-4 flex-wrap">
              <img
                src="/images/playstore.png"
                alt="Google Play"
                className="h-12 cursor-pointer"
              />
              <img
                src="/images/appstore.png"
                alt="App Store"
                className="h-12 cursor-pointer"
              />
            </div>
          </div>

          {/* RIGHT PHONE MOCKUP */}
          <div className="flex justify-center md:justify-end">
            <div className="w-56 md:w-72 h-[420px] md:h-[520px] rounded-[32px] bg-white border border-[#CABF9E] shadow-[0_18px_30px_rgba(0,0,0,0.18)] overflow-hidden">
              <img
                src={doctorrightimg}
                alt="Amrutam App"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* CTA BUTTON */}
        <div className="text-center mt-14">
          <button className="px-8 py-3 text-lg font-semibold bg-[#2F6C34] text-white rounded-lg shadow hover:bg-[#255427] transition">
            Join Now
          </button>
        </div>
      </section>

      {/* CONNECT SECTION */}
      <ConnectSection />

      {/* EXISTING FOOTER */}
      <Footer />
    </>
  );
}
