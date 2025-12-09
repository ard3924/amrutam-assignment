export default function Footer() {
  return (
    <footer className="bg-[#DDE2C6] text-[#2F5E3A] py-20 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-14">
        
        {/* COLUMN 1 — BRAND & CONTACT */}
        <div>
          <h2 className="text-3xl font-bold tracking-widest">AMRUTAM</h2>

          <h3 className="mt-8 font-semibold text-lg">Get in touch</h3>

          <p className="mt-4 text-sm leading-relaxed">
            support@amrutam.global <br />
            Amrutam Pharmaceuticals Pvt Ltd., <br />
            Chitragupt Ganj, Nai Sadak, Lashkar, <br />
            Gwalior – 474001 <br />
            +91 9713171999
          </p>
        </div>

        {/* COLUMN 2 — INFORMATION LINKS */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Information</h3>

          <ul className="space-y-2 text-sm leading-relaxed">
            <li className="hover:underline cursor-pointer">About Us</li>
            <li className="hover:underline cursor-pointer">Terms and Conditions</li>
            <li className="hover:underline cursor-pointer">Privacy Policy</li>
            <li className="hover:underline cursor-pointer">Privacy Policy for Mobile App</li>
            <li className="hover:underline cursor-pointer">Shipping and Return Policy</li>
            <li className="hover:underline cursor-pointer">International Delivery</li>
            <li className="hover:underline cursor-pointer">For Business, Hotels and Resorts</li>
          </ul>
        </div>

        {/* COLUMN 3 — SOCIAL ICONS */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>

          <div className="flex items-center gap-4 mt-2 text-xl">
            <a className="hover:text-[#1a3f28]" href="#" aria-label="Facebook">
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a className="hover:text-[#1a3f28]" href="#" aria-label="Instagram">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a className="hover:text-[#1a3f28]" href="#" aria-label="YouTube">
              <i className="fa-brands fa-youtube"></i>
            </a>
            <a className="hover:text-[#1a3f28]" href="#" aria-label="Twitter">
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a className="hover:text-[#1a3f28]" href="#" aria-label="LinkedIn">
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a className="hover:text-[#1a3f28]" href="#" aria-label="Pinterest">
              <i className="fa-brands fa-pinterest"></i>
            </a>
          </div>
        </div>
      </div>

      {/* COPYRIGHT LINE */}
      <p className="text-center text-xs text-[#3c4a36] mt-16">
        © {new Date().getFullYear()} Amrutam. All Rights Reserved.
      </p>
    </footer>
  );
}
