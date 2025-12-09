import Seo from "../components/Seo";

export default function Wallet() {
  return (
    <>
      <Seo
        title="Wallet & Earnings"
        description="Track and withdraw your earnings securely using Amrutam Wallet."
        keywords="doctor earnings, wallet, withdrawal, Amrutam payments"
      />

      <section className="min-h-screen bg-[#F8F0D8] pt-32 pb-20 px-4">
        <div className="max-w-5xl mx-auto">
          {/* Heading */}
          <h1 className="text-4xl font-semibold text-[#2F5E3A] text-center">
            Smart Wallet
          </h1>
          <p className="text-lg text-[#5C5C5C] text-center mt-2 max-w-xl mx-auto">
            Withdraw consultation earnings securely. Receive an OTP on your registered mobile number for every withdrawal request.
          </p>

          {/* Wallet Card */}
          <div className="mt-14 bg-[#FFF9E2] border border-[#D9CFB3] rounded-3xl shadow-[0_18px_40px_rgba(0,0,0,0.12)] px-8 py-8">
            
            {/* Top Section */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <p className="text-sm text-[#7C735E]">Amrutam Account</p>
                <p className="text-3xl font-semibold text-[#2F5E3A]">
                  ₹ 12,000.00
                </p>
              </div>

              <button className="px-6 py-2.5 bg-[#2F6C34] text-white text-sm font-semibold rounded-full shadow hover:bg-[#255427]">
                Request Withdrawal
              </button>
            </div>

            {/* OTP Note */}
            <p className="mt-3 text-sm text-[#5C5C5C]">
              A One-Time Password (OTP) will be sent to your registered mobile number during withdrawals to ensure transaction security.
            </p>

            {/* Recent Withdrawals */}
            <div className="mt-10">
              <h2 className="text-lg font-semibold text-[#2F5E3A]">
                Recent Withdrawals
              </h2>

              <div className="mt-4 space-y-3">
                {[
                  { date: "28th July 2024", type: "Money Withdrawal", amount: "₹ 44,000.00" },
                  { date: "15th June 2024", type: "Money Withdrawal", amount: "₹ 18,700.00" },
                  { date: "02nd May 2024", type: "Money Withdrawal", amount: "₹ 9,500.00" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex justify-between items-center bg-white border border-[#D9CFB3] rounded-xl px-5 py-4 shadow-sm"
                  >
                    <div>
                      <p className="font-semibold text-[#2F2F2F]">{item.date}</p>
                      <p className="text-sm text-[#5C5C5C]">{item.type}</p>
                    </div>
                    <p className="font-semibold text-[#2F5E3A]">{item.amount}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <button className="px-8 py-3 text-lg font-semibold bg-[#2F6C34] text-white rounded-lg shadow hover:bg-[#255427]">
              Join Now
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
