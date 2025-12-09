import letsconnect from "../assets/letsconnect.jpg";

export default function ConnectSection() {
  return (
    <section className="bg-[#F7EFD7] py-24 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-semibold text-[#2F5E3A]">Let’s Connect</h2>
        <p className="text-[#5C5C5C] text-lg max-w-2xl mx-auto mt-3">
          We’re here to help you on your wellness journey. Reach out to us for questions,
          product inquiries, or personalized advice.
        </p>

        <div className="mt-14 grid md:grid-cols-2 gap-10 items-start">
          {/* Image */}
          <img
            src={letsconnect}
            alt="Ayurveda Ingredients"
            className="rounded-2xl shadow-md w-full object-cover"
          />

          {/* Form */}
          <form className="bg-white border border-[#D9CFB3] rounded-2xl p-10 shadow-sm text-left">
            {/* Top Fields */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="text-xs text-[#2F5E3A]">Your Name</label>
                <input
                  defaultValue="Vikas Kumar"
                  className="w-full border-b border-[#D9CFB3] text-sm py-2 bg-transparent outline-none"
                />
              </div>
              <div>
                <label className="text-xs text-[#2F5E3A]">Your Contact Number</label>
                <input
                  defaultValue="8743414476"
                  className="w-full border-b border-[#D9CFB3] text-sm py-2 bg-transparent outline-none"
                />
              </div>
            </div>

            {/* Email */}
            <div className="mt-8">
              <label className="text-xs text-[#2F5E3A]">Your Email</label>
              <input
                defaultValue="vikass@gmail.com"
                className="w-full border-b border-[#D9CFB3] text-sm py-2 bg-transparent outline-none"
              />
            </div>

            {/* Message */}
            <div className="mt-8">
              <label className="text-xs text-[#2F5E3A]">Message (Optional)</label>
              <input
                defaultValue="I want to On-board as a Doctor"
                className="w-full border-b border-[#D9CFB3] text-sm py-2 bg-transparent outline-none"
              />
            </div>

            {/* Button */}
            <button className="mt-10 w-full bg-[#2F6C34] hover:bg-[#255427] text-white font-semibold py-3 rounded-lg">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
