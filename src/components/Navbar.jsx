import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      {/* 🔷 TOP STICKY BAR - CENTER TEXT & RIGHT CTA */}
      <div className="fixed top-0 left-0 w-full bg-[#3A3A3A] text-white px-6 py-3 z-[60] flex items-center">
        {/* Centered text using absolute centering trick */}
        <p className="absolute left-1/2 -translate-x-1/2 text-sm md:text-base font-medium">
          Register Yourself As An Amrutam Doctor
        </p>

        {/* CTA button stays right aligned */}
        <div className="ml-auto">
          <Link
            to="/join-now"
            className="hidden md:flex bg-[#2F6C34] text-white px-6 py-2 rounded-full items-center gap-2 hover:bg-[#255427] transition"
          >
            <i className="fa-solid fa-user-doctor"></i>
            Join Now
          </Link>
        </div>
      </div>

      {/* 🔶 MAIN NAVBAR */}
      <header className="fixed top-[52px] left-0 w-full bg-[#FCF6E8] shadow-sm z-[50]">
        <nav className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between py-4 px-6 space-y-4 md:space-y-0">
          {/* LOGO */}
          <Link
            to="/"
            className="text-3xl font-semibold tracking-[0.35em] text-[#2F5E3A]"
          >
            AMRUTAM
          </Link>

          {/* NAV LINKS */}
          <ul className="flex gap-10 text-lg font-medium text-[#3A3A3A]">
            <NavItem to="/">About Us</NavItem>
            <NavItem to="/onboarding">Onboarding</NavItem>
            <NavItem to="/faq">FAQ</NavItem>
            <NavItem to="/testimonials">Testimonials</NavItem>
          </ul>
        </nav>
      </header>
    </>
  );
}

function NavItem({ to, children }) {
  return (
    <li>
      <NavLink
        to={to}
        className={({ isActive }) =>
          `hover:text-[#2F6C34] transition ${
            isActive ? "text-[#2F6C34] font-semibold" : ""
          }`
        }
      >
        {children}
      </NavLink>
    </li>
  );
}
